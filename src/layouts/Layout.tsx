import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

export default function Layout() {
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <>
      <div className="mb-8 ">
        <Header />
      </div>
      <div className={`container relative  flex items-start transition-all duration-300 ease-in-out  ${isAsideOpen ? " gap-8" : "w-full justify-center "}  `}>
        <div
          className={` z-20 z-20 transition-transform duration-500  ${
            isAsideOpen ? "translate-x-0 " : "-translate-x-full absolute top-0 left-0 "
          }   `}
        >
          <Aside toggleAside={toggleAside} />
        </div>

        <div className={`transition-all duration-[0.7s] ease-in-out ${
            isAsideOpen ? "w-[calc(100%-250px)]" : "w-full"
          }`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
