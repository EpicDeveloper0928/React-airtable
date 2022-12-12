import React from "react";
import { Outlet } from "react-router-dom";

import Header from "layout/header";

export default function MainLayout() {
  return (
    <div className="text-white">
      <Header />
      <div className="h-screen pt-14 text-slate-900">
        <Outlet />
      </div>
    </div>
  );
}
