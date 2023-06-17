import { ReactNode } from 'react';
import { getRoutes } from './getRoutes';

export declare type RouteT = {
  path: string;
  label: string;
  element?: ReactNode;
  children?: RouteT[];
};

const routesTest: RouteT[] = getRoutes();

export default routesTest;
