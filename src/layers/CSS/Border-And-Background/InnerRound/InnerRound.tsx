import Article from '@/components/Article/Article';
import styles from './index.module.scss';
import InnerRoundMdx from './innerRound_1.mdx';

export const label = '边框内圆角';

export function InnerRound() {
  return (
    <>
      <Article>
        <div className={`${styles.wrapper} margin-col-auto`}></div>
        <div className={styles.mdx}>
          <InnerRoundMdx />
        </div>
      </Article>
    </>
  );
}
