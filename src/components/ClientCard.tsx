import React from "react";
import Btn from "./Btn";

export default function ClientCard() {
  return (
    <div className="bg-[#FFFFFF] max-w-[260px] w-full rounded-[14px] p-4">
      <div className="diagnos">
        <p className="text-[#2B3A58] text-base font-normal leading-[143%] ">
          Diagnosis - Caries
        </p>
      </div>

      <div className="time mt-4 ">
        <p className="font-bold text-xl  ">08:00 </p>
      </div>

      <div className="status mt-4 flex items-center gap-4">
        <p className="text-[#2B3A58] font-normal text-base leading-[143%]"> Status</p>

        <div className="status__type flex items-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14.0003" cy="14.0001" r="9.33333" fill="#FF6633" />
          </svg>

          <p className="text-[#2B3A58] font-normal text-base leading-[20px]">Will not come</p>
        </div>
      </div>

      <div className="history mt-4">
        <p className="font-medium text-sm leading-[20px] text-[#2B3A58]">View treatment history</p>
      </div>

      <div className="btn mt-4">
       <Btn text="Open" padding="8px 47px"/>
      </div>
    </div>
  );
}
