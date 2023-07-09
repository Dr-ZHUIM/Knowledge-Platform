declare module '*.mdx' {
  let MDXComponents: (props: any) => JSX.Element;
  let summary: string;
  let label: string;
  export default MDXComponents;
  export { summary, label, label };
}
