import Article from '@/components/Article/Article';
import Mdx from './index.mdx';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';

export const label = 'Promise';

export default function Promise() {
  return (
    <Article>
      <Mdx components={{ ...MdxResolver }} />
    </Article>
  );
}
