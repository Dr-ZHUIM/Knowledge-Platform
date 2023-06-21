import { Route } from 'react-router-dom';
import { getlayers } from './getLayers';

// layers' raw data
export const layers: Record<string, RouteT[] | undefined> = getlayers();

function validateInvalidRoute(route: RouteT) {
  return !route.label || !route.path;
}

function generateRoutes(route: RouteT) {
  if (validateInvalidRoute(route)) {
    console.log(true);
    return null;
  }
  return (
    <Route key={route.label} path={route.path} element={route.element}>
      {route.children && route.children.map((child) => generateRoutes(child))}
    </Route>
  );
}

export function generateRouters(routes: RouteT[]) {
  return routes.map((route) => generateRoutes(route));
}
