import Article from '@/components/Article/Article';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import OverflowText from '@/components/Article/public/OverflowText/OverflowText';
import Demo from '@/components/Article/public/Demo/Demo';
import Mdx from './index.mdx';
export { label, summary } from './index.mdx';

function OverflowTextDemo() {
  return (
    <Demo title="OverflowText Demo">
      <div style={{ width: 300, background: 'red', padding: 10 }}>
        <OverflowText
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora harum,
				quibusdam molestiae optio omnis ad nihil cumque sit necessitatibus commodi
				reiciendis nostrum placeat ratione vel eligendi! Laborum dicta excepturi
				necessitatibus doloremque maiores nam ullam tempore quia. Amet ab ex
				facere?"
        />
      </div>
    </Demo>
  );
}

export default function OverflowTextPage() {
  return (
    <Article>
      <MdxResolver TC={Mdx} components={{ OverflowTextDemo }} />
    </Article>
  );
}
