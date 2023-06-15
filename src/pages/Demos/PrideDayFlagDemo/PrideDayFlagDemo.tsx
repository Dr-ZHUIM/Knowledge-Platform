import styles from './index.module.scss';

type PrideDayFlagDemoType = {
  numOfColumns: number;
  staggeredDelay: number;
};

function createArray(num: number) {
  return Array.from({ length: num }, (val, i) => i);
}

export function PrideDayFlagDemo({
  numOfColumns = 200,
  staggeredDelay = 10,
}: PrideDayFlagDemoType) {
  return (
    <section className={styles.flag}>
      {createArray(numOfColumns).map((num) => (
        <div
          key={num}
          className={styles.column}
          style={{
            animationDelay: num * staggeredDelay + 'ms',
          }}
        />
      ))}
    </section>
  );
}
