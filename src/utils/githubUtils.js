/**
 * Get the display label for the GitHub button based on visibility.
 * @param {string} visibility - 'public' | 'private' | 'none' (lowercase from Hygraph)
 * @returns {string} The button label
 */
export const getGitHubLabel = (visibility) => {
  switch (visibility?.toLowerCase()) {
    case 'public':
      return 'GitHub';
    case 'private':
      return 'Private';
    case 'none':
      return 'None';
    default:
      return 'GitHub';
  }
};