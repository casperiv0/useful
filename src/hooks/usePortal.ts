import * as React from "react";

/**
 * create a portal ref to create a portal.
 * @param {string} id The portal ID
 * @example
 * ```
 * import ReactDOM from "react-dom";
 *
 * const Component = () => {
 *   const portalRef = usePortal("CoolId");
 *
 *   return portalRef ? ReactDOM.createPortal(<div>Hello world!</div>, portalRef) : null
 * }
 * ```
 */
export function usePortal(id = "Portal"): HTMLDivElement | null {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let el: HTMLDivElement | null = null;

    if (!ref.current) {
      el = document.createElement("div");
      el.setAttribute("id", id);
      document.body.appendChild(el);

      // @ts-expect-error ignore line below
      ref.current = el;
    }

    return () => {
      // @ts-expect-error ignore line below
      ref.current = null;
      document.body.removeChild(el!);
    };
  }, [id]);

  return ref.current;
}
