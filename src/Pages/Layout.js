import React from "react";
import { Outlet } from "react-router-dom";
import { Component } from "../Components/Footer";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";

function Layout() {
  return (
    <>
      <Title />
      <Navbar />

      <Outlet />
      <Component />
    </>
  );
}

export default Layout;
