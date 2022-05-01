import * as React from "react";

interface UseEventListenerOptions {
  eventName: keyof WindowEventMap | (string & {});
  listener: EventListenerOrEventListenerObject;
  options?: boolean | AddEventListenerOptions;

  /**
   * the element where to listen from
   * @default `window`
   */
  elementRef?: React.RefObject<HTMLElement>;
}

/**
 * listen for an event and automatically clean up the effect on un-mount
 * @param {keyof WindowEventMap | (string & {})} eventName Name of the eventName
 * @param {EventListenerOrEventListenerObject} listener Callback function
 * @param {boolean | AddEventListenerOptions} options
 * @see [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
 * @example
 * ```tsx
 * const Component = () => {
 *  const clickHandler = (e) => {
 *     console.log(e.target);
 *  }
 *
 *   useEventListener({ eventName: "click", listener: clickHandler, options });
 *
 *   return <p>Hello world!</p>
 * }
 * ```
 */
export function useEventListener(options: UseEventListenerOptions) {
  React.useEffect(() => {
    const handler = options.listener;
    const element = options.elementRef?.current ?? window;

    element.addEventListener(options.eventName, handler, options.options);

    return () => {
      element.removeEventListener(options.eventName, handler, options.options);
    };
  }, [options]);
}
