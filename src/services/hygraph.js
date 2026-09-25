import { GraphQLClient } from "graphql-request";

const endpoint = import.meta.env.VITE_HYGRAPH_ENDPOINT;
const token = import.meta.env.VITE_HYGRAPH_ACCESS_TOKEN;

if (!endpoint || !token) {
  throw new Error("Missing Hygraph environment variables.");
}

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: { Authorization: `Bearer ${token}` },
});

// ─── REQUEST POLICY: dedupe + TTL cache + 429 backoff ──────
// The free Hygraph tier throttles per-second reads. A homepage mount fires
// ~20 queries (~2x in dev StrictMode), so every request goes through here:
// - In-flight dedupe: identical concurrent calls share one promise.
// - TTL cache (5 min): remounts/navigations cost zero requests. Errors never cached.
// - 429 retry: up to 3 retries with exponential backoff, honoring Retry-After.

const CACHE_TTL_MS = 5 * 60 * 1000;
const MAX_RETRIES = 3;

const responseCache = new Map(); // cacheKey -> { data, expiresAt }
const inflightRequests = new Map(); // cacheKey -> Promise

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getRetryAfterMs = (error, attempt) => {
  const header =
    error?.response?.headers?.get?.("retry-after") ??
    error?.response?.headers?.["retry-after"];
  const seconds = Number(header);
  if (Number.isFinite(seconds) && seconds >= 0) return seconds * 1000;
  return Math.min(1000 * 2 ** attempt, 8000);
};

const isRateLimited = (error) =>
  error?.response?.status === 429 ||
  /too many requests/i.test(error?.message || "");

const requestWithPolicy = async (query, variables) => {
  const cacheKey = JSON.stringify([query, variables || null]);

  const cached = responseCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.data;
  if (cached) responseCache.delete(cacheKey);

  const inflight = inflightRequests.get(cacheKey);
  if (inflight) return inflight;

  const run = (async () => {
    let lastError;
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const data = await requestWithPolicy(query, variables);
        responseCache.set(cacheKey, {
          data,
          expiresAt: Date.now() + CACHE_TTL_MS,
        });
        return data;
      } catch (error) {
        lastError = error;
        if (!isRateLimited(error) || attempt === MAX_RETRIES) throw error;
        await sleep(getRetryAfterMs(error, attempt));
      }
    }
    throw lastError;
  })();

  inflightRequests.set(cacheKey, run);
  try {
    return await run;
  } finally {
    inflightRequests.delete(cacheKey);
  }
};

// ─── TECHNOLOGIES ─────────────────────────────────────────────

export const fetchTechnologiesWithCategories = async () => {
  const query = `
    query TechnologiesWithCategories {
      technologies(first: 100) {
        name
        slug
        category
        icon { url }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.technologies;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load technologies.", { cause: error });
  }
};

export const fetchTechnologies = fetchTechnologiesWithCategories;

export const fetchTechnologyCategories = async () => {
  const query = `
    query TechnologyCategories {
      technologies(first: 100) { category }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    const categories = data.technologies.map((t) => t.category).filter(Boolean);
    return [...new Set(categories)];
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load technology categories.", { cause: error });
  }
};

// ─── PROJECTS ──────────────────────────────────────────────────

