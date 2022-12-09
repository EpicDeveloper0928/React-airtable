import React from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import MainLayout from "./layout/main";
import Home from "./pages/home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
