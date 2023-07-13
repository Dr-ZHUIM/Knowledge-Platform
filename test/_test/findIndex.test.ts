import { describe, it, expect } from 'vitest';

const string = `---
target: 'object'
key: 'zhuim'
---

- toc
  - public
  - src
    - main.ts
    - app.tsx
`;

const expect1 = 3;

describe('find the second minus line', () => {
  it('test', () => {
    const codeStream = string.split('\n');
    const suOptionLineIndex = codeStream.findIndex((line, index) => {
      return index !== 0 && line === '---';
    });
    expect(suOptionLineIndex).toBe(expect1);
  });
});
