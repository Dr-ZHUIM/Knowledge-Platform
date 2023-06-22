import Article from '@/components/Article/Article';
import styles from './index.module.scss';

export const label = '透明边框';

export function TransparentBorder() {
  return (
    <Article>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <code>asdf</code>
        </div>
      </div>
    </Article>
  );
}
