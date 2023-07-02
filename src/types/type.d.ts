declare type RouteT = {
  path: string;
  label: string;
  element?: ReactNode;
  children?: RouteT[];
};

declare type Layer = 'HTML' | 'CSS' | 'JavaScript' | 'TypeScript' | 'HOME';

declare type TOC = Record<string, any>;
