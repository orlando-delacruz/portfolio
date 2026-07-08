import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // If we're navigating to Home with a scroll target, skip scroll-to-top
    if (pathname === "/" && state?.scrollTo) {
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;