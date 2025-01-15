import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
