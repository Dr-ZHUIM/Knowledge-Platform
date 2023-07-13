import Article from '@/components/Article/Article';
import styles from './index.module.scss';

export const label = '条纹背景';

export function StripesBackground() {
  return (
    <Article className={`flex-center`}>
      <div className={`${styles.container} bg-b flex flex-center`}>
        <div className={styles['progress-outer']}>
          <div className={styles['progress-enter']}>
            <div className={styles['progress-bg']}></div>
          </div>
        </div>
      </div>
    </Article>
  );
}
