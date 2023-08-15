# useEmitEvent

Easily emit a browser event using `dispatchEvent` and `CustomEvent`

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)

## Example

```tsx
import { useEmitEvent } from "@casperiv/useful/hooks/useEmitEvent";

const Component = () => {
  const { dispatch, event } = useEmitEvent("MyCoolEventName");

  console.log(event);

  const handler = () => {
    dispatch();
  };

  return (
    <div>
      <button onClick={handler}>Dispatch the event!</button>
    </div>
  );
};
```
