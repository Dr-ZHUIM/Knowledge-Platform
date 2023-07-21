import Article from '@/components/Article/Article';
import MdxResolver from '../../../../../components/Article/public/MdxResolver/MdxResolver';
import mdx from './index.mdx';

// TODO: complete this article

export { label, summary } from './index.mdx';

export default function ReactRenderBehavior() {
  return (
    <Article>
      <MdxResolver TC={mdx} />
    </Article>
  );
}