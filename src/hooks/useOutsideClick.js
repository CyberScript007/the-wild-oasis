import { useEffect, useRef } from "react";

export function useOutsideClick(closeMenu, isBubbles = false) {
  const elementRef = useRef();

  useEffect(
    function () {
      const handleClick = function (e) {
        if (elementRef.current && !elementRef.current.contains(e.target))
          closeMenu();
      };

      document.addEventListener("click", handleClick, isBubbles);

      return () =>
        document.removeEventListener("click", handleClick, isBubbles);
    },
    [closeMenu, isBubbles]
  );

  return { elementRef };
}
