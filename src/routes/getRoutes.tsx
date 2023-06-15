import React from 'react';
import { RouteT } from './routes';

export function getRoutes() {
  return createRoutes();
}

function createRoutes() {
  const result: RouteT[] = [];
  getPages().forEach(([filePath, module]) => {
    const routeExists = result.find(
      (route) => route.label === getRouteLabel(filePath),
    );
    if (routeExists) {
      routeExists.children?.push(
        createChildRoute(getRouteLabel(filePath, true), module),
      );
      return;
    }
    result.push({
      path: `/${getRouteLabel(filePath)}`,
      label: getRouteLabel(filePath),
      children: [createChildRoute(getRouteLabel(filePath, true), module)],
    });
  });
  return result;
}

function createChildRoute(routeLabel: string, module: Record<string, any>) {
  return {
    path: `/${routeLabel}`,
    label: routeLabel,
    element: <ModuleToComponent FC={module[`${routeLabel}`]} />,
  } as RouteT;
}

function ModuleToComponent({ FC }: { FC: React.FC }) {
  return (
    <>
      <FC />
    </>
  );
}

function getPages(): [string, Record<string, any>][] {
  return Object.entries(import.meta.glob('@/pages/**/*.tsx', { eager: true }));
}

function getRouteLabel(filePath: string, isChild = false) {
  const pathArr = filePath.split('/');
  return isChild ? pathArr[pathArr.length - 2] : pathArr[3];
}
