import React from "react";
import { NavLink, Outlet } from "react-router-dom";

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

          <div className="date flex items-center gap-[63px]">
            <div
              style={{ boxShadow: " 0px 2px 5px 0px #26334D08" }}
              className="arrow border border-[#F5F6F7] w-[40px] mx-auto rounded-full px-[16px] py-[15px]"
            >
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.0732 0.672889C5.89882 0.49812 5.66208 0.399902 5.4152 0.399902C5.16831 0.399902 4.93157 0.49812 4.7572 0.672889L0.473195 4.95689C0.109195 5.32089 0.109195 5.90889 0.473195 6.27289L4.7572 10.5569C5.1212 10.9209 5.7092 10.9209 6.0732 10.5569C6.4372 10.1929 6.4372 9.60489 6.0732 9.24089L2.45186 5.61022L6.0732 1.98889C6.4372 1.62489 6.42786 1.02756 6.0732 0.672889Z"
                  fill="#C3CAD9"
                />
              </svg>
            </div>
            <p className="text-[#2B3A58] font-bold text-xl ">June</p>

            <div
              style={{ boxShadow: " 0px 2px 5px 0px #26334D08" }}
              className="arrow border border-[#F5F6F7] w-[40px] mx-auto rounded-full px-[16px] py-[15px]"
            >
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.473195 0.67408C0.109195 1.03808 0.109195 1.62608 0.473195 1.99008L4.09453 5.61141L0.473195 9.23275C0.109195 9.59675 0.109195 10.1847 0.473195 10.5487C0.837195 10.9127 1.4252 10.9127 1.7892 10.5487L6.0732 6.26475C6.4372 5.90075 6.4372 5.31275 6.0732 4.94875L1.7892 0.664747C1.43453 0.31008 0.837195 0.31008 0.473195 0.67408Z"
                  fill="#C3CAD9"
                />
              </svg>
            </div>
          </div>

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
