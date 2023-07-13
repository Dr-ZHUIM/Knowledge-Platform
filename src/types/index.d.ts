declare type ZhuimOptions = {
  target: 'object' | 'string';
  key: string;
};

declare module '*.zhuim' {
  let options: ZhuimOptions;
  let value: string;
  export { options, value };
}
