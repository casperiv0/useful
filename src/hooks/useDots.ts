import * as React from "react";

/**
 * a "loading state" helper. Add loading dots to some text
 * @param {boolean} use whether the hook should be used. Only change state when needed.
 * @param {number} maxLength The max length of dots. Default: `3`
 * @example
 *
 * ```tsx
 * const Component = () => {
 *   const [isLoading, setLoading] = useState(true);
 *   const dots = useDots(isLoading);
 *
 *   useEffect(() => {
 *     const timeout = setTimeout(() => {
 *       setLoading(false);
 *     }, 5_000);
 *
 *     return () => {
 *       clearTimeout(timeout);
 *     };
 *   }, []);
 *
 *   if (isLoading) {
 *     return <p>Loading{dots}</p>;
 *   }
 *
 *   return <div>Some cool stuff here!</div>;
 * };
 * ```
 */
export function useDots(use: boolean, maxLength = 3) {
  const [dots, setDots] = React.useState<"."[]>(["."]);

  React.useEffect(() => {
    if (!use) return;

    const interval = setInterval(() => {
      setDots((p) => {
        if (p.length === maxLength) {
          return ["."];
        }

        return [...p, "."];
      });
    }, 1_000);

    return () => {
      clearInterval(interval);
    };
  }, [use, maxLength]);

  return dots;
}
