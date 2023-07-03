import Article from '@/components/Article/Article';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import Mdx from './index.mdx';

export const label = 'HTTP与HTTPS的区别';

export default function HTTPAndHTTPS() {
  return (
    <Article>
      <MdxResolver TC={Mdx} />
    </Article>
  );
}
