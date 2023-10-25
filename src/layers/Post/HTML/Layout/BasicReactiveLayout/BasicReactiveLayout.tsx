import Article from '@/components/Article/Article';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import mdx from './index.mdx';
export { label, summary } from './index.mdx';

export default function HowToCreateAVitePlugin() {
  return (
    <Article>
      <MdxResolver TC={mdx} />
    </Article>
  );
}
