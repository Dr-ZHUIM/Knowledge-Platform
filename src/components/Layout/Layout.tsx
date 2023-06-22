import { LayerContext } from '@/App';
import { layers } from '@/routes/getRoutes';
import { GithubOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { logos } from '@imgs/logos';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './layout.scss';
import Logo from './Logo/Logo';
import SiderIcon from './SiderIcon/SiderIcon';

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

function handlePage(page: string) {
  const pagePath = page.split('/');
  return {
    currentRoutes: ['', `/${pagePath[1]}/${pagePath[2]}`],
    active: pagePath[1] as Layer,
  };
}

function Layout(props: React.PropsWithChildren) {
  const currentPage = useLocation().pathname;
  const navigate = useNavigate();
  const { active, changeActive } = useContext(LayerContext);
  const [currentRoute, setCurrentRoute] = useState(currentPage);
  const [currentRoutes, setCurrentRoutes] = useState(() => {
    const pagePath = currentPage.split('/');
    return ['', `/${pagePath[1]}/${pagePath[2]}`];
  });

  const changeLayer = useCallback((layer: Layer) => {
    navigate(`/${layer}`);
  }, []);

  useEffect(() => {
    setCurrentRoute(currentPage);
    setCurrentRoutes(() => handlePage(currentPage).currentRoutes);
    changeActive(handlePage(currentPage).active);
  }, [currentPage]);

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
        <Logo onClick={() => navigate(`${active}`)} imgPath={logos[active]} />
        <Menu
          onClick={handleNavigate}
          onOpenChange={(e) => {
            const latestOpenKey = e.find(
              (key) => currentRoutes.indexOf(key) === -1,
            );
            setCurrentRoutes(() => (latestOpenKey ? [latestOpenKey] : []));
          }}
          selectedKeys={[currentRoute]}
          openKeys={currentRoutes}
          mode="inline"
          style={{
            minWidth: 0,
            width: 'inherit',
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
          <SiderIcon onClick={() => navigate('/')} icon={<HomeOutlined />} />
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
        <main className="main-container">{props.children}</main>
      </section>
    </div>
  );
}

export default React.memo(Layout);
