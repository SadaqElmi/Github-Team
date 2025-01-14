import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
