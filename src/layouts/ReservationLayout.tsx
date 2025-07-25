import React from "react";
import ReservationHeader from "../components/ReservationHeader";
import { Outlet } from "react-router-dom";

export default function ReservationLayout() {
  return (
    <div style={{ boxShadow: '0px 60px 120px 0px #26334D0D' }} className="bg-[#FFFFFF] rounded-[20px] px-5   ">
      <div className="">
        <ReservationHeader />
      </div>
      <div className="mt-[60px]">
        <Outlet />
      </div>
    </div>
  );
}
