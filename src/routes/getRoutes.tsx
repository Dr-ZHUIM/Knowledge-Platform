import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { getlayers } from './getLayers';

// layers' raw data
export const layers: Record<string, RouteT[] | undefined> = getlayers();

const routes: RouteT[] = [];
Object.values(layers).forEach((layer) => layer && routes.push(...layer));

function validateInvalidRoute(route: RouteT) {
  return !route.label || !route.path;
}

function generateRoutes(route: RouteT, layer = 0) {
  if (validateInvalidRoute(route)) {
    return null;
  }
  return (
    <Route key={route.label} path={route.path} element={route.element}>
      {layer == 0 && (
        <Route
          path={`${route.path}/`}
          element={<Navigate to="HOME" replace />}
        />
      )}
      {route.children &&
        route.children.map((child) => generateRoutes(child, layer + 1))}
    </Route>
  );
}

export function generateRouters() {
  return routes.map((route) => generateRoutes(route));
}
