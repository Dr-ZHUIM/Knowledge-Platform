// libs import
import { createContext, useEffect, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Navigate, Route, Routes } from 'react-router-dom';
// routers import
import { generateRouters } from './routes/getRoutes';
// components import
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/Error/404';
import Home from './pages/Home/Home';
// utils functions import
import { useWindowWidth } from '@/utils/hooks';
//  css modules import
import '@styles/animation.scss';
import '@styles/common.scss';
import '@styles/md.scss';
import '@styles/normalize.scss';
import 'antd/dist/reset.css';
import Articles from './pages/Articles/Articles';

export const AppContext = createContext<{
  isMobile: boolean;
}>({ isMobile: false });

// TODO: XMind Resolver

function App() {
  const width = useWindowWidth();
  const [_isMobile, set_isMobile] = useState(isMobile || width <= 768);
  useEffect(() => {
    isMobile || width <= 768 ? set_isMobile(true) : set_isMobile(false);
  }, [width, isMobile]);

  const routers = useMemo(() => {
    return generateRouters();
  }, []);

  return (
    <AppContext.Provider value={{ isMobile: _isMobile }}>
      <Layout>
        <Routes>
          {routers}
          <Route path="/Articles/:layer/:category" element={<Articles />} />
          <Route path="/HOME" element={<Home />} />
          <Route path="/Error/404" element={<ErrorPage />} />
          <Route path="/" element={<Navigate to="/HOME" replace />} />
          <Route path="/*" element={<Navigate to="Error/404" replace />} />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
