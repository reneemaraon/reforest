import { useEffect, useRef } from "react";

const useScrollAnimation = (
  animationClass = "animate-push-up",
  options = {
    threshold: 0.7,
  }
) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target); // Optionally stop observing after animation
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Cleanup observer on unmount
      }
    };
  }, [animationClass, options]);

  return elementRef;
};

export default useScrollAnimation;
