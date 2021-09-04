# useWindowEvent

listen for an event and automatically clean up the effect on un-mount

## Example

```tsx
import { useWindowEvent } from "@casper124578/useful/hooks/useWindowEvent";

const Component = () => {
  const myHandler = (event) => {
    console.log(event);
  };

  useWindowEvent("click", myHandler);

  return <p>Hello world!</p>;
};
```
