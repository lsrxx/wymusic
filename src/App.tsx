import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { routes } from "./routes";

import AppFooter from "./components/appFooter/appFooter";
import AppHeader from "./components/appHeader/appHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      {/* 对路由进行使用，即为占位 */}
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
}

export default App;
