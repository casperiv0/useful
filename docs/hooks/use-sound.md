# useSound

Returns a few functions to simplify the `HTMLAudio` class.

## Example

```tsx
import { useSound } from "@casperiv/useful/hooks/useSound";

const Component = () => {
  // Play function, stop function, the rest of the Audio object
  const { play: playAudio, stop: stopAudio, audio } = useSound("/sounds/my-cool-sound.mp3");

  return (
    <div>
      <button onClick={playAudio}>Play the sound!</button>
      <button onClick={stopAudio}>Stop the sound!</button>
    </div>
  );
};
```
