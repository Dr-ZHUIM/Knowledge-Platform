import Article from '@/components/Article/Article';
import Demo from '@/components/Article/public/Demo/Demo';
import Input from '@/components/Article/public/Input/Input';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import BitExposer from '@/components/Article/Bitwise/BitExposer';
import { useInput } from '@/utils/hooks';
import { isUndefinedOrEmptyString } from '@/utils/utils';
import { useEffect, useState } from 'react';
import Mdx from './index.mdx';
import { bitCalc, get32Bit } from './utils';

export const label = '位运算';

export type BitWiseOperator = '&' | '|' | '~' | '^' | '~~';

function BitWiseDemo({
  operatorSelf,
  operator,
  title,
  onlySelf = true,
}: {
  operatorSelf?: BitWiseOperator;
  operator?: BitWiseOperator;
  onlySelf: boolean;
  title?: string;
}) {
  const [group1value1, handleGroup1Value1] = useInput(0);

  const [group2value1, handleGroup2Value1] = useInput(0);
  const [group2value2, handleGroup2Value2] = useInput(0);

  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');

  useEffect(() => {
    if (operatorSelf && !isUndefinedOrEmptyString(group1value1)) {
      setResult1(`${bitCalc(operatorSelf, { f_num: +group1value1 })}`);
    } else {
      setResult1('wait for a valid value');
    }
  }, [group1value1, operatorSelf]);

  useEffect(() => {
    if (
      operator &&
      !isUndefinedOrEmptyString(group2value1) &&
      !isUndefinedOrEmptyString(group2value2)
    ) {
      setResult2(
        `${bitCalc(operator, {
          f_num: +group2value1,
          s_num: +group2value2,
        })}`,
      );
    } else {
      setResult2('wait for a valid value');
    }
  }, [group2value1, group2value2, operator]);

  return (
    <Demo title={title}>
      <div className="flex justify-between items-center">
        <span className="">自运算</span>
        <span className="">operator: {operatorSelf}</span>
        <div className="flex flex-col gap-[28px] justify-center">
          <div className="flex items-center">
            <Input
              type="number"
              value={group1value1}
              onChange={handleGroup1Value1}
              label="输入"
            />
            <BitExposer className="ml-4" num={+group1value1} />
          </div>
          <div className="flex items-center">
            <Input type="text" disabled value={`${result1}`} label="结果" />
            <BitExposer className="ml-4" num={+result1} />
          </div>
        </div>
      </div>

      {!onlySelf && (
        <>
          <div>运算</div>
          <input
            value={group2value1}
            onChange={handleGroup2Value1}
            type="text"
          />
          <span>operator:{operator}</span>
          <input
            value={group2value2}
            onChange={handleGroup2Value2}
            type="text"
          />
          <input
            disabled
            readOnly
            placeholder={`结果为：${result2}`}
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
