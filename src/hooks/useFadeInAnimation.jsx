import { useState, useEffect } from "react";

const useFadeInAnimation = (
  duration = "2s",
  animationClass = "animate-fade-in"
) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component has mounted
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Optional delay to ensure component is fully mounted

    return () => clearTimeout(timeoutId); // Cleanup timeout if component unmounts
  }, []);

  return isLoaded ? animationClass : `opacity-0`; // Return the animation class or hidden class
};

export default useFadeInAnimation;
