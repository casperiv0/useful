import * as React from "react";

export type Status = "online" | "offline" | null;

/**
 * check if a user is connected to a network.
 * @returns {Status} the user's status.
 * @example
 * const networksStatus = useNetworkStatus();
 *
 * console.log(networkStatus) // "online" | "offline" | null
 */
export function useNetworkStatus(): Status {
  const [status, setStatus] = React.useState<Status>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = (online: boolean) => () => {
      setStatus(online === true ? "online" : "offline");
    };

    window.addEventListener("load", handler(navigator.onLine));
    window.addEventListener("online", handler(true));
    window.addEventListener("offline", handler(false));

    return () => {
      window.removeEventListener("load", handler(navigator.onLine));
      window.removeEventListener("online", handler(true));
      window.removeEventListener("offline", handler(false));
    };
  }, []);

  return status;
}
