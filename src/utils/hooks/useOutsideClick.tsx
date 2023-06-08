import { useEffect, RefObject } from 'react';

const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T>,
  close: () => void
): void => {
  const handleClick = (event: MouseEvent | KeyboardEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node) && event instanceof MouseEvent) {
      close();
    } else if(event instanceof KeyboardEvent && (event.key === 'Escape' || event.key === 'Enter')) {
      close()
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleClick);
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('keydown', handleClick);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, close]);
};

export default useOutsideClick;
