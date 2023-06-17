import routes, { RouteT } from '@/routes/routes';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { GithubOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    navigate(info.key);
  };

  return (
    <div className="container">
      <div className="sider">
        <div onClick={() => navigate('/')} className="sider-logo" />
        <Menu
          onClick={handleNavigate}
          mode="inline"
          style={{
            minWidth: 0,
            fontSize: '16px',
            flex: 'auto',
          }}
          theme="dark"
          items={items}
        />
        <div className="sider-footer">
          <a href="https://github.com/Dr-ZHUIM" target="_blank">
            <GithubOutlined className="sider-icon" />
          </a>
          <a
            href="http://www.zhuim.fun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UserOutlined className="sider-icon" />
          </a>
        </div>
      </div>
      <main className="main flex-container">{props.children}</main>
    </div>
  );
}
