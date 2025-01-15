import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <div className="mb-10">
        <Header />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
