import './polyfills/polyfills';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename="/blog/">
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'rgb(0, 21, 41)',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>,
);
