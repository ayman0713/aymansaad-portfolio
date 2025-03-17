import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
          observerInstance.unobserve(ref.current); // Stop observing after reveal
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      {children}
    </div>
  );
};
