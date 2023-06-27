import Article from '@/components/Article/Article';
import Mdx from './index.mdx';
import MdxResolver from '@/components/MdxResolver/MdxResolver';
import { useInput } from '@/utils/hooks';
import { useRef, useEffect, useState } from 'react';
import Demo from '@/components/Demo/Demo';
import Input from '@/components/Input/Input';

export const label = '位运算';

type BitWiseOperator = '&' | '|' | '~' | '^';

function BitWiseDemo({
  operator,
  title,
  onlySelf = false,
}: {
  operator: BitWiseOperator;
  onlySelf: boolean;
  title?: string;
}) {
  const [group1value1, handleGroup1Value1] = useInput<number>(0);

  const [group2value1, handleGroup2Value1] = useInput<number>();
  const [group2value2, handleGroup2Value2] = useInput<number>();

  const [result1, setResult1] = useState('');

  const result2 = useRef<string>('');

  useEffect(() => {
    setResult1((group1value1 && `${~group1value1}`) || '');
  }, [group1value1, operator]);

  return (
    <Demo title={title}>
      <div className="flex justify-between items-center">
        <span className="">第一组：自运算</span>
        <span className="">operator: {operator}</span>
        <Input
          type="number"
          value={group1value1}
          onChange={handleGroup1Value1}
          label="输入"
        />
        <Input type="number" disabled value={`${result1}`} label="结果" />
      </div>
      {onlySelf && (
        <>
          <div>第二组: 运算</div>
          <input
            value={group2value1}
            onChange={handleGroup2Value1}
            type="number"
          />
          <span>operator:{operator}</span>
          <input
            value={group2value2}
            onChange={handleGroup2Value2}
            type="number"
          />
          <input
            disabled
            readOnly
            placeholder={`结果为：${result2.current}`}
            type="number"
          />
        </>
      )}
    </Demo>
  );
}

export default function BitWise() {
  return (
    <Article>
      <Mdx components={{ BitWiseDemo, ...MdxResolver }} />
    </Article>
  );
}
