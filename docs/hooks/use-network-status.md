# useNetworkStatus

check if a user is connected to a network.

> will return `null` if no status can be found

## Example

```tsx
import { useNetworkStatus } from "@casperiv/useful/hooks/useNetworkStatus";

const Component = () => {
  const networkStatus = useNetworkStatus();

  if (networkStatus === "offline") {
    return <p>Oh No! You're offline!</p>;
  }

  return <p>You're online 🎉!</p>;
};
```
