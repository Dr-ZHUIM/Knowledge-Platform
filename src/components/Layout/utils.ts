import type { MenuProps } from 'antd';
import { layers } from '@/routes/getRoutes';

type MenuItem = Required<MenuProps>['items'][number];

export function getItem(
  label: React.ReactNode,
  path: React.Key,
  children?: RouteT[],
  type?: 'group',
): MenuItem {
  if (children && children.length > 0) {
    const childrenItem = children.map((child) =>
      getItem(child.label, child.path, child.children),
    );
    return {
      key: path,
      children: childrenItem,
      label,
      title: label,
      type,
    } as MenuItem;
  }
  return {
    key: path,
    children,
    label,
    title: label,
    type,
  } as MenuItem;
}

export function getValidLayer(active: Layer) {
  const activeLayer = layers[active];
  return activeLayer && activeLayer[0].children;
}
