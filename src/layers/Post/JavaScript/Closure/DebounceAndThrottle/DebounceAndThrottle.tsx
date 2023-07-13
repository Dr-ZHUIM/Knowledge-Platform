import Article from '@/components/Article/Article';
import Demo from '@/components/Article/public/Demo/Demo';
import { useCallback, useState } from 'react';
import { Button } from 'antd';
import Mdx from './index.mdx';
import styles from './index.module.scss';

export const label = '防抖与节流';

function _throttle(func: (...args: any[]) => any, delay: number) {
  let timeout: NodeJS.Timeout | null;
  return function (this: any, ...args: any[]) {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(this, args);
      }, delay);
    }
  };
}

function _debounce(func: (...args: any[]) => any, delay: number) {
  let timeoutId: NodeJS.Timeout | null;
  return function (this: any, ...args: any[]) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function Debounce() {
  const [count, setCount] = useState(0);
  const [clickcount, setClickcount] = useState(0);
  const handleClick = useCallback(
    _debounce(() => setCount((v) => v + 1), 500),
    [],
  );
  return (
    <Demo>
      <button
        className={`btn btn-primary ${styles.gap} ${styles.button}`}
        onClick={() => {
          setClickcount((v) => v + 1);
          handleClick();
        }}
      >
        Click
      </button>
      <span className={styles.gap}>count: {count}</span>
      <span className={styles.gap}>clickcount: {clickcount}</span>
    </Demo>
  );
}

function Throttle() {
  const [count, setCount] = useState(0);
  const [clickcount, setClickcount] = useState(0);
  const handleClick = useCallback(
    _throttle(() => setCount((v) => v + 1), 500),
    [],
  );
  return (
    <Demo>
      <button
        className={`btn btn-primary ${styles.gap} ${styles.button}`}
        onClick={() => {
          setClickcount((v) => v + 1);
          handleClick();
        }}
      >
        Click
      </button>
      <span className={styles.gap}>count: {count}</span>
      <span className={styles.gap}>clickcount: {clickcount}</span>
    </Demo>
  );
}

export default function DebounceAndThrottle() {
  return (
    <Article>
      <Mdx components={{ Debounce, Throttle }} />
    </Article>
  );
}
