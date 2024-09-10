import { useEffect, useRef } from "react";

const useScrollAnimation = (
  animationClass = "animate-push-up",
  options = {
    threshold: 0.5,
  },
  delay = "0ms"
) => {
  const elementRef = useRef(null);

  useEffect(() => {
    console.log(delay);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = delay;
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
  }, [animationClass, options, delay]);

  return elementRef;
};

export default useScrollAnimation;
