import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="container flex items-center justify-between ">
        <div className="mt-8">
        <Aside />
        </div>

        <Outlet />
      </div>

      
    </>
  );
}
