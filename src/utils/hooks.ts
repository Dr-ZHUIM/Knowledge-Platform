import _ from 'lodash';
import { useCallback, useEffect, useState } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(
    document.documentElement.clientWidth || document.body.clientWidth,
  );
  const callback = _.debounce(
    () =>
      setWidth(
        document.documentElement.clientWidth || document.body.clientWidth,
      ),
    200,
  );
  useEffect(() => {
    callback();
    window.addEventListener('resize', callback);
    return () => {
      window.removeEventListener('resize', callback);
    };
  }, []);
  return width;
}

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

export function useToggle(
  initialState = false,
): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] {
  const [state, setState] = useState(initialState);
  const handleToggle = useCallback(() => {
    setState((v) => !v);
  }, []);
  return [state, handleToggle, setState];
}

export function useDarkmode(
  initialState: 'dark' | 'light' = 'light',
): ['dark' | 'light', () => void] {
  const [state, setState] = useState(initialState);
  const handleToggle = useCallback(() => {
    setState((v) => (v === 'dark' ? 'light' : 'dark'));
  }, []);
  return [state, handleToggle];
}
