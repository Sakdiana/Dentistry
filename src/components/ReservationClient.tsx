import React from "react";

type ReservationClientProps = {
  status: "Will not come" | "already arrived" | "Will come";
};
export default function ReservationClient({ status }: ReservationClientProps) {
  const borderColor: Record<ReservationClientProps["status"], string> = {
    "Will not come": "#FF6633",
    "already arrived": "#FFCB33",
    "Will come": "#29CC39",
  };

  return (
    <div style={{border:`2px solid ${borderColor[status]}`}} className="max-w-[125px] w-full p-[10px] rounded-[5px]">
      <div className="time__profile flex items-center gap-1">
        <button style={{background:` ${borderColor[status]}`}} className="text-[8px] font-black text-white p-[7px] rounded-[5px]">
          10:00
        </button>
        <div className="profile__svg">
          <img src="/svg/anotherWoman.svg" alt="" />
        </div>
      </div>

      <p className="font-bold text-[10px] text-[#2B3A58] mt-[5px]">
        The Amazing Hubble
      </p>
    </div>
  );
}
