import Article from '@/components/Article/Article';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import {
  GridDefaultDemo,
  GridDefaultDivideHeightDemo,
} from './components/GridDemo';
import mdx from './index.mdx';
import styles from './index.module.scss';
import { GridColumnsDemo } from './components/GridDemo';
export { label, summary } from './index.mdx';

function FlexDemo() {
  return (
    <div className={styles['flex-box']}>
      <section className={styles['flex-section-axis-one']}>flex-start</section>
      <section className={styles['flex-section-axis-two']}>center</section>
      <section className={styles['flex-section-axis-three']}>flex-end</section>
    </div>
  );
}

export default function HowToCreateAVitePlugin() {
  return (
    <Article>
      <MdxResolver
        TC={mdx}
        components={{
          FlexDemo,
          GridDefaultDemo,
          GridDefaultDivideHeightDemo,
          GridColumnsDemo,
        }}
      />
    </Article>
  );
}
