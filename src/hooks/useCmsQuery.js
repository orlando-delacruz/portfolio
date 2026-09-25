import { useState, useEffect, useCallback, useRef } from "react";

/**
 * useCmsQuery — shared data-fetching hook for CMS-driven sections.
 * Returns { data, loading, error, retry, ref }.
 * - loading covers both the initial load and retries
 * - retry() re-fires the fetch (used by QueryError retry buttons)
 * - setState after unmount is guarded via a cancel flag
 * - options.defer: skip fetching until the attached `ref` scrolls near
 *   the viewport (IntersectionObserver + 400px pre-load margin).
 *   Attach the returned `ref` to the section wrapper; skeletons render
 *   in place until then. Falls back to immediate fetch when the ref is
 *   missing or IntersectionObserver is unavailable.
 *
 * @param {() => Promise<any>} fetchFn fetcher from services/hygraph
 * @param {{ defer?: boolean }} options
 */
const useCmsQuery = (fetchFn, options = {}) => {
  const { defer = false } = options;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const [visible, setVisible] = useState(!defer);
  const ref = useRef(null);

  useEffect(() => {
    if (!defer) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [defer]);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;

    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFn();
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load content.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [fetchFn, attempt, visible]);

  const retry = useCallback(() => setAttempt((a) => a + 1), []);

  return { data, loading, error, retry, ref };
};

export default useCmsQuery;
