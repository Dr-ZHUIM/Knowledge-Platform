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
  console.log('num', num);
  const result = num >= 0 ? fill(Array(32), 0) : fill(Array(32), 1);
  const _num = Math.abs(num);
  return _num;
  // for (let i = 1; _num != 0; i++) {
  //   result[result.length - i] = _num % 2;
  //   _num = Math.floor(_num / 2);
  // }
  // return result;
}
