import { ReactElement, useState } from 'react';
import '@styles/normalize.scss';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import 'antd/dist/reset.css';
import '@styles/common.scss';
import '@styles/normalize.scss';
import * as Components from '@/pages';
import routes, { RouteT } from './routes/routes';

const routers: ReactElement[] = [];

const generateRoute = (route: RouteT) => {
  if (
    !route.label ||
    (!route.element && (!route.children || route.children.length < 1))
  ) {
    return null;
  }
  route.children
    ? route.children.map((childRoute) => generateRoute(childRoute))
    : routers.push(
        <Route
          key={route.label}
          path={route.path}
          element={route.element}
        ></Route>,
      );
};

routes.forEach((route) => generateRoute(route));

function App() {
  console.log('routers', routers);
  return (
    <HashRouter>
      <Layout>
        <Routes>{routers}</Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
