import * as React from "react";

/**
 * listen for an event and automatically clean up the effect on un-mount
 * @param {string} eventName Name of the eventName
 * @param {EventListenerOrEventListenerObject} listener Callback function
 * @param {boolean | AddEventListenerOptions} options
 * @see [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
 * @example
 * ```
 *
 * const Component = () => {
 *  const clickHandler = (e) => {
 *     console.log(e.target);
 *  }
 *
 *   useWindowEvent("click", clickHandler, options?);
 *
 *   return <p>Hello world!</p>
 * }
 * ```
 */
export function useWindowEvent(
  eventName: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
) {
  React.useEffect(() => {
    const handler = listener;

    window.addEventListener(eventName, handler, options);

    return () => {
      window.removeEventListener(eventName, handler, options);
    };
  }, [eventName, listener, options]);
}
