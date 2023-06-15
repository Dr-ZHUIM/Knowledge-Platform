import React, { useState, useEffect, useCallback } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import routes, { RouteT } from '@/routes/routes';
import './layout.scss';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
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
      type,
    } as MenuItem;
  }
  return {
    key: path,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = routes.map((route) =>
  getItem(route.label, route.path, route.children),
);

export default function Layout(props: React.PropsWithChildren) {
  const navigate = useNavigate();

  const handleNavigate: MenuProps['onClick'] = (info) => {
    console.log('info', info);
    navigate(info.key);
  };

  return (
    <div className="container">
      <Menu
        onClick={handleNavigate}
        mode="inline"
        style={{ width: 256 }}
        items={items}
      />
      <main className="main flex-container">{props.children}</main>
    </div>
  );
}
