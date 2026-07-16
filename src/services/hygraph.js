import { GraphQLClient } from "graphql-request";

const endpoint = import.meta.env.VITE_HYGRAPH_ENDPOINT;
const token = import.meta.env.VITE_HYGRAPH_ACCESS_TOKEN;

if (!endpoint || !token) {
  throw new Error("Missing Hygraph environment variables.");
}

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: { Authorization: `Bearer ${token}` },
});

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
    const data = await hygraphClient.request(query);
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
    const data = await hygraphClient.request(query);
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
    const data = await hygraphClient.request(query);
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
    const data = await hygraphClient.request(query);
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
    const data = await hygraphClient.request(query, { slug });
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
    const data = await hygraphClient.request(query);
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
    const data = await hygraphClient.request(query);
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
        blogCategory { name slug }
        author { name }
        thumbnail { url }
      }
    }
  `;
  try {
    const data = await hygraphClient.request(query);
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
    const data = await hygraphClient.request(query, { slug });
    return data.blogPost;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw new Error("Could not load blog post.", { cause: error });
  }
};
