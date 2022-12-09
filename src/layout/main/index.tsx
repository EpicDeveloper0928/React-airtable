import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";

export default function MainLayout() {
  return (
    <div className="text-white">
      <Header />
      <Outlet />
    </div>
  );
}
