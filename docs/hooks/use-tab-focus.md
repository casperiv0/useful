# useTabFocus

Returns whether the user is focused on the tab

## Example

```tsx
import { useTabFocus } from "@casperiv/useful/hooks/useTabFocus";

const Component = () => {
  const isFocused = useTabFocus();

  if (isFocused) {
    return <p>You are focused on the tab!</p>;
  }

  return <p>You are not focused on the tab.</p>;
};
```
