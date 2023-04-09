import { useState } from "react";
import "@styles/normalize.scss";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import "antd/dist/reset.css";
import * as Components from "@/pages";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route
            path="/transparentBorder"
            element={<Components.TransparentBorder />}
          ></Route>
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;

