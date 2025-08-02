import React from "react";
import { Outlet } from "react-router-dom";
import ReservationHeader from "../components/ReservationHeader";

export default function ReservationLayout() {
  return (
    <div
      style={{ boxShadow: "0px 60px 120px 0px #26334D0D" }}
      className="bg-[ #FFFFFF] p-[30px] rounded-[20px]"
    >
      <ReservationHeader />
     <div className="mt-[60px]">
       <Outlet />
     </div>
    </div>
  );
}
