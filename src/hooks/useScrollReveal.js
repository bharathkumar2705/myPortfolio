import { useEffect, useRef } from "react";

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("sr-visible");
          if (!options.repeat) observer.unobserve(element);
        } else if (options.repeat) {
          element.classList.remove("sr-visible");
        }
      },
      {
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || "0px 0px -60px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.repeat]);

  return ref;
};

export default useScrollReveal;
