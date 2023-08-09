import Article from '@/components/Article/Article';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import Mdx from './index.mdx';

export { summary, label } from './index.mdx';

export default function URL() {
  return (
    <Article>
      <MdxResolver TC={Mdx} />
    </Article>
  );
}
