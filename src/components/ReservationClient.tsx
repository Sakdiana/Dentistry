import React from "react";

interface ReservationClientProps {
  status: "Will not come" | "already arrived" | "Will come";
  time: string;
  titleName: string;
}

export default function ReservationClient({ status, time, titleName }: ReservationClientProps) {
  const borderColor: Record<ReservationClientProps["status"], string> = {
    "Will not come": "#FF6633",
    "already arrived": "#FFCB33",
    "Will come": "#29CC39",
  };

  const backgroundColor: Record<ReservationClientProps["status"], string> = {
    "Will not come": "#FF66330D",
    "already arrived": "#F0B8150D",
    "Will come": "#29CC390D",
  };

  return (
    <div
      style={{
        border: `2px solid ${borderColor[status]}`,
        background: backgroundColor[status],
      }}
      className="max-w-[125px] w-full p-[10px] rounded-[5px]"
    >
      <div className="time__profile flex items-center gap-1">
        <button
          style={{ background: borderColor[status] }}
          className="text-[8px] font-black text-white p-[7px] rounded-[5px]"
        >
          {time}
        </button>
        <div className="profile__svg">
          <img src="/svg/anotherWoman.svg" alt="" />
        </div>
      </div>

      <p className="font-bold text-[10px] text-[#2B3A58] mt-[5px]">
        {titleName}
      </p>
    </div>
  );
}
