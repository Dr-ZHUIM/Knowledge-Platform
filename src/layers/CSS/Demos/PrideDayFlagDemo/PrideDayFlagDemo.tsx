import Article from '@/components/Article/Article';
import { useState } from 'react';
import styles from './index.module.scss';

export const label = '独立日旗帜';

type PrideDayFlagDemoType = {
  numOfColumns: number;
  staggeredDelay: number;
};

function createArray(num: number) {
  return Array.from({ length: num }, (val, i) => i);
}

export function PrideDayFlagDemo() {
  const [numOfColumns, setNumOfColumns] = useState(200);
  const [staggeredDelay, setStaggeredDelay] = useState(10);
  return (
    <Article className={`${styles.PrideDayFlagDemo} flex-center`}>
      <PrideDayFlag
        numOfColumns={numOfColumns}
        staggeredDelay={staggeredDelay}
      />
      <div className={styles['input-group']}>
        <div className={styles['input-wrapper']}>
          <input
            type="range"
            id="numOfColumns"
            value={numOfColumns}
            min={1}
            max={300}
            step={1}
            onChange={(e) => {
              setNumOfColumns(() => Number(e.target.value));
            }}
          />
          <label htmlFor="numOfColumns">numOfColumns: {numOfColumns}</label>
        </div>
        <div className={styles['input-wrapper']}>
          <input
            type="range"
            id="staggeredDelay"
            value={staggeredDelay}
            min={1}
            max={300}
            step={1}
            onChange={(e) => {
              setStaggeredDelay(() => Number(e.target.value));
            }}
          />
          <label htmlFor="staggeredDelay">
            staggeredDelay: {staggeredDelay}
          </label>
        </div>
      </div>
    </Article>
  );
}

function PrideDayFlag({ numOfColumns, staggeredDelay }: PrideDayFlagDemoType) {
  return (
    <>
      <div className={styles.flag}>
        {createArray(numOfColumns).map((num) => (
          <div
            key={num}
            className={styles.column}
            style={{
              animationDelay: num * staggeredDelay + 'ms',
            }}
          />
        ))}
      </div>
    </>
  );
}
