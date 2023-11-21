import Article from '@/components/Article/Article';
import Demo from '@/components/Article/public/Demo/Demo';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import { useWindowWidth } from '@/utils/hooks';
import Mdx from './index.mdx';
export { label, summary } from './index.mdx';

function WidthDemo() {
  const width = useWindowWidth();
  return (
    <Demo title="使用案例">
      <>
        <div>尝试改变窗口宽度</div>
        <div>{width}</div>
      </>
    </Demo>
  );
}

export default function UseWindowWidth() {
  return (
    <Article>
      <MdxResolver TC={Mdx} components={{ WidthDemo }} />
    </Article>
  );
}
