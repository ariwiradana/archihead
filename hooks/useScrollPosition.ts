import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial value

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};
