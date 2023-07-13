import { getlayers } from '@/routes/getLayers';
import { describe, expect, it } from 'vitest';

function globFolders(): Record<Layer, [string, any[]][]> {
  return {
    Post: Object.entries(
      import.meta.glob(`@test/_test/simulated_layers/Post/**/*.tsx`, {
        eager: true,
      }),
    ),
    Snippet: Object.entries(
      import.meta.glob(`@test/_test/simulated_layers/Snippets/**/*.tsx`, {
        eager: true,
      }),
    ),
  };
}

const folders = globFolders();
const layers = getlayers(folders);
const expectedFolders = {
  Post: 4,
  Snippet: 4,
};

describe('createRoutes', () => {
  it('folders', () => {
    const source: any = { Post: 0, Snippet: 0 };
    Object.keys(folders).forEach(
      (key) => (source[key] = folders[key as Layer].length),
    );
    expect(source).toStrictEqual(expectedFolders);
  });
});
