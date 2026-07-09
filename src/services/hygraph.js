import { GraphQLClient } from 'graphql-request';

// Validate environment variables
const endpoint = import.meta.env.VITE_HYGRAPH_ENDPOINT;
const token = import.meta.env.VITE_HYGRAPH_ACCESS_TOKEN;

if (!endpoint || !token) {
  throw new Error(
    'Missing Hygraph environment variables. Please set VITE_HYGRAPH_ENDPOINT and VITE_HYGRAPH_ACCESS_TOKEN in .env'
  );
}

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

/**
 * Fetch all technologies with categories and icons (for Skills section)
 */
export const fetchTechnologiesWithCategories = async () => {
  const query = `
    query TechnologiesWithCategories {
      technologies(first: 100) {
        name
        slug
        category
        icon {
          url
        }
      }
    }
  `;
  try {
    const data = await hygraphClient.request(query);
    return data.technologies;
  } catch (error) {
    console.error('GraphQL Error:', {
      message: error.message,
      response: error.response?.errors || 'No response errors',
      status: error.response?.status,
    });
    throw new Error('Could not load technologies. Please try again later.', { cause: error });
  }
};

// Alias for backward compatibility (e.g., TestHygraph.jsx)
export const fetchTechnologies = fetchTechnologiesWithCategories;

/**
 * Fetch featured projects (for Home page)
 */
export const fetchFeaturedProjects = async () => {
  const query = `
    query FeaturedProjects {
      projects(where: { isFeatured: true }, orderBy: featuredOrder_ASC) {
        title
        slug
        description
        category
        duration
        githubUrl
        githubVisibility
        liveDemoUrl
        liveDemoVisibility
        caseStudySlug
        thumbnail {
          url
        }
        technologies {
          ... on Technology {
            name
          }
        }
      }
    }
  `;
  try {
    const data = await hygraphClient.request(query);
    return data.projects;
  } catch (error) {
    console.error('GraphQL Error:', {
      message: error.message,
      response: error.response?.errors || 'No response errors',
      status: error.response?.status,
    });
    throw new Error('Could not load featured projects. Please try again later.', { cause: error });
  }
};

/**
 * Fetch all projects (for Projects page)
 */
export const fetchAllProjects = async () => {
  const query = `
    query Projects {
      projects {
        title
        slug
        description
        category
        duration
        githubUrl
        githubVisibility
        liveDemoUrl
        liveDemoVisibility
        caseStudySlug
        thumbnail {
          url
        }
        technologies {
          ... on Technology {
            name
          }
        }
      }
    }
  `;
  try {
    const data = await hygraphClient.request(query);
    return data.projects;
  } catch (error) {
    console.error('GraphQL Error:', {
      message: error.message,
      response: error.response?.errors || 'No response errors',
      status: error.response?.status,
    });
    throw new Error('Could not load projects. Please try again later.', { cause: error });
  }
};

/**
 * Fetch a project by slug (for Project Detail page)
 */
export const fetchProjectBySlug = async (slug) => {
  const query = `
    query Project($slug: String!) {
      project(where: { slug: $slug }) {
        title
        slug
        description
        overview {
          raw
        }
        highlights {
          raw
        }
        challenges {
          raw
        }
        category
        duration
        year
        role
        githubUrl
        githubVisibility
        liveDemoUrl
        liveDemoVisibility
        caseStudySlug
        thumbnail {
          url
        }
        screenshots {
          url
        }
        technologies {
          ... on Technology {
            name
            slug
          }
        }
      }
    }
  `;
  try {
    const data = await hygraphClient.request(query, { slug });
    return data.project;
  } catch (error) {
    console.error('GraphQL Error:', {
      message: error.message,
      response: error.response?.errors || 'No response errors',
      status: error.response?.status,
    });
    throw new Error('Could not load project. Please try again later.', { cause: error });
  }
};

/**
 * Fetch unique categories from technologies (for dynamic filters)
 */
export const fetchTechnologyCategories = async () => {
  const query = `
    query TechnologyCategories {
      technologies {
        category
      }
    }
  `;
  try {
    const data = await hygraphClient.request(query);
    const categories = data.technologies
      .map((tech) => tech.category)
      .filter(Boolean);
    return [...new Set(categories)];
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw new Error('Could not load technology categories.', { cause: error });
  }
};

/**
 * Fetch unique categories from projects (for dynamic project filters)
 */
export const fetchProjectCategories = async () => {
  const query = `
    query ProjectCategories {
      projects {
        category
      }
    }
  `;
  try {
    const data = await hygraphClient.request(query);
    const categories = data.projects
      .map((project) => project.category)
      .filter(Boolean);
    return [...new Set(categories)];
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw new Error('Could not load project categories.', { cause: error });
  }
};