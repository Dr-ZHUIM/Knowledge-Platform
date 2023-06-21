import React from 'react';

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

function checkIsAutoRoute(label: string) {
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
    !checkIsAutoRoute(getLabel(filePath, 1)) &&
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
  });
  console.log('layers', layers);
  return layers;
}

// function createRoutes() {
//   const result: RouteT[] = [];
//   getPages().forEach(([filePath, module]) => {
//     const routeExists = result.find(
//       (route) => route.label === getRouteLabel(filePath),
//     );
//     if (routeExists) {
//       routeExists.children?.push(
//         createChildRoute(getRouteLabel(filePath, true), module),
//       );
//       return;
//     }
//     !checkIsAutoRoute(getRouteLabel(filePath)) &&
//       result.push({
//         path: `/${getRouteLabel(filePath)}`,
//         label: getRouteLabel(filePath),
//         children: [createChildRoute(getRouteLabel(filePath, true), module)],
//       });
//   });
//   return result;
// }

// function getPages(): [string, Record<string, any>][] {
//   return Object.entries(import.meta.glob('@/pages/**/*.tsx', { eager: true }));
// }

// function getRouteLabel(filePath: string, isChild = false) {
//   const pathArr = filePath.split('/');
//   return isChild ? pathArr[pathArr.length - 2] : pathArr[3];
// }
