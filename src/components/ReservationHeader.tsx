import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ReservationDateTitle from "./ReservationDateTitle";

export default function ReservationHeader() {
  return (
    <header>
      <div className="container">
        <div className="header__items flex items-center justify-between ">
          <div className="today">
            <button
              className="text-[#2B3A58] font-black text-sm border border-[#F5F6F7] px-5 py-[10px] rounded-full"
              style={{ boxShadow: "0px 2px 5px 0px #26334D08" }}
            >
              Today
            </button>
          </div>

          <ReservationDateTitle/>

          <div
            style={{ boxShadow: "0px 2px 5px 0px #26334D08" }}
            className="btns border-2 border-[#F5F6F7] rounded-full flex items-center "
          >

            <NavLink to={"/reservation/year"} className={({isActive})=>{
                return `font-black text-xs py-[10px] pl-5 pr-[15px] border border-[#F5F6F7] ${isActive ? "text-[#2B3A58]" : "text-[#C4CAD6]"} `;
            }} >
            Year
            </NavLink>

            <NavLink to={"/reservation/week"} className={({isActive})=>{
                return `font-black text-xs py-[10px] pl-5 pr-[15px] border border-[#F5F6F7] ${isActive ? "text-[#2B3A58]" : "text-[#C4CAD6]"} `;
            }} >
            Week
            </NavLink>


            <NavLink to={"/reservation/month"} className={({isActive})=>{
                return `font-black text-xs py-[10px] pl-5 pr-[15px] border border-[#F5F6F7] ${isActive ? "text-[#2B3A58]" : "text-[#C4CAD6]"} `;
            }}>
            Month
            </NavLink>


            <NavLink 
            to={"/reservation"}
            end
            className={({isActive})=>{
                return `font-black text-xs py-[10px] pl-5 pr-[15px] border border-[#F5F6F7] ${isActive ? "text-[#2B3A58]" : "text-[#C4CAD6]"} `;
            }}>
            Day
            </NavLink>
            
          </div>
        </div>
      </div>
    </header>
  );
}
