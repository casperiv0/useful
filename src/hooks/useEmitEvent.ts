import * as React from "react";

interface ReturnType<T> {
  /**
   * the event
   */
  event: CustomEvent<T> | null;

  /**
   *
   * @param elementRef the element where to dispatch from
   * @default `document`
   */
  dispatch(elementRef?: React.Ref<HTMLElement>): boolean;
}

/**
 * easily emit an event using `dispatchEvent` and `CustomEvent`
 *
 * @param {string} eventName Name of the event
 * @param {?CustomEventInit["detail"]} payload The event payload
 * @param {?Omit<CustomEventInit, "detail">} options Options object for the event
 * @see [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)
 * @example
 * ```tsx
 * const Component = () => {
 *   const { dispatch, event } = useEmitEvent("MyCoolEventName");
 *
 *   console.log(event);
 *
 *   const handler = () => {
 *     dispatch();
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={handler}>Dispatch the event!</button>
 *     </div>
 *   );
 * };
 * ```
 */
export function useEmitEvent<T = unknown>(
  eventName: string,
  payload?: T,
  options?: Omit<CustomEventInit, "detail">,
): ReturnType<T> {
  const [event, setEvent] = React.useState<CustomEvent | null>(null);

  React.useEffect(() => {
    const event = new CustomEvent(eventName, {
      detail: payload,
      ...options,
    });

    setEvent(event);

    return () => {
      setEvent(null);
    };
  }, [eventName, options, payload]);

  const dispatch = React.useCallback(
    (elementRef?: React.RefObject<HTMLElement>) => {
      if (!event) {
        throw new Error("somehow 'event' was null");
      }

      const el = elementRef?.current ?? document;
      const d = el.dispatchEvent(event);

      return d;
    },
    [event],
  );

  return {
    event,
    dispatch,
  };
}
