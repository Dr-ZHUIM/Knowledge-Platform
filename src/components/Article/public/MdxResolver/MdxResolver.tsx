import { MessageContext } from '@/components/Layout/Layout';
import { CopyOutlined } from '@ant-design/icons';
import { MergeComponents } from '@mdx-js/react/lib';
import { Image } from 'antd';
import { CompositionImage, ImageProps } from 'antd/es/image';
import { MDXComponents } from 'mdx/types';
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function TextResolver(text: string) {
  return text;
  // .toLowerCase()
  // .replace(/[^a-z0-9 ]/g, '')
  // .replace(/[ ]/g, '-');
}

function getAnchor(node: any): string {
  if (typeof node !== 'object') {
    return TextResolver(`${node}`);
  } else if (typeof node === 'object') {
    if (node instanceof Array) {
      return node.reduce((pre, cur) => pre + getAnchor(cur), '');
    } else if (node.props) {
      return getAnchor(node.props.children);
    }
  }
  throw new Error('node cannot be resolved \nyour node is ' + node);
}
function Anchor({
  children,
  target,
}: {
  children: React.ReactNode;
  target?: string;
}) {
  const id = useMemo(() => {
    return target || getAnchor(children);
  }, [target]);
  function scrollToAnchorById(id?: string) {
    const node = id && document.getElementById(id);
    if (node) {
      document.documentElement.scrollBy({ top: node.offsetTop - 60 });
    }
  }
  return (
    <span
      className="text-[#3eaf7c] cursor-pointer mr-2"
      onClick={() => scrollToAnchorById(id)}
    >
      {children}
    </span>
  );
}

function H1({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h1 className="flex items-center" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h1>
  );
}

function H2({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h2 id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h2>
  );
}

function H3({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h3 className="flex items-center" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h3>
  );
}

function H4({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h4 className="flex items-center font-bold" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h4>
  );
}

function H5({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h5 className="flex items-center font-bold" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h5>
  );
}

function H6({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h6 className="flex items-center font-bold" id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h6>
  );
}

function Pre({ children }: PropsWithChildren) {
  const { openMessage } = useContext(MessageContext);
  const divRef = useRef<HTMLDivElement | null>(null);
  const handleCopy = useCallback(async () => {
    if (divRef.current) {
      navigator.clipboard.writeText(divRef.current.innerText).then(() => {
        openMessage({
          description: '复制成功!',
          message: '文本已加入粘贴板',
          state: 'success',
        });
      });
    }
  }, []);
  return (
    <pre className={styles.pre}>
      <CopyOutlined onClick={handleCopy} className={styles['copy-btn']} />
      <div ref={divRef}>{children}</div>
    </pre>
  );
}

function Mark({ children }: PropsWithChildren) {
  return <mark className={styles.mark}>{children}</mark>;
}

function MarkImage(props: CompositionImage<ImageProps>) {
  return <Image className="block" {...props} />;
}

export default function MdxResolver({
  TC,
  components,
}: {
  components?: MDXComponents | MergeComponents | null | undefined;
  TC: (...args: any[]) => React.ReactElement;
}) {
  const getContentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={getContentRef}>
      <TC
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          a: Anchor,
          Anchor: Anchor,
          Link: Link,
          pre: Pre,
          Image: MarkImage,
          Mark,
          ...components,
        }}
      />
    </div>
  );
}
