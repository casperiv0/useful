# useEventListener

Listen for an event and automatically clean up the effect on un-mount

## Example

```tsx
import * as React from "react";
import { useEventListener } from "@casperiv/useful/hooks/useEventListener";

const Component = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const myWindowHandler = (event) => {
    console.log(event);
  };

  // listen anywhere on the `window`
  useEventListener({ eventName: "click", listener: myWindowHandler });

  const myButtonHandler = (event) => {
    console.log("Button handler", event);
  };

  // listen on the `button`
  useEventListener({ elementRef: buttonRef, eventName: "click", listener: myButtonHandler });

  return (
    <div>
      <p>Hello world!</p>

      <button ref={buttonRef}>Click me!</button>
    </div>
  );
};
```
