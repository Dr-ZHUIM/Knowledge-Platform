// libs import
import { notification } from 'antd';
import React, { createContext, useContext } from 'react';
// routers import
import { layers } from '@/routes/getRoutes';
// context import
import { LayerContext } from '@/App';
// css modules import
import './layout.scss';
import Navbar from './Navbar/Navbar';

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
  const [api, contextHolder] = notification.useNotification();
  const { isMobile } = useContext(LayerContext);
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
      <div className="layout-container">
        <section className="layout flex-col">
          {isMobile ? (
            <></>
          ) : (
            <Navbar
              layers={
                Object.entries(layers) as [Layer, Record<string, RouteT[]>][]
              }
            />
          )}
          <main className="main-container">{props.children}</main>
        </section>
      </div>
    </MessageContext.Provider>
  );
}

export default React.memo(Layout);
