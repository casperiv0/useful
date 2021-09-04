# usePortal

create a portal ref to create a portal and append it to the body.

## Example

```tsx
import { createPortal } from "react-dom";
import { usePortal } from "@casper124578/useful/hooks/usePortal";

const Component = () => {
  const portalRef = usePortal("myCoolId");

  return portalRef ? createPortal(<p>Hello world!</p>, portalRef) : null;
};
```
