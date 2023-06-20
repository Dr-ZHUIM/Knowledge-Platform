import styles from './index.module.scss';

export const label = '多重边框';

export function MultiBorder() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <code>asdf</code>
      </div>
    </div>
  );
}
