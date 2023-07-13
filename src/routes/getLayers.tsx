import React from 'react';

export function getlayers(
  folders: Record<Layer, [string, any[]][]>,
): Record<Layer, Record<string, RouteT[]>> {
  const result: Record<string, Record<string, RouteT[]>> = {};
  Object.keys(folders).forEach((key) => {
    Object.defineProperty(result, key, {
      value: createLayer(folders[key as Layer], key as Layer),
      enumerable: true,
    });
  });
  return result;
}

function createChildRoute(
  routeLabel: string,
  module: Record<string, any>,
  parentPath: string,
) {
  return {
    path: `${parentPath}/${routeLabel}`,
    label: module[`label`] || routeLabel,
    summary: module[`summary`] || '这篇文章没有摘要',
    subLabel: module[`subLabel`] || '',
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

// get posts' labels
function getLabel(filePath: string, layer = 0) {
  const pathArr = filePath.split('/');
  return pathArr[4 + layer];
}

// map layers folder's children with this function to create layer
function createLayer(items: [string, any[]][], key: Layer) {
  const posts: Record<string, RouteT[] | undefined> = {};
  items.forEach(([filePath, module]) => {
    const postCategoryLabel = getLabel(filePath);
    const post = (posts[postCategoryLabel] = posts[postCategoryLabel] || [
      {
        path: `/${key}/${postCategoryLabel}`,
        label: postCategoryLabel,
        children: [],
        summary: '',
        subLabel: '',
      },
    ]);
    const routeExists =
      post[0].children &&
      post[0].children.find((route) => route.label === getLabel(filePath, 1));
    if (routeExists) {
      routeExists.children?.push(
        createChildRoute(
          getLabel(filePath, 2),
          module,
          `/${key}/${postCategoryLabel}/${getLabel(filePath, 1)}`,
        ),
      );
      return;
    }
    if (!checkIsHomeRoute(getLabel(filePath, 1))) {
      post[0].children &&
        post[0].children.push({
          path: `/${key}/${postCategoryLabel}/${getLabel(filePath, 1)}`,
          label: getLabel(filePath, 1),
          summary: '',
          subLabel: '',
          children: [
            createChildRoute(
              getLabel(filePath, 2),
              module,
              `/${key}/${postCategoryLabel}/${getLabel(filePath, 1)}`,
            ),
          ],
        });
    }
  });
  return posts;
}
