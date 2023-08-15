# useMounted

Check if a component has been mounted.

## Example

```tsx
import { useMounted } from "@casperiv/useful/hooks/useMounted";

const Component = () => {
  const mounted = useMounted();

  return <p>Am I mounted: {mounted}</p>;
};
```
