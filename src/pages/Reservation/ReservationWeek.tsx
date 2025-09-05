import React from "react";
import ReservationClient from "../../components/ReservationClient";

type CalendarEvent = {
  day: number; 
  time: number; // хранится как число (9, 11, 17)
  title: string;
  status: "Will not come" | "already arrived" | "Will come";
};

const events: CalendarEvent[] = [
  { day: 0, time: 9, title: "The Amazing Hubble", status: "Will come" },
  { day: 1, time: 11, title: "The Amazing Hubble", status: "Will come" },
  { day: 1, time: 13, title: "The Amazing Hubble", status: "Will come" },
  { day: 2, time: 15, title: "The Amazing Hubble", status: "Will come" },
  { day: 3, time: 9, title: "The Amazing Hubble", status: "Will come" },
  { day: 3, time: 13, title: "The Amazing Hubble", status: "Will come" },
  { day: 4, time: 11, title: "The Amazing Hubble", status: "Will come" },
  { day: 6, time: 11, title: "The Amazing Hubble", status: "Will come" },
  { day: 6, time: 13, title: "The Amazing Hubble", status: "Will come" },
  { day: 0, time: 17, title: "The Amazing Hubble", status: "Will come" },
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// 9 - 20
const hours = Array.from({ length: 12 }, (_, i) => 9 + i);

export default function ReservationWeek() {
  return (
    <div className="p-4">
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="w-[60px] border border-[#F0F0F0] p-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.99 5C9.47 5 5 9.48 5 15C5 20.52 9.47 25 14.99 25C20.52 25 25 20.52 25 15C25 9.48 20.52 5 14.99 5ZM15 23C10.58 23 7 19.42 7 15C7 10.58 10.58 7 15 7C19.42 7 23 10.58 23 15C23 19.42 19.42 23 15 23ZM14.78 10H14.72C14.32 10 14 10.32 14 10.72V15.44C14 15.79 14.18 16.12 14.49 16.3L18.64 18.79C18.98 18.99 19.42 18.89 19.62 18.55C19.83 18.21 19.72 17.76 19.37 17.56L15.5 15.26V10.72C15.5 10.32 15.18 10 14.78 10Z"
                  fill="#C3CAD9"
                />
              </svg>
            </th>
            {days.map((day, idx) => (
              <th
                key={idx}
                className="text-center text-sm font-bold text-[#2B3A58] border border-[#F0F0F0] p-2"
              >
                {day}
                <div className="text-[#6B7A99] font-normal">{21 + idx}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour} className="h-[80px]">
              {/* Время слева */}
              <td className="text-xs text-[#6B7A99] font-bold text-center border border-[#F0F0F0] w-[60px]">
                {hour}:00
              </td>

              {/* Дни */}
              {days.map((_, dayIdx) => {
                const event = events.find(
                  (e) => e.day === dayIdx && e.time === hour
                );

                return (
                  <td
                    key={dayIdx}
                    className="border border-[#F0F0F0] align-top relative"
                  >
                    {event && (
                      <div className="flex items-center justify-center mt-1">
                        <ReservationClient
                        time={`${event.time}:00`}
                        titleName={event.title}
                        status={event.status}
                      />
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
