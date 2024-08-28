import React from "react";
import { Outlet } from "react-router-dom";
import { Component } from "../Components/Footer";
import Title from "../Components/Title";

function Layout() {
  return (
    <>
      <Title />

      <Outlet />
      <Component />
    </>
  );
}

export default Layout;
