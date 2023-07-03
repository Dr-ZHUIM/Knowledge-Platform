import Article from '@/components/Article/Article';
import CSSDemo from '@/components/Article/public/CSSDemo/CSSDemo';
import Demo from '@/components/Article/public/Demo/Demo';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import { handleClassName } from '@/utils/utils';
import { useRef } from 'react';
import Mdx from './index.mdx';
import { displayOptions } from './options';

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

function DisplayDemo() {
  const divRef = useRef<HTMLDivElement | null>(null);
  return (
    <CSSDemo options={displayOptions} ControlledElement={divRef.current}>
      <div>
        <div className="w-[50%] bg-[var(--color-light)] block h-[100px] border-solid border-[1px] border-[#000]">
          div1
        </div>
        <div
          className="w-[50%] bg-[var(--color-success-light)] h-[100px] border-solid border-[1px] border-[#000]"
          ref={divRef}
        >
          div2
        </div>
        <div className="w-[50%] bg-[var(--color-light)] block h-[100px] border-solid border-[1px] border-[#000]">
          div3
        </div>
      </div>
    </CSSDemo>
  );
}

export default function absoluteCenter() {
  return (
    <Article>
      <MdxResolver TC={Mdx} components={{ CenterDemo, DisplayDemo }} />
    </Article>
  );
}
