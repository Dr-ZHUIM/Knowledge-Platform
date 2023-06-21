// libs import
import { Routes, Route, HashRouter } from 'react-router-dom';
import { createContext, useContext, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
// routers import
import { layers, generateRouters } from './routes/getRoutes';
// components import
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
// utils functions import
import { useResize } from '@/utils/hooks';
import { setFontSize } from '@/utils/utils';
//  css modules import
import 'antd/dist/reset.css';
import '@styles/normalize.scss';
import '@styles/common.scss';
import '@styles/normalize.scss';
import '@styles/animation.scss';

export const LayerContext = createContext<{
  active: Layer;
  changeActive: (layer: Layer) => void;
}>({ active: 'CSS', changeActive() {} });

function App() {
  const [active, setActive] = useState<Layer>('CSS');
  useResize(() => {
    const width =
      document.documentElement.clientWidth || document.body.clientWidth;
    isMobile
      ? setFontSize((width / 375) * 16)
      : setFontSize((width / 1920) * 16);
  });
  const routers = useMemo(() => {
    return generateRouters(layers[active] || []);
  }, [active]);

  const changeActive = (layer: Layer) => {
    setActive(layer);
  };

  return (
    <HashRouter>
      <LayerContext.Provider value={{ active, changeActive }}>
        <Layout>
          <Routes>
            {routers}
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </LayerContext.Provider>
    </HashRouter>
  );
}

export default App;
