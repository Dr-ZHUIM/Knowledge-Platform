import styles from './index.module.scss';
import InnerRoundMdx from './innerRound_1.mdx';

export const label = '边框内圆角';

export function InnerRound() {
  return (
    <>
      <section>
        <div className={styles.wrapper}></div>
        <div className={styles.mdx}>
          <InnerRoundMdx />
        </div>
      </section>
    </>
  );
}
