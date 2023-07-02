import { describe, it, expect } from 'vitest';
import { get32Bit } from '@/layers/JavaScript/AssignmentOrOperator/BitWise/utils';

const source1 = 0;
const source2 = 5;
const source3 = -10;

const expected1 = '0000 0000 0000 0000 0000 0000 0000 0000';
const expected2 = '0000 0000 0000 0000 0000 0000 0000 0101';
const expected3 = '1111 1111 1111 1111 1111 1111 1111 0110';

describe('chunkBitArray', () => {
  it ('first test', () => {
    expect(get32Bit(source1)).toBe(expected1);
  });
  it.concurrent('second test', () => {
    expect(get32Bit(source2)).toBe(expected2);
  });
  it.concurrent('third test', () => {
    expect(get32Bit(source3)).toBe(expected3);
  });
});
