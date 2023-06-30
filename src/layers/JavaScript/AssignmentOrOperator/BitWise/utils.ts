import { BitWiseOperator } from './BitWise';
import { fill } from 'lodash';

type State = {
  f_num: number;
  s_num?: number;
};

export function bitCalc(action: BitWiseOperator, { f_num, s_num }: State) {
  switch (action) {
    case '~': {
      return ~f_num;
    }
    case '~~': {
      return ~~f_num;
    }
    case '&': {
      if (s_num) {
        return f_num & s_num;
      }
      return null;
    }
    default:
      throw new Error(`Your action ${action} is Invalid`);
  }
}

export function get32Bit(num: number) {
  if (Object.is(num, NaN)) {
    return fill(Array(32), 0);
  }
  const result = num >= 0 ? fill(Array(32), 0) : fill(Array(32), 1);
  let _num = Math.abs(num);
  for (let i = 1; _num != 0; i++) {
    result[result.length - i] = _num % 2;
    _num = Math.floor(_num / 2);
  }
  console.log('result.length', result.length);
  return result;
}
