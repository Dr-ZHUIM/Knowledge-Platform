import React from 'react';
import Articles from '@/pages/Articles/Articles';

export function getlayers() {
  return createLayers();
}

function createChildRoute(
  routeLabel: string,
  module: Record<string, any>,
  parentPath: string,
) {
  return {
    path: `${parentPath}/${routeLabel}`,
    label: module[`label`] || routeLabel,
    info: '',
    element: (
      <ModuleToComponent
        title={module[`label`] || routeLabel}
        FC={module[`${routeLabel}`] || module[`default`]}
      />
    ),
  } as RouteT;
}

function ModuleToComponent({ FC, title }: { FC: React.FC; title: string }) {
  document.title = title;
  return (
    <>
      <FC />
    </>
  );
}

function checkIsHomeRoute(label: string) {
  return label.includes('.tsx');
}

function getPages(): [string, Record<string, any>][] {
  return Object.entries(import.meta.glob('@/layers/**/*.tsx', { eager: true }));
}

function getLabel(filePath: string, layer = 0) {
  const pathArr = filePath.split('/');
  return pathArr[3 + layer];
}

function createLayers() {
  const layers: Record<string, RouteT[] | undefined> = {};
  getPages().forEach(([filePath, module]) => {
    const layerLabel = getLabel(filePath);
    const layer = (layers[layerLabel] = layers[layerLabel] || [
      {
        path: `/${layerLabel}`,
        label: layerLabel,
        children: [],
      },
    ]);
    const routeExists =
      layer[0].children &&
      layer[0].children.find((route) => route.label === getLabel(filePath, 1));
    if (routeExists) {
      routeExists.children?.push(
        createChildRoute(
          getLabel(filePath, 2),
          module,
          `/${layerLabel}/${getLabel(filePath, 1)}`,
        ),
      );
      return;
    }
    if (!checkIsHomeRoute(getLabel(filePath, 1))) {
      layer[0].children &&
        layer[0].children.push({
          path: `/${layerLabel}/${getLabel(filePath, 1)}`,
          label: getLabel(filePath, 1),
          children: [
            createChildRoute(
              getLabel(filePath, 2),
              module,
              `/${layerLabel}/${getLabel(filePath, 1)}`,
            ),
          ],
        });
    }
  });
  return layers;
}
