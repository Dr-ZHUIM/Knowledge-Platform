import { MDXProvider } from '@mdx-js/react';
import Test from './test.mdx';

export default function Home() {
  return (
    <section>
      <h1>Dr.Zhuim's Knowledge Platform</h1>
      <Test />
    </section>
  );
}
