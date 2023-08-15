# useViewport

Returns the current window viewport width

> **Note:** returns `0` if `window` is not defined

## Example

```tsx
import { useViewport } from "@casperiv/useful/hooks/useViewport";

const Component = () => {
  const viewport = useViewport();

  return (
    <p>
      <span>Viewport: </span> {viewport}
    </p>
  );
};
```
