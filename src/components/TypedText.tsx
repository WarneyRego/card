import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
}

export function TypedText({ strings }: TypedTextProps) {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings]);

  return <span ref={el} className="text-red-500" />;
}