import * as React from "react";

/**
 * check if a component has mounted
 * @returns {boolean} wether the component has mounted
 * @example
 * ```tsx
 * const Component = () => {
 *  const mounted = useMounted();
 *  console.log("Mounted?", mounted);
 *
 *  return <div>Hello world!</div>
 * }
 * ```
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
