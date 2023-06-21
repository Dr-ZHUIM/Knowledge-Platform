import { layers } from '@/routes/getRoutes';
import { LayerContext } from '@/App';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { GithubOutlined, UserOutlined } from '@ant-design/icons';
import React, { useContext, useMemo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logos } from '@imgs/logos';
import SiderIcon from './SiderIcon/SiderIcon';
import './layout.scss';
import Logo from './Logo/Logo';

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

function getValidLayer(active: Layer) {
  const activeLayer = layers[active];
  return activeLayer && activeLayer[0].children;
}

export default function Layout(props: React.PropsWithChildren) {
  const navigate = useNavigate();

  const { active, changeActive } = useContext(LayerContext);
  const [currentRoute, setCurrentRoute] = useState('');
  const [currentRoutes, setCurrentRoutes] = useState(['']);

  const changeLayer = useCallback((layer: Layer) => {
    setCurrentRoute('');
    setCurrentRoutes(() => ['']);
    changeActive(layer);
    navigate(`/${layer}`);
  }, []);

  const items =
    useMemo(() => {
      const layer = getValidLayer(active);
      return (
        layer &&
        layer.map((route) => getItem(route.label, route.path, route.children))
      );
    }, [active]) || [];

  const handleNavigate: MenuProps['onClick'] = (info) => {
    const target = info.domEvent.target as any;
    document.title = target.innerHTML;
    setCurrentRoute(info.key);
    navigate(info.key);
  };

  return (
    <div className="container">
      <div className="sider">
        <Logo onClick={() => navigate('/')} imgPath={logos[active]} />
        <Menu
          onClick={handleNavigate}
          onOpenChange={(e) => setCurrentRoutes(() => [...e])}
          selectedKeys={[currentRoute]}
          openKeys={currentRoutes}
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
          <SiderIcon
            href="https://github.com/Dr-ZHUIM"
            icon={<GithubOutlined />}
          />
          <SiderIcon href="http://www.zhuim.fun" icon={<UserOutlined />} />
        </div>
      </div>
      <section className="right-column flex-col">
        <header className="flex navbar">
          {Object.keys(layers).map((key) => (
            <div
              onClick={() => changeLayer(key as Layer)}
              key={key}
              className={
                `navbar-item pos-re` + `${key === active ? ' active-nav' : ''}`
              }
            >
              {key}
            </div>
          ))}
        </header>
        <main className="main-container">
          <div className="flex-container">{props.children}</div>
        </main>
      </section>
    </div>
  );
}
