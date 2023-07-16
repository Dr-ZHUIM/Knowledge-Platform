// libs import
import { notification } from 'antd';
import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarIcon from './Navbar/SiderIcon/SiderIcon';
// components import
import Logo from './Logo/Logo';
// icons import
import { GithubOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { ColorModeIcon } from '../Icons/Icons';
// mobile components import
import Toggle from './MobileNavbar/Toggle/Toggle';
// routers import
import { layers } from '@/routes/getRoutes';
// context import
import { AppContext } from '@/App';
// utils import
import { useToggle, useDarkmode } from '@/utils/hooks';
// css modules import
import './layout.scss';
import Navbar from './Navbar/Navbar';
import MobileNavbar from './MobileNavbar/MobileNavbar';
// img modules import
import logoImg from '@imgs/logo.png';
import Mask from './MobileNavbar/Mask/Mask';

type Message = {
  message: React.ReactElement | string;
  description: React.ReactElement | string;
  state?: 'info' | 'success' | 'error';
};

export const MessageContext = createContext({
  openMessage: ({ message, description }: Message) => {
    console.log('message', message);
    console.log('description', description);
  },
});

function Layout(props: React.PropsWithChildren) {
  const navigate = useNavigate();
  const { isMobile } = useContext(AppContext);
  const layersEntries = useMemo(() => {
    return Object.entries(layers) as [Layer, Record<string, RouteT[]>][];
  }, []);
  const mobileNavigate = useCallback((to: string) => {
    navigate(to);
    setShowMobileMenu(false);
  }, []);
  const [colorMode, toggleColorMode] = useDarkmode();
  const btnGroup = useMemo(() => {
    return (
      <div
        className={`flex text-[18px] h-full gap-8 justify-end items-center ${
          isMobile ? 'text-[var(--color-font)]' : 'text-[#fff]'
        }`}
      >
        <NavbarIcon
          href="https://github.com/Dr-ZHUIM"
          icon={<GithubOutlined />}
        />
        <NavbarIcon href="http://www.zhuim.fun" icon={<UserOutlined />} />
        <NavbarIcon
          onClick={() => (isMobile ? mobileNavigate('/') : navigate('/'))}
          icon={<HomeOutlined />}
        />
        <NavbarIcon
          onClick={() => toggleColorMode()}
          icon={<ColorModeIcon />}
        />
      </div>
    );
  }, [isMobile]);
  const [showMobileMenu, toggleShowMobileMenu, setShowMobileMenu] = useToggle();
  const [api, contextHolder] = notification.useNotification();

  const openMessage = (messageOptions: Message) => {
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
  };

  return (
    <MessageContext.Provider value={{ openMessage }}>
      {contextHolder}
      <div color-mode={colorMode} className="layout-container">
        <section className="layout flex-col">
          {isMobile ? (
            <>
              <MobileNavbar>
                <Logo onClick={() => mobileNavigate('/')} imgPath={logoImg} />
                <Toggle show={showMobileMenu} onToggle={toggleShowMobileMenu} />
              </MobileNavbar>
            </>
          ) : (
            <Navbar btnGroup={btnGroup} layers={layersEntries} />
          )}
          {isMobile && (
            <Mask
              onNavigate={(to: string) => mobileNavigate(to)}
              layers={layersEntries}
              show={showMobileMenu}
              btnGroup={btnGroup}
            ></Mask>
          )}
          <main className="main-container">{props.children}</main>
        </section>
      </div>
    </MessageContext.Provider>
  );
}

export default React.memo(Layout);
