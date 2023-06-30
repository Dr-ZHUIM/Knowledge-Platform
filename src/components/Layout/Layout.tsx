// libs import
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu, notification } from 'antd';
import { GithubOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
// routers import
import { layers } from '@/routes/getRoutes';
// context import
import { LayerContext } from '@/App';
// img import
import { logos } from '@imgs/logos';
// utils import
import { getItem, getValidLayer, handlePage } from './utils';
// css modules import
import './layout.scss';
import Logo from './Logo/Logo';
import SiderIcon from './SiderIcon/SiderIcon';

type Message = {
  message: React.ReactElement | string;
  description: React.ReactElement | string;
  state?: 'info' | 'success' | 'error';
};

export const MessageContext = createContext({
  openMessage: ({ message, description }: Message) => {
    console.log(message, description);
  },
});

function Layout(props: React.PropsWithChildren) {
  const [api, contextHolder] = notification.useNotification();
  // resolve route problems
  const currentPage = useLocation().pathname;
  const { active, changeActive } = useContext(LayerContext);
  const [currentRoute, setCurrentRoute] = useState(currentPage);
  const [currentRoutes, setCurrentRoutes] = useState(() => {
    const pagePath = currentPage.split('/');
    return ['', `/${pagePath[1]}/${pagePath[2]}`];
  });

  const navigate = useNavigate();
  const changeLayer = useCallback((layer: Layer) => {
    navigate(`/${layer}`);
  }, []);
  const openMessage = useCallback((messageOptions: Message) => {
    const _messageOptions = { ...messageOptions, duration: 2 };
    switch (_messageOptions.state) {
      case 'success': {
        api.success(_messageOptions);
        break;
      }
      case 'error': {
        api.error(_messageOptions);
        break;
      }
      default: {
        api.info(_messageOptions);
        break;
      }
    }
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
    <MessageContext.Provider value={{ openMessage }}>
      {contextHolder}
      <div className="layout-container">
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
                  `navbar-item pos-re` +
                  `${key === active ? ' active-nav' : ''}`
                }
              >
                {key}
              </div>
            ))}
          </header>
          <main className="main-container">{props.children}</main>
        </section>
      </div>
    </MessageContext.Provider>
  );
}

export default React.memo(Layout);
