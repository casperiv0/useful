import * as React from "react";

/**
 * see the window's viewport width. Returns 0 if none available yet.
 * @returns {number} The width of the viewport
 */
export function useViewport(): number {
  const [width, setWidth] = React.useState(typeof window !== "undefined" ? window.innerWidth : 0);

  React.useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return width;
}
