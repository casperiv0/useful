import * as React from "react";

export type NullableHTMLAudio = HTMLAudioElement | null;

type ReturnType = {
  play: () => void;
  stop: () => void;
  audio: NullableHTMLAudio;
};

/**
 * simplify the Audio class
 * @param path The path to the audio file
 * @example
 * const Component = () => {
 *  // Play function, stop function, the rest of the Audio object
 *  const { play: playAudio, stop: stopAudio, audio } = useSound("/sounds/my-cool-sound.mp3");
 *
 *  return <div>
 *    <button onClick={playAudio}>Play the sound!</button>
 *    <button onClick={stopAudio}>Stop the sound!</button>
 * </div>
 * }
 */
export function useSound(path: string): ReturnType {
  const [audio, setAudio] = React.useState<NullableHTMLAudio>(null);

  const play = React.useCallback(() => {
    if (!audio) throw new Error("useSound: Somehow there was no sound!");

    audio.play();
  }, [audio]);

  const stop = React.useCallback(() => {
    if (!audio) throw new Error("useSound: Somehow there was no sound!");

    audio.pause();
    audio.currentTime = 0;
  }, [audio]);

  React.useEffect(() => {
    const a = new Audio(path);

    setAudio(a);
  }, [path]);

  return {
    play,
    stop,
    audio,
  };
}
