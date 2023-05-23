import React, { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";

import { routes } from "./routes";

import AppFooter from "./components/appFooter/appFooter";
import AppHeader from "./components/appHeader/appHeader";
import PlayerTool from "./views/player/app-player-tool/player-tool";
import { fetchCurrentSongData } from "./store/modules/player/player";
import { useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentSongData(2005213526));
  }, []);

  return (
    <div className="App">
      <AppHeader />
      {/* 对路由进行使用，即为占位 */}
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <PlayerTool />
    </div>
  );
}

export default App;
