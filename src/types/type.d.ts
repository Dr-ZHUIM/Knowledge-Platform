declare type RouteT = {
  path: string;
  label: string;
  subLabel: string;
  summary: string;
  element?: ReactNode;
  children?: RouteT[];
};

declare type Layer =
  | 'HTML'
  | 'CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'HOME'
  | 'React'
  | 'Network';

declare type TOC = Record<string, any>;
