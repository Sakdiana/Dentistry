import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

export default function Layout() {
  return (
    <>
      <div className="mb-8">
        <Header />
      </div>
      <div className="container flex items-start   gap-8  ">
        <div className="">
        <Aside />
        </div>

       <div className="">
         <Outlet />
       </div>
      </div>

      
    </>
  );
}
