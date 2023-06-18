import { ReactNode, ReactElement } from 'react';
import { Route } from 'react-router-dom';
import { getRoutes } from './getRoutes';

export declare type RouteT = {
  path: string;
  label: string;
  element?: ReactNode;
  children?: RouteT[];
};

// routers' raw data
export const routes: RouteT[] = getRoutes();

function generateRouters() {
  const result: ReactElement[] = [];
  const generateRoute = (route: RouteT) => {
    if (
      !route.label ||
      (!route.element && (!route.children || route.children.length < 1))
    ) {
      return null;
    }
    route.children
      ? route.children.map((childRoute) => generateRoute(childRoute))
      : result.push(
          <Route
            key={route.label}
            path={route.path}
            element={route.element}
          ></Route>,
        );
  };
  routes.forEach((route) => generateRoute(route));
  return result;
}

export const routers = generateRouters();
