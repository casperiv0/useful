import * as React from "react";

/**
 * Check if a component has mounted
 * @returns {boolean} wether the component has mounted
 */
export function useMounted(): boolean {
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return isMounted;
}
