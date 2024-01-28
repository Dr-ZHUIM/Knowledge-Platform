import Article from '@/components/Article/Article';
export { label, summary } from './index.mdx';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import mdx from './index.mdx';

export default function DifferArrayMapAndSet() {
  return (
    <Article>
      <MdxResolver TC={mdx} />
    </Article>
  );
}
