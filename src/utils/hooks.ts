import _ from 'lodash';
import { useCallback, useEffect, useState } from 'react';

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

export function useInput(
  initialState?: any,
): [string, React.ChangeEventHandler<HTMLInputElement>] {
  const [input, setInput] = useState(`${initialState}` || '');
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
    },
    [],
  );
  return [input, handleChange];
}
