import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import store from "store";
import MainLayout from "./layout/main";
import Home from "./pages/home";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
