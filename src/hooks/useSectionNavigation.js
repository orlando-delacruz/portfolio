import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Shared hook for cross-page navigation with section scrolling support.
 * Used by both Navbar and Footer to avoid duplicate logic.
 */
const useSectionNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Navigate to a section on the Home page.
   * - If already on Home → scroll to section immediately.
   * - If on another page → navigate to Home with scroll state.
   */
  const navigateToSection = useCallback(
    (sectionId) => {
      if (!sectionId) return;

      if (location.pathname === "/") {
        // Already on Home — scroll directly
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to Home with scroll target in state
        navigate("/", { state: { scrollTo: sectionId } });
      }
    },
    [navigate, location.pathname]
  );

  /**
   * Navigate to a page using React Router.
   */
  const navigateToPage = useCallback(
    (path) => {
      if (path) {
        navigate(path);
      }
    },
    [navigate]
  );

  return { navigateToSection, navigateToPage };
};

export default useSectionNavigation;