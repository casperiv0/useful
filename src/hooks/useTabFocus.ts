import * as React from "react";

/**
 * @returns whether the user is focused on the tab
 */
export function useTabFocus(): boolean {
  const [inFocus, setInFocus] = React.useState(true);

  React.useEffect(() => {
    const handler = () => {
      setInFocus(!document.hidden);
    };

    document.addEventListener("visibilitychange", handler);

    return () => {
      document.removeEventListener("visibilitychange", handler);
    };
  }, []);

  return inFocus;
}
