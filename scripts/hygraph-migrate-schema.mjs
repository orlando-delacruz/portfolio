#!/usr/bin/env node
/**
 * Hygraph schema migration — portfolio dynamic content.
 *
 * Creates ~25 models + fields in ONE atomic transaction (all-or-nothing).
 * Existing models (Project, Technology, BlogPost, ...) are untouched.
 * If a model already exists the migration fails safely with no partial changes.
 *
 * Prerequisites:
 *   npm install @hygraph/management-sdk
 *   A Permanent Auth Token with Management API + environment-read permissions.
 *
 * Usage (token is NEVER stored in this file — pass it explicitly):
 *   node scripts/hygraph-migrate-schema.mjs --endpoint <ENV_ENDPOINT> --token <MGMT_TOKEN> [--dry-run] [--name <migration-name>]
 *   # or via env: HYGRAPH_ENDPOINT / HYGRAPH_MGMT_TOKEN
 *
 * Field-type mapping:
 *   copy              -> String (single line UI; long text renders fine)
 *   paragraphs        -> RichText
 *   tags (goals)      -> Json (array of strings)
 *   order / rating    -> Int
 *   slug / key        -> String, unique
 *   images / CV       -> Asset relation (optional, seeder skips them)
 * All fields optional so seeding succeeds before images are linked.
 */

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (cur.startsWith("--")) {
      const key = cur.slice(2);
      const next = arr[i + 1];
      acc.push([key, next && !next.startsWith("--") ? next : true]);
    }
    return acc;
  }, []),
);

const endpoint = args.endpoint || process.env.HYGRAPH_ENDPOINT;
const authToken = args.token || process.env.HYGRAPH_MGMT_TOKEN;
const dryRun = Boolean(args["dry-run"]);
const migrationName = typeof args.name === "string" ? args.name : undefined;

if (!endpoint || !authToken) {
  console.error(
    "Missing endpoint/token.\n" +
      "Usage: node scripts/hygraph-migrate-schema.mjs --endpoint <ENV_ENDPOINT> --token <MGMT_TOKEN> [--dry-run]\n" +
      "Endpoint: Hygraph Settings > Environments. Token: Settings > Permanent Auth Tokens (Management API).",
  );
  process.exit(1);
}

let SDK;
try {
  SDK = await import("@hygraph/management-sdk");
} catch {
  console.error("Run: npm install @hygraph/management-sdk");
  process.exit(1);
}

const { Client, SimpleFieldType, RelationalFieldType } = SDK;
if (!Client || !SimpleFieldType) {
  console.error(
    "Unexpected @hygraph/management-sdk exports. " +
      `Found: ${Object.keys(SDK).join(", ")}. ` +
      "Check the installed version against https://hygraph.com/docs/api-reference/management-sdk/management-sdk-quickstart",
  );
  process.exit(1);
}

const T = SimpleFieldType; // keys are capitalized: String | Richtext | Int | Json
const str = (apiId, displayName, opts = {}) => ({ apiId, displayName, type: "String", ...opts });
const rich = (apiId, displayName) => ({ apiId, displayName, type: "Richtext" });
const int = (apiId, displayName) => ({ apiId, displayName, type: "Int" });
const json = (apiId, displayName) => ({ apiId, displayName, type: "Json" });
const uniq = (apiId, displayName) => ({ apiId, displayName, type: "String", isUnique: true });

// Guard: fail fast if the installed SDK renames these enum keys.
for (const k of ["String", "Richtext", "Int", "Json"]) {
  if (!T[k]) {
    console.error(`SimpleFieldType.${k} missing. Found keys: ${Object.keys(T).join(", ")}`);
    process.exit(1);
  }
}

