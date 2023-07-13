import path from 'path';
import file from 'fs';
import { PluginOption } from 'vite';

function transformZhuimFile(code: string) {
  const codeStream = code.split('\n');
  // the second '---'
  const suOptionLineIndex = codeStream.findIndex((line, index) => {
    return index !== 0 && line === '---';
  });
  const options = getOptions(codeStream, suOptionLineIndex);
  const value = codeStream.slice(suOptionLineIndex);
  return { options, value };
}

function getOptions(
  codeStream: string[],
  suOptionLineIndex: number,
): ZhuimOptions {
  const result: ZhuimOptions = {
    key: '',
    target: 'object',
  };
  const optionLines = codeStream.slice(1, suOptionLineIndex);
  optionLines.forEach((line) => {
    let [key, value] = line.split(':') as [keyof ZhuimOptions, any];
    key = key.trim() as keyof ZhuimOptions;
    value = value.trim();
    result[key] = value;
  });
  return result;
}

export default function ZhuimPlugin(): PluginOption {
  const targetRegex = /\.zhuim$/;
  const jsxRegex = /\.jsx$|\.tsx&/;
  return {
    name: 'vite:zhuim',
    enforce: 'pre',
    // confirm *.zhuim files, and other plugins will not resolve *.zhuim files
    resolveId(source) {
      if (targetRegex.test(source)) {
        return source;
      }
      return null;
    },
    transform(code, id, option) {
      if (!jsxRegex.test(id)) return code;
      const transformedCode = code;
    },
  };
}

module.exports = ZhuimPlugin;
ZhuimPlugin['default'] = ZhuimPlugin;
