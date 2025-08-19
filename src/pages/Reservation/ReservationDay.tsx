import React, { useState } from "react";
import ReservationClient from "../../components/ReservationClient";
import Modal from "../../components/ui/Modal";

type Event = {
  time: string;
  title: string;
};

const events: Event[] = [
  { time: "10:00", title: "The Amazing Hubble" },
  { time: "10:30", title: "The Amazing Hubble" },
  { time: "11:00", title: "The Amazing Hubble" },
  { time: "20:00", title: "The Amazing Hubble" },
];

const hours = Array.from({ length: 12 }, (_, i) => 9 + i);

export default function ReservationDay() {
  const groupedEvents: Record<number, Event[]> = {};
  events.forEach((event) => {
    const [h] = event.time.split(":").map(Number);
    if (!groupedEvents[h]) groupedEvents[h] = [];
    groupedEvents[h].push(event);
  });

  const [selected, setSelected] = useState<Event | null>(null);

  return (
    <div className="p-4 max-w-6xl w-full">
      {selected && (
        <Modal event={selected} onClose={() => setSelected(null)} />
      )}
      <div className="flex items-start gap-[25px] ">
        <div className="svg">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.99 5C9.47 5 5 9.48 5 15C5 20.52 9.47 25 14.99 25C20.52 25 25 20.52 25 15C25 9.48 20.52 5 14.99 5ZM15 23C10.58 23 7 19.42 7 15C7 10.58 10.58 7 15 7C19.42 7 23 10.58 23 15C23 19.42 19.42 23 15 23ZM14.78 10H14.72C14.32 10 14 10.32 14 10.72V15.44C14 15.79 14.18 16.12 14.49 16.3L18.64 18.79C18.98 18.99 19.42 18.89 19.62 18.55C19.83 18.21 19.72 17.76 19.37 17.56L15.5 15.26V10.72C15.5 10.32 15.18 10 14.78 10Z"
              fill="#C3CAD9"
            />
          </svg>
        </div>
        <h2 className="text-[#2B3A58] font-bold text-xl mb-4 px-3">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
          })}
        </h2>
      </div>

      <table className="w-full border-collapse border-right border-[#F5F6F7]">
        <tbody>
          {hours.map((hour) => (
            <tr onClick={()=>setSelected(event)} key={hour} className="border-b border-[#F5F6F7]">
              <td className="w-[60px] text-center text-xs font-bold text-[#6B7A99] border-r border-[#F5F6F7]">
                {hour}:00
              </td>

              <td className="p-2 h-[100px]">

                <div className="flex gap-2 flex-wrap">
                  {groupedEvents[hour]?.map((event, idx) => (
                    <div  key={idx} >
                      <ReservationClient
                      status="Will not come"
                      time={event.time}
                      titleName={event.title}
                    />
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
