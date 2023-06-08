import { MouseEvent, RefObject, useEffect } from "react";

const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>, close: () => void) => {
  const handleClick = (event: MouseEvent) => {
    if(ref.current && !ref.current.contains(event.target as Node)) {
      close();
    }

    useEffect(() => {
      document.addEventListener('mousedown', () => handleClick);

      return () => {
        document.removeEventListener('mousedown', () => handleClick);
      }
    }, [ ref, close ])
  }
}