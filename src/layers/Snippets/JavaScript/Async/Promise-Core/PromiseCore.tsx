import Article from '@/components/Article/Article';
import Mdx from './index.mdx';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';

import { MyPromise } from './promise';
import { useEffect } from 'react';

export { label, summary } from './index.mdx';

export default function PromiseCore() {
  useEffect(() => {
    new MyPromise<string>((resolve) => {
      resolve('Promise-1 value');
    })
      .then((value) => {
        console.log(value);
        return 'then-1 value';
      })
      .then((value) => {
        console.log(value);
      });
    const p = new MyPromise<string>((resolve) => {
      resolve('Promise-3 value');
    });
    p.then(() => p);
    console.log('同步测试1');
  }, []);

  return (
    <Article>
      <MdxResolver TC={Mdx} />
    </Article>
  );
}