// Model definitions: apiId MUST stay in sync with src/services/hygraph.js queries.
// Consolidated to 14 models (plan limit: 20 total incl. 5 existing).
// Shared models discriminate rows via key/section/placement + optional fields.
const MODELS = [
  { apiId: "SectionHeading", plural: "SectionHeadings", fields: [uniq("key", "Key"), str("pretitle", "Pretitle"), str("title", "Title"), str("highlight", "Highlight")] },
  {
    apiId: "PageHero", plural: "PageHeroes",
    fields: [uniq("key", "Key: home|about|project|blog|contact"), str("pretitle", "Pretitle"), str("label", "Label (badge)"), str("title", "Title"), str("highlightTitle", "Highlight Title"), str("headingMain", "Heading Main"), str("headingHighlight", "Heading Highlight"), str("highlight", "Highlight"), str("subtitle", "Subtitle"), str("description", "Description"), str("subheading", "Subheading"), str("primaryLabel", "Primary Label"), str("primaryLink", "Primary Link"), str("secondaryLabel", "Secondary Label"), str("imageAlt", "Image Alt")],
    assets: ["image", "background", "secondaryCv"],
  },
  { apiId: "SocialLink", plural: "SocialLinks", fields: [str("platform", "Platform"), str("label", "Label"), str("url", "URL"), str("color", "Color (skill pills)"), str("iconKey", "Icon Key"), str("placement", "Placement: hero-socials|hero-skills|footer-socials"), int("order", "Order")] },
  {
    apiId: "HomeAbout", plural: "HomeAbouts",
    fields: [str("pretitle", "Pretitle"), str("title", "Title"), str("titleHighlight", "Title Highlight"), str("body1", "Body 1"), str("body2", "Body 2"), str("imageAlt", "Image Alt"), str("ctaLabel", "CTA Label"), str("ctaLink", "CTA Link")],
    assets: ["image"],
  },
  { apiId: "FeatureCard", plural: "FeatureCards", fields: [uniq("slug", "Slug"), str("section", "Section: home-services|about-whatido|about-approach"), str("title", "Title"), str("description", "Description"), str("content", "Content"), str("tag", "Tag"), str("iconKey", "Icon Key"), int("order", "Order")] },
  { apiId: "Experience", plural: "Experiences", fields: [uniq("slug", "Slug"), str("date", "Date"), str("position", "Position"), str("company", "Company"), str("description", "Description"), int("order", "Order")] },
  {
    apiId: "Testimonial", plural: "Testimonials",
    fields: [str("name", "Name"), str("position", "Position"), str("quote", "Quote"), int("rating", "Rating"), int("order", "Order")],
    assets: ["avatar"],
  },
  {
    apiId: "ContentBlock", plural: "ContentBlocks",
    fields: [uniq("key", "Key: about-story|approach-intro|current-goals|project-overview"), str("pretitle", "Pretitle"), str("title", "Title"), str("highlight", "Highlight"), str("headingMain", "Heading Main"), str("headingHighlight", "Heading Highlight"), str("imageAlt", "Image Alt"), rich("paragraphs", "Paragraphs"), json("tags", "Tags (JSON string array)")],
    assets: ["image"],
  },
  { apiId: "QuickFact", plural: "QuickFacts", fields: [str("label", "Label"), str("value", "Value"), int("order", "Order")] },
  { apiId: "ContactChannel", plural: "ContactChannels", fields: [uniq("slug", "Slug"), str("title", "Title"), str("value", "Value"), str("href", "Href"), str("description", "Description"), str("iconKey", "Icon Key"), int("order", "Order")] },
  { apiId: "FaqItem", plural: "FaqItems", fields: [str("question", "Question"), str("answer", "Answer"), int("order", "Order")] },
  {
    apiId: "FooterContent", plural: "FooterContents",
    fields: [str("title", "Title"), str("subtitle", "Subtitle"), str("description", "Description"), str("logoAlt", "Logo Alt")],
    assets: ["footerBg", "logo"],
  },
  { apiId: "FooterLink", plural: "FooterLinks", fields: [str("label", "Label"), str("href", "Href"), str("linkType", "Link Type: page|section|external"), str("group", "Group: quick|pages|contact"), str("iconKey", "Icon Key"), int("order", "Order")] },
  {
    apiId: "CtaContent", plural: "CtaContents",
    fields: [str("title", "Title"), str("description", "Description"), str("primaryLabel", "Primary Label"), str("primaryHref", "Primary Href"), str("secondaryLabel", "Secondary Label"), str("secondaryHref", "Secondary Href"), str("imageAlt", "Image Alt")],
    assets: ["image"],
  },
];

const fieldCount = MODELS.reduce((n, m) => n + m.fields.length + (m.assets || []).length, 0);
console.log(`Plan: ${MODELS.length} models, ${fieldCount} fields (all optional).`);
if (dryRun) {
  for (const m of MODELS) {
    console.log(`- ${m.apiId} (${m.plural}): ${m.fields.map((f) => f.apiId).join(", ")}${(m.assets || []).length ? ` + assets: ${m.assets.join(", ")}` : ""}`);
  }
  console.log("Dry run — nothing executed. Re-run without --dry-run to apply.");
  process.exit(0);
}

const client = new Client({ authToken, endpoint, ...(migrationName ? { name: migrationName } : {}) });

for (const m of MODELS) {
  client.createModel({ apiId: m.apiId, apiIdPlural: m.plural, displayName: m.apiId });
  for (const f of m.fields) {
    client.createSimpleField({
      parentApiId: m.apiId,
      apiId: f.apiId,
      displayName: f.displayName,
      type: T[f.type],
      ...(f.isUnique ? { isUnique: true } : {}),
    });
  }
  for (const a of m.assets || []) {
    client.createRelationalField({
      parentApiId: m.apiId,
      apiId: a,
      displayName: a,
      type: RelationalFieldType.Asset,
      reverseField: { isUnidirectional: true, apiId: `${m.apiId.toLowerCase()}_${a}`, displayName: `${m.apiId} ${a}`, modelApiId: "Asset" },
    });
  }
}

try {
  const run = typeof client.run === "function" ? () => client.run() : () => client.runMigration();
  const result = await run();
  console.log("Migration applied:", result ?? "OK");
} catch (err) {
  console.error("Migration FAILED (atomic rollback — nothing was created):");
  console.error(err?.message || err);
  process.exit(1);
}
