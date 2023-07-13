import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { getlayers } from './getLayers';

// find children of layers folder
function globFolders(): Record<Layer, [string, any[]][]> {
  return {
    Post: Object.entries(
      import.meta.glob(`@/layers/Post/**/*.tsx`, { eager: true }),
    ),
    Snippet: Object.entries(
      import.meta.glob(`@/layers/Snippets/**/*.tsx`, { eager: true }),
    ),
  };
}

const folders = globFolders();

export const layers = getlayers(folders);

const routes: RouteT[] = [];
Object.values(layers).forEach((layer) =>
  Object.values(layer).forEach(
    (category) => category && routes.push(...category),
  ),
);

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
