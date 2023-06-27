import { MDXProvider } from '@mdx-js/react';
import { PropsWithChildren } from 'react';

function Textresolver(text: string) {
  return text;
  // .toLowerCase()
  // .replace(/[^a-z0-9 ]/g, '')
  // .replace(/[ ]/g, '-');
}

function getAnchor(node: any) {
  if (typeof node === 'string') {
    return Textresolver(node);
  } else if (typeof node === 'object') {
    return Textresolver(node[0]);
  }
}
function Anchor({
  children,
  target,
}: {
  children: React.ReactNode;
  target?: string;
}) {
  function scrollToAnchorById(id?: string) {
    const node = id && document.getElementById(id);
    if (node) {
      node.scrollIntoView();
    }
  }
  return (
    <span
      className="text-[#3eaf7c] cursor-pointer"
      onClick={() => scrollToAnchorById(target)}
    >
      {children}
    </span>
  );
}

function H1({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h1 id={anchor}>
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
    <h3 id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h3>
  );
}

function H4({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h4 id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h4>
  );
}

function H5({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h5 id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h5>
  );
}

function H6({ children }: PropsWithChildren) {
  const anchor = getAnchor(children);
  return (
    <h6 id={anchor}>
      <Anchor target={anchor}>§</Anchor>
      {children}
    </h6>
  );
}

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  Anchor: Anchor,
};
