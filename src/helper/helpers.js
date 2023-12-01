import { useEffect, useState } from "react";

export function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    let timeoutId = 0;

    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowSize(getSize()), 150);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
}
