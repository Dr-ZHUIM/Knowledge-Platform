import Article from '@/components/Article/Article';
import Mdx from './index.mdx';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';

export { label, summary } from './index.mdx';

export default function DeepClone() {
  return (
    <Article>
      <MdxResolver TC={Mdx} />
    </Article>
  );
}
