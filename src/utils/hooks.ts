import { useState, useEffect } from 'react';
import _ from 'lodash';

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
