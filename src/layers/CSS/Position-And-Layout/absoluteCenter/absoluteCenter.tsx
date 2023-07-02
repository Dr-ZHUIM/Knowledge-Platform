import Article from '@/components/Article/Article';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import Mdx from './index.mdx';
import Demo from '@/components/Article/public/Demo/Demo';
import { handleClassName } from '@/utils/utils';

export const label = '居中';

/**
 *
 * @param childClassName 子级类
 * @param parentClassName 父级类
 * @param WAndHIsKonwn 是否固定宽高，默认为true
 */
function CenterDemo({
  childClassName,
  parentClassName,
  WAndHIsKonwn = true,
}: {
  childClassName?: string;
  parentClassName?: string;
  WAndHIsKonwn?: boolean;
}) {
  return (
    <Demo>
      <div className={`relative h-[400px]${handleClassName(parentClassName)}`}>
        {WAndHIsKonwn ? (
          <div
            className={`w-[200px] h-[200px] bg-[var(--color-primary)]${handleClassName(
              childClassName,
            )}`}
          ></div>
        ) : (
          <div
            className={`bg-[var(--color-primary)]${handleClassName(
              childClassName,
            )}`}
          >
            <div className={`w-[200px] h-[200px]`}></div>
          </div>
        )}
      </div>
    </Demo>
  );
}

export default function absoluteCenter() {
  return (
    <Article>
      <MdxResolver TC={Mdx} components={{ CenterDemo }} />
    </Article>
  );
}
