import Article from '@/components/Article/Article';
import Mdx from './index.mdx';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';

import { MyPromise } from './promise';
import { useEffect } from 'react';

export { label, summary } from './index.mdx';

export default function PromiseCore() {
  useEffect(() => {
    new MyPromise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('异步测试1');
        reject('test for status defender');
      }, 1000);
      // reject('test for status defender');
    }).then(
      (value) => {
        console.log(asd);
      },
      (reason: any) => {
        console.log(reason);
      },
    );
    console.log('同步测试1');
  }, []);

  return (
    <Article>
      <MdxResolver TC={Mdx} />
    </Article>
  );
}
