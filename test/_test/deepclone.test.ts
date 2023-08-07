import { describe, expect, it } from 'vitest';
import { deepClone } from '@/layers/Snippets/JavaScript/Object/deep-clone/deepclone';

const source1 = {
  a: 123,
  b: {
    a: 123,
  },
  c: {
    b: {
      a: 123,
      d: {
        b: 123,
        foo: () => {
          console.log('test---deepclone');
        },
      },
    },
    c: [1, 2, 3, 4],
  },
};

const source2 = [1, 2, [1, 2], [1, 2, [1, [2]]]];

const deepClonedData = deepClone(source1);

const deepClonedData2 = deepClone(source2);

describe('deep clone --- object', () => {
  it('should return a new object location', () => {
    const result = deepClonedData === source1;
    expect(result).toBe(false);
  });
  it('should has a same structure', () => {
    expect(deepClonedData).toEqual(source1);
  });
});

describe('deep clone --- array', () => {
  it('should return a new object location', () => {
    const result = deepClonedData2 === source2;
    expect(result).toBe(false);
  });
  it('should has a same structure', () => {
    expect(deepClonedData2).toEqual(source2);
  });
});
