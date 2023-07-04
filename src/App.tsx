// libs import
import { createContext, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
// routers import
import { generateRouters } from './routes/getRoutes';
// components import
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/Error/404';
import Home from './pages/Home/Home';
// utils functions import
import { useResize } from '@/utils/hooks';
import { setFontSize } from '@/utils/eventHandler';
//  css modules import
import '@styles/animation.scss';
import '@styles/common.scss';
import '@styles/md.scss';
import '@styles/normalize.scss';
import 'antd/dist/reset.css';

export const LayerContext = createContext<{
  active: Layer;
  changeActive: (layer: Layer) => void;
}>({ active: 'HOME', changeActive() {} });

function App() {
  const pathname = useLocation().pathname.split('/');
  const [active, setActive] = useState<Layer>(pathname[1] as Layer);
  useResize(() => {
    const width =
      document.documentElement.clientWidth || document.body.clientWidth;
    isMobile
      ? setFontSize((width / 375) * 18)
      : setFontSize((width / 1920) * 18);
  });
  const routers = useMemo(() => {
    const result = generateRouters();
    return result;
  }, [active]);

  const changeActive = (layer: Layer) => {
    setActive(layer);
  };

  return (
    <LayerContext.Provider value={{ active, changeActive }}>
      <Layout>
        <Routes>
          {routers}
          <Route path="/HOME" element={<Home />}></Route>
          <Route path="/Error/404" element={<ErrorPage />}></Route>
          <Route path="/" element={<Navigate to="/HOME" replace />} />
          <Route path="/*" element={<Navigate to="Error/404" replace />} />
        </Routes>
      </Layout>
    </LayerContext.Provider>
  );
}

export default App;
