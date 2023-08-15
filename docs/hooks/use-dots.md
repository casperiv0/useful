# useDots

a "loading state" helper. Add loading dots to some text

## Visual Example

![Visual example of use-dots hook](https://i.imgur.com/AmYJH3w.mp4)

## Example

```tsx
import * as React from "react";
import { useDots } from "@casperiv/useful/hooks/useDots";

const Component = () => {
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5_000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // only update dots when loading.
  // This is important so the component doesn't re-render when not needed!
  const dots = useDots(isLoading);

  if (isLoading) {
    return <p>Loading{dots}</p>;
  }

  return <p>Loading complete!</p>;
};
```
