// ============================================================
// Shared utilities for technology categories
// ============================================================

// Internal category values from Hygraph -> Display labels
// Supports multiple input formats (lowercase, capitalized, with underscores)
const CATEGORY_DISPLAY_MAP = {
  // Lowercase
  frontend: 'Front End',
  backend: 'Back End',
  tools: 'Tools',
  soft_skills: 'Soft Skills',
  // Capitalized
  Frontend: 'Front End',
  Backend: 'Back End',
  Tools: 'Tools',
  SoftSkills: 'Soft Skills',
  // With underscores
  front_end: 'Front End',
  back_end: 'Back End',
  // 👇 removed duplicate: soft_skills: 'Soft Skills',
  // Hyphenated
  'front-end': 'Front End',
  'back-end': 'Back End',
  'soft-skills': 'Soft Skills',
};

// Desired display order for technology categories (Skills section)
export const DISPLAY_ORDER = ['Front End', 'Back End', 'Tools', 'Soft Skills'];

// Desired display order for project categories (Projects page)
export const PROJECT_CATEGORY_ORDER = ['Personal', 'Freelance', 'Academic', 'Work'];

/**
 * Get the display label for a category from its internal value.
 * @param {string} category - The internal category value (e.g., 'frontend', 'Frontend', 'soft_skills')
 * @returns {string} The user‑friendly label (e.g., 'Front End', 'Soft Skills')
 */
export const getDisplayLabel = (category) => {
  if (!category) return 'Uncategorized';
  // Try exact match first
  if (CATEGORY_DISPLAY_MAP[category]) {
    return CATEGORY_DISPLAY_MAP[category];
  }
  // Try lowercase match
  const lowerKey = category.toLowerCase();
  if (CATEGORY_DISPLAY_MAP[lowerKey]) {
    return CATEGORY_DISPLAY_MAP[lowerKey];
  }
  // Fallback: Capitalize with spaces
  return category
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Sort technology categories according to DISPLAY_ORDER.
 * @param {string[]} categories - Array of internal category values.
 * @returns {string[]} Sorted array (by display order, then alphabetically).
 */
export const getSortedCategories = (categories) => {
  const unique = [...new Set(categories.filter(Boolean))];
  return unique.sort((a, b) => {
    const labelA = getDisplayLabel(a);
    const labelB = getDisplayLabel(b);
    const indexA = DISPLAY_ORDER.indexOf(labelA);
    const indexB = DISPLAY_ORDER.indexOf(labelB);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return labelA.localeCompare(labelB);
  });
};

/**
 * Sort project categories according to PROJECT_CATEGORY_ORDER.
 * @param {string[]} categories - Array of project category values.
 * @returns {string[]} Sorted array (by display order, then alphabetically).
 */
export const getSortedProjectCategories = (categories) => {
  const unique = [...new Set(categories.filter(Boolean))];
  return unique.sort((a, b) => {
    const indexA = PROJECT_CATEGORY_ORDER.indexOf(a);
    const indexB = PROJECT_CATEGORY_ORDER.indexOf(b);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b);
  });
};