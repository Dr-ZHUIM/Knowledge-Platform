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
      if (s_num !== undefined) {
        return f_num & s_num;
      }
      return '';
    }
    case '|': {
      if (s_num !== undefined){
        return f_num | s_num;
      }
      return '';
    }
    case '^': {
      if (s_num !== undefined){
        return f_num ^ s_num;
      }
      return '';
    }
    default:
      throw new Error(`Your action ${action} is Invalid`);
  }
}

function CalcBit(num: number, reverse = false) {
  let result = num % 2;
  if (reverse) {
    result = result === 0 ? 1 : 0;
  }
  return result;
}

export function get32Bit(num: number) {
  if (Object.is(num, NaN)) {
    return fill(Array(32), 0);
  }
  const result = num >= 0 ? fill(Array(32), 0) : fill(Array(32), 1);
  let _num = Math.abs(num >= 0 ? Math.floor(num) : Math.round(num) + 1);
  for (let i = 1; _num != 0; i++) {
    result[result.length - i] = CalcBit(_num, num < 0);
    _num = Math.floor(_num / 2);
  }
  return result;
}
