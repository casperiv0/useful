# useEventListener

Listen for an event and automatically clean up the effect on un-mount

## Example

```tsx
import * as React from "react";
import { useEventListener } from "@casper124578/useful/hooks/useEventListener";

const Component = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const myHandler = (event) => {
    console.log(event);
  };

  // click anywhere on the `window`
  useEventListener({ eventName: "click", handler: myHandler });

  const myButtonHandler = (event) => {
    console.log("Button handler", event);
  };

  // click anywhere on the `button`
  useEventListener({ elementRef: buttonRef, eventName: "click", handler: myButtonHandler });

  return (
    <div>
      <p>Hello world!</p>

      <button ref={buttonRef}>Click me!</button>
    </div>
  );
};
```
