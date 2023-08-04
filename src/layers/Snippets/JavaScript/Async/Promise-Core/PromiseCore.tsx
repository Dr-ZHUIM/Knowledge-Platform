import Article from '@/components/Article/Article';
import Mdx from './index.mdx';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';

import { MyPromise } from './promise';
import { useEffect } from 'react';

export { label, summary } from './index.mdx';

export default function PromiseCore() {
  useEffect(() => {
    new MyPromise<string>((resolve, reject) => {
      resolve('Promise-1 value');
    })
      .then((value) => {
        console.log(value);
        return 'then-1 value';
      })
      .then(() => {
        return new MyPromise((resolve) => resolve('Promise-2'));
      })
      .then((value) => {
        console.log(value);
      });
    console.log('同步测试1');
  }, []);

  return (
    <Article>
      <MdxResolver TC={Mdx} />
    </Article>
  );
}
