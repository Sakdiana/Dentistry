import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

export default function Layout() {

  const [isAsideOpen, setIsAsideOpen]=useState(true)
  const toggleAside=()=>{
    setIsAsideOpen(prev=>!prev)
  }

  return (
    <>
      <div className="mb-8">
        <Header />
      </div>
      <div className="container flex items-start   gap-8  ">
        <div className={ ` z-20 transition-transform duration-500 ${isAsideOpen ? "translate-x-0" : "-translate-x-full"}   `}>
        <Aside toggleAside={toggleAside} />
        </div>

       <div className="w-full">
         <Outlet />
       </div>
      </div>

      
    </>
  );
}