export const fetchFeaturedProjects = async () => {
  const query = `
    query FeaturedProjects {
      projects(where: { isFeatured: true }, orderBy: featuredOrder_ASC) {
        title
        slug
        description
        category
        duration
        githubVisibility
        githubUrl
        liveDemoUrl
        liveDemoVisibility
        caseStudySlug
        thumbnail { url }
        technologies(first: 100) { ... on Technology { name } }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.projects;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load featured projects.", { cause: error });
  }
};

export const fetchAllProjects = async () => {
  const query = `
    query Projects {
      projects {
        title
        slug
        description
        category
        duration
        githubVisibility
        githubUrl
        liveDemoUrl
        liveDemoVisibility
        caseStudySlug
        thumbnail { url }
        technologies(first: 100) { ... on Technology { name } }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.projects;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load projects.", { cause: error });
  }
};

export const fetchProjectBySlug = async (slug) => {
  const query = `
    query Project($slug: String!) {
      project(where: { slug: $slug }) {
        title
        slug
        description
        overview { raw }
        highlights { raw }
        challenges { raw }
        category
        duration
        year
        role
        githubVisibility
        githubUrl
        liveDemoUrl
        liveDemoVisibility
        caseStudySlug
        thumbnail { url }
        screenshots(first: 100) { url }
        technologies(first: 100) { ... on Technology { name slug } }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query, { slug });
    return data.project;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load project.", { cause: error });
  }
};

export const fetchProjectCategories = async () => {
  const query = `
    query ProjectCategories {
      projects { category }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    const categories = data.projects.map((p) => p.category).filter(Boolean);
    return [...new Set(categories)];
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load project categories.", { cause: error });
  }
};

// ─── BLOG ──────────────────────────────────────────────────────

export const fetchFeaturedBlogPost = async () => {
  const query = `
    query FeaturedBlogPost {
      blogPosts(where: { isFeatured: true }, orderBy: date_DESC, first: 1) {
        title
        slug
        excerpt
        date
        duration
        blogCategory { name slug }
        author { name role }
        thumbnail { url }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.blogPosts[0] || null;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load featured blog post.", { cause: error });
  }
};

export const fetchAllBlogPosts = async () => {
  const query = `
    query AllBlogPosts {
      blogPosts(orderBy: date_DESC) {
        title
        slug
        excerpt
        date
        duration
        isFeatured
        sortingOrder
        blogCategory { name slug }
        author { name }
        thumbnail { url }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.blogPosts;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load blog posts.", { cause: error });
  }
};

export const fetchBlogPostBySlug = async (slug) => {
  const query = `
    query BlogPost($slug: String!) {
      blogPost(where: { slug: $slug }) {
        title
        slug
        excerpt
        content { raw }
        date
        duration
        blogCategory { name slug }
        author { name role avatar { url } bio }
        thumbnail { url }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query, { slug });
    return data.blogPost;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load blog post.", { cause: error });
  }
};

// ─── SHARED: SECTION HEADINGS + COUNTS ─────────────────────
// CMS models (create in Hygraph dashboard — see README "CMS models"):
//   SectionHeading { key:Unique, pretitle, title, highlight }

export const fetchSectionHeading = async (key) => {
  const query = `
    query SectionHeading($key: String!) {
      sectionHeading(where: { key: $key }) {
        pretitle
        title
        highlight
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query, { key });
    return data.sectionHeading;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load section heading.", { cause: error });
  }
};

export const fetchCollectionCounts = async () => {
  const query = `
    query CollectionCounts {
      projects: projectsConnection { aggregate { count } }
      technologies: technologiesConnection { aggregate { count } }
      blogPosts: blogPostsConnection { aggregate { count } }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return {
      projects: data.projects.aggregate.count,
      technologies: data.technologies.aggregate.count,
      blogPosts: data.blogPosts.aggregate.count,
    };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load collection counts.", { cause: error });
  }
};

// ─── SHARED: PAGE HERO / LINKS / CARDS / BLOCKS ─────────────
// Consolidated models (14 total — plan limit):
//   PageHero { key:Unique home|about|project|blog|contact, pretitle,
//     label, title, highlightTitle, headingMain, highlight, subtitle,
//     description, subheading, primaryLabel, primaryLink, secondaryLabel,
//     imageAlt, image{url width height}, background{url}, secondaryCv{url} }
//   SocialLink { platform, label, url, color, iconKey,
//     placement: hero-socials|hero-skills|footer-socials, order }
//   FeatureCard { slug:Unique, section: home-services|about-whatido|
//     about-approach, title, description, content, tag, iconKey, order }
//   ContentBlock { key:Unique about-story|approach-intro|current-goals|
//     project-overview, pretitle, title, highlight, headingMain,
//     headingHighlight, imageAlt, paragraphs{raw}, tags, image{url w h} }

export const fetchPageHero = async (key) => {
  const query = `
    query PageHero($key: String!) {
      pageHero(where: { key: $key }) {
        pretitle
        label
        title
        highlightTitle
        headingMain
        highlight
        subtitle
        description
        subheading
        primaryLabel
        primaryLink
        secondaryLabel
        imageAlt
        image { url width height }
        background { url }
        secondaryCv { url }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query, { key });
    return data.pageHero;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load page hero.", { cause: error });
  }
};

export const fetchSocialLinks = async (placement) => {
  const query = `
    query SocialLinks($placement: String!) {
      socialLinks(where: { placement: $placement }, orderBy: order_ASC) {
        platform
        label
        url
        color
        iconKey
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query, { placement });
    return data.socialLinks;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load social links.", { cause: error });
  }
};

export const fetchFeatureCards = async (section) => {
  const query = `
    query FeatureCards($section: String!) {
      featureCards(where: { section: $section }, orderBy: order_ASC) {
        slug
        title
        description
        content
        tag
        iconKey
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query, { section });
    return data.featureCards;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load feature cards.", { cause: error });
  }
};

export const fetchContentBlock = async (key) => {
  const query = `
    query ContentBlock($key: String!) {
      contentBlock(where: { key: $key }) {
        pretitle
        title
        highlight
        headingMain
        headingHighlight
        imageAlt
        paragraphs { raw }
        tags
        image { url width height }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query, { key });
    return data.contentBlock;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load content block.", { cause: error });
  }
};

// ─── HOME ──────────────────────────────────────────────────
// Models: HomeAbout(singleton) { pretitle title titleHighlight body1
//   body2 image{url width height} imageAlt ctaLabel ctaLink },
// Experience { slug date position company description order },
// Testimonial { name position quote rating avatar{url} order }

export const fetchHomeHero = async () => {
  try {
    const [hero, socialLinks, skills] = await Promise.all([
      fetchPageHero("home"),
      fetchSocialLinks("hero-socials"),
      fetchSocialLinks("hero-skills"),
    ]);
    if (!hero) return null;
    return { ...hero, socialLinks, skills };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load home hero.", { cause: error });
  }
};

export const fetchHomeAbout = async () => {
  const query = `
    query HomeAbout {
      homeAbouts(first: 1) {
        pretitle
        title
        titleHighlight
        body1
        body2
        image { url width height }
        imageAlt
        ctaLabel
        ctaLink
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.homeAbouts[0] || null;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load home about.", { cause: error });
  }
};

export const fetchServices = async () => {
  try {
    return await fetchFeatureCards("home-services");
  } catch (error) {
    throw new Error("Could not load services.", { cause: error });
  }
};

export const fetchExperiences = async () => {
  const query = `
    query Experiences {
      experiences(orderBy: order_ASC) {
        slug
        date
        position
        company
        description
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.experiences;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load experience.", { cause: error });
  }
};

export const fetchTestimonials = async () => {
  const query = `
    query Testimonials {
      testimonials(orderBy: order_ASC) {
        name
        position
        quote
        rating
        avatar { url }
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.testimonials;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load testimonials.", { cause: error });
  }
};

// ─── ABOUT PAGE ────────────────────────────────────────────
// QuickFact { label value order }; WhatIDo/Approach cards + approach
// intro + story + goals all via FeatureCard / ContentBlock above.

export const fetchAboutHero = async () => {
  try {
    return await fetchPageHero("about");
  } catch (error) {
    throw new Error("Could not load about hero.", { cause: error });
  }
};

export const fetchAboutStory = async () => {
  try {
    return await fetchContentBlock("about-story");
  } catch (error) {
    throw new Error("Could not load about story.", { cause: error });
  }
};

export const fetchQuickFacts = async () => {
  const query = `
    query QuickFacts {
      quickFacts(orderBy: order_ASC) {
        label
        value
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.quickFacts;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load quick facts.", { cause: error });
  }
};

export const fetchWhatIDo = async () => {
  try {
    return await fetchFeatureCards("about-whatido");
  } catch (error) {
    throw new Error("Could not load what-I-do cards.", { cause: error });
  }
};

export const fetchApproach = async () => {
  try {
    const [intro, cards] = await Promise.all([
      fetchContentBlock("approach-intro"),
      fetchFeatureCards("about-approach"),
    ]);
    return { intro, cards };
  } catch (error) {
    throw new Error("Could not load approach.", { cause: error });
  }
};

export const fetchCurrentGoals = async () => {
  try {
    return await fetchContentBlock("current-goals");
  } catch (error) {
    throw new Error("Could not load current goals.", { cause: error });
  }
};

// ─── PROJECT / BLOG PAGE HEROS + OVERVIEW ──────────────────
// Stats are derived live via fetchCollectionCounts — never stored.

export const fetchProjectHero = async () => {
  try {
    return await fetchPageHero("project");
  } catch (error) {
    throw new Error("Could not load project hero.", { cause: error });
  }
};

export const fetchProjectOverview = async () => {
  try {
    return await fetchContentBlock("project-overview");
  } catch (error) {
    throw new Error("Could not load project overview.", { cause: error });
  }
};

export const fetchBlogHero = async () => {
  try {
    return await fetchPageHero("blog");
  } catch (error) {
    throw new Error("Could not load blog hero.", { cause: error });
  }
};

// ─── CONTACT ───────────────────────────────────────────────
// Models: ContactHero → PageHero(key=contact); ContactChannel { slug
//   title value href description iconKey order }; FaqItem { question
//   answer order }

export const fetchContactHero = async () => {
  try {
    return await fetchPageHero("contact");
  } catch (error) {
    throw new Error("Could not load contact hero.", { cause: error });
  }
};

export const fetchContactChannels = async () => {
  const query = `
    query ContactChannels {
      contactChannels(orderBy: order_ASC) {
        slug
        title
        value
        href
        description
        iconKey
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.contactChannels;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load contact channels.", { cause: error });
  }
};

export const fetchFaqItems = async () => {
  const query = `
    query FaqItems {
      faqItems(orderBy: order_ASC) {
        question
        answer
        order
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.faqItems;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load FAQ.", { cause: error });
  }
};

// ─── CHROME: FOOTER + CTA (Navbar stays static by design) ──
// Models: FooterContent(singleton) { title subtitle description
//   footerBg{url} logo{url} logoAlt }, SocialLink(placement=
//   footer-socials), FooterLink { label href linkType group iconKey
//   order }, CtaContent(singleton) { title description primaryLabel
//   primaryHref secondaryLabel secondaryHref image{url w h} imageAlt }

export const fetchFooterContent = async () => {
  const query = `
    query FooterContent {
      footerContents(first: 1) {
        title
        subtitle
        description
        footerBg { url }
        logo { url }
        logoAlt
      }
      footerLinks(orderBy: order_ASC) {
        label
        href
        linkType
        group
        iconKey
      }
    }
  `;
  try {
    const [contentData, socials] = await Promise.all([
      requestWithPolicy(query),
      fetchSocialLinks("footer-socials"),
    ]);
    if (!contentData.footerContents[0]) return null;
    return {
      ...contentData.footerContents[0],
      socials,
      links: contentData.footerLinks,
    };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load footer.", { cause: error });
  }
};

export const fetchCtaContent = async () => {
  const query = `
    query CtaContent {
      ctaContents(first: 1) {
        title
        description
        primaryLabel
        primaryHref
        secondaryLabel
        secondaryHref
        image { url width height }
        imageAlt
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return data.ctaContents[0] || null;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load call to action.", { cause: error });
  }
};

// ─── MERGED SECTION QUERIES (one POST per section) ─────────
// Each pairs content + its SectionHeading in a single document to
// halve the per-mount request burst (rate-limit protection).
// Shapes match the previous Promise.all results exactly.

const sectionHeadingFields = `
  pretitle
  title
  highlight
`;

export const fetchHomeHeroSection = async () => {
  const query = `
    query HomeHeroSection {
      pageHero(where: { key: "home" }) {
        label
        title
        highlightTitle
        subtitle
        primaryLabel
        primaryLink
        secondaryLabel
        imageAlt
        image { url width height }
        secondaryCv { url }
      }
      heroSocials: socialLinks(where: { placement: "hero-socials" }, orderBy: order_ASC) {
        platform
        label
        url
        iconKey
      }
      heroSkills: socialLinks(where: { placement: "hero-skills" }, orderBy: order_ASC) {
        label
        color
        iconKey
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    if (!data.pageHero) return null;
    return { ...data.pageHero, socialLinks: data.heroSocials, skills: data.heroSkills };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load home hero.", { cause: error });
  }
};

export const fetchServicesSection = async () => {
  const query = `
    query ServicesSection {
      services: featureCards(where: { section: "home-services" }, orderBy: order_ASC) {
        slug
        title
        description
        tag
        iconKey
      }
      heading: sectionHeading(where: { key: "home-services" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { services: data.services, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load services.", { cause: error });
  }
};

export const fetchExperienceSection = async () => {
  const query = `
    query ExperienceSection {
      experience: experiences(orderBy: order_ASC) {
        slug
        date
        position
        company
        description
      }
      heading: sectionHeading(where: { key: "home-experience" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { experience: data.experience, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load experience.", { cause: error });
  }
};

export const fetchTestimonialsSection = async () => {
  const query = `
    query TestimonialsSection {
      testimonials(orderBy: order_ASC) {
        name
        position
        quote
        rating
        avatar { url }
      }
      heading: sectionHeading(where: { key: "home-testimonials" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { testimonials: data.testimonials, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load testimonials.", { cause: error });
  }
};

export const fetchProjectsSection = async () => {
  const query = `
    query ProjectsSection {
      projects(where: { isFeatured: true }, orderBy: featuredOrder_ASC) {
        title
        slug
        description
        category
        duration
        githubVisibility
        githubUrl
        liveDemoUrl
        liveDemoVisibility
        caseStudySlug
        thumbnail { url }
        technologies(first: 100) { ... on Technology { name } }
      }
      heading: sectionHeading(where: { key: "home-projects" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { projects: data.projects, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load featured projects.", { cause: error });
  }
};

export const fetchBlogSectionPosts = async () => {
  const query = `
    query BlogSectionPosts {
      posts: blogPosts(orderBy: date_DESC) {
        title
        slug
        excerpt
        date
        duration
        isFeatured
        sortingOrder
        blogCategory { name slug }
        author { name }
        thumbnail { url }
      }
      heading: sectionHeading(where: { key: "home-blog" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { posts: data.posts, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load blog posts.", { cause: error });
  }
};

export const fetchSkillsSection = async () => {
  const query = `
    query SkillsSection {
      technologies(first: 100) {
        name
        slug
        category
        icon { url }
      }
      heading: sectionHeading(where: { key: "home-skills" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { technologies: data.technologies, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load technologies.", { cause: error });
  }
};

export const fetchWhatIDoSection = async () => {
  const query = `
    query WhatIDoSection {
      cards: featureCards(where: { section: "about-whatido" }, orderBy: order_ASC) {
        slug
        title
        content
        iconKey
      }
      heading: sectionHeading(where: { key: "about-whatido" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { cards: data.cards, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load what-I-do cards.", { cause: error });
  }
};

export const fetchApproachSection = async () => {
  const query = `
    query ApproachSection {
      intro: contentBlock(where: { key: "approach-intro" }) {
        paragraphs { raw }
      }
      cards: featureCards(where: { section: "about-approach" }, orderBy: order_ASC) {
        slug
        title
        content
        iconKey
      }
      heading: sectionHeading(where: { key: "about-approach" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { intro: data.intro, cards: data.cards, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load approach.", { cause: error });
  }
};

export const fetchContactInfoSection = async () => {
  const query = `
    query ContactInfoSection {
      cards: contactChannels(orderBy: order_ASC) {
        slug
        title
        value
        href
        description
        iconKey
      }
      heading: sectionHeading(where: { key: "contact-info" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { cards: data.cards, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load contact channels.", { cause: error });
  }
};

export const fetchFaqSection = async () => {
  const query = `
    query FaqSection {
      items: faqItems(orderBy: order_ASC) {
        question
        answer
      }
      heading: sectionHeading(where: { key: "contact-faq" }) {
        ${sectionHeadingFields}
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    return { items: data.items, heading: data.heading };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load FAQ.", { cause: error });
  }
};

export const fetchFooterSection = async () => {
  const query = `
    query FooterSection {
      footerContents(first: 1) {
        title
        subtitle
        description
        footerBg { url }
        logo { url }
        logoAlt
      }
      footerLinks(orderBy: order_ASC) {
        label
        href
        linkType
        group
        iconKey
      }
      footerSocials: socialLinks(where: { placement: "footer-socials" }, orderBy: order_ASC) {
        url
        label
        iconKey
      }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    if (!data.footerContents[0]) return null;
    return {
      ...data.footerContents[0],
      socials: data.footerSocials,
      links: data.footerLinks,
    };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load footer.", { cause: error });
  }
};

export const fetchProjectHeroSection = async () => {
  const query = `
    query ProjectHeroSection {
      hero: pageHero(where: { key: "project" }) {
        pretitle
        headingMain
        headingHighlight
        description
      }
      projects: projectsConnection { aggregate { count } }
      technologies: technologiesConnection { aggregate { count } }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    if (!data.hero) return null;
    return {
      hero: data.hero,
      counts: {
        projects: data.projects.aggregate.count,
        technologies: data.technologies.aggregate.count,
      },
    };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load project hero.", { cause: error });
  }
};

export const fetchBlogHeroSection = async () => {
  const query = `
    query BlogHeroSection {
      hero: pageHero(where: { key: "blog" }) {
        pretitle
        headingMain
        headingHighlight
        description
      }
      blogPosts: blogPostsConnection { aggregate { count } }
    }
  `;
  try {
    const data = await requestWithPolicy(query);
    if (!data.hero) return null;
    return {
      hero: data.hero,
      counts: { blogPosts: data.blogPosts.aggregate.count },
    };
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load blog hero.", { cause: error });
  }
};
