import { useState, useEffect, useCallback } from 'react';
import _, { initial } from 'lodash';

export function useResize(fn: () => void, debounceDelay = 200) {
  const callback = _.debounce(fn, debounceDelay);
  useEffect(() => {
    callback();
    window.addEventListener('resize', callback);
    return () => {
      window.removeEventListener('resize', callback);
    };
  }, []);
}

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export function useInput<T>(
  initialState?: T,
): [T | undefined, React.ChangeEventHandler<HTMLInputElement>] {
  const [input, setInput] = useState(initialState);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value as any);
    },
    [],
  );
  return [input, handleChange];
}
