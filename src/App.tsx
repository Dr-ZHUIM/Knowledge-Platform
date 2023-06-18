import { Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { routers } from './routes/routes';
import Home from './pages/Home';
import 'antd/dist/reset.css';
import '@styles/normalize.scss';
import '@styles/common.scss';
import '@styles/normalize.scss';
import '@styles/animation.scss';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {routers}
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
