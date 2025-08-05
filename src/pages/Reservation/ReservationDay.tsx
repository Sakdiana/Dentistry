import React from "react";

type Event = {
  time: string; // пример: "10:00"
  title: string;
  color: "red" | "yellow" | "green";
};

const events: Event[] = [
  { time: "10:00", title: "The Amazing Hubble", color: "red" },
  { time: "10:30", title: "The Amazing Hubble", color: "yellow" },
  { time: "11:00", title: "The Amazing Hubble", color: "green" },
  { time: "20:00", title: "The Amazing Hubble", color: "green" },
];

const hours = Array.from({ length: 12 }, (_, i) => 9 + i); // 9–20

function calcTop(time: string) {
  const startHour = 9;
  const totalHours = 12; // 9-20
  const [hour, minute] = time.split(":").map(Number);
  const minutesFromStart = (hour - startHour) * 60 + minute;
  return (minutesFromStart / (totalHours * 60)) * 100;
}

export default function ReservationDay() {
  return (
    <div className="p-[18px] max-w-6xl w-full flex">
      {/* Левая колонка времени */}
      <div className="left w-[50px] flex flex-col items-center border-r border-[#F5F6F7]">
        {/* Иконка */}
        <div className="mb-2">
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
        </div>

        {/* Время слева */}
        {hours.map((hour) => (
          <div key={hour} className="flex items-center justify-center h-[calc(800px/12)]">
            <p className="text-[#6B7A99] font-bold text-xs">{hour}</p>
          </div>
        ))}
      </div>

      {/* Правая часть календаря */}
      <div className="right flex-1 relative h-[800px] border-l border-r border-gray-200">
        {/* Сетка времени */}
        {hours.map((hour) => (
          <div
            key={hour}
            className="h-[calc(100%/12)] border-b border-gray-100 text-xs pl-2 flex items-start"
          />
        ))}

        {/* События */}
        {events.map((event, index) => (
          <div
            key={index}
            className={`absolute left-4 right-4 border rounded-md p-1 text-xs flex flex-col max-w-[125px] w-full ${
              event.color === "red"
                ? "border-red-500 bg-red-50"
                : event.color === "yellow"
                ? "border-yellow-500 bg-yellow-50"
                : "border-green-500 bg-green-50"
            }`}
            style={{
              top: `${calcTop(event.time)}%`,
              height: "8%",
            }}
          >
            <span className="font-bold text-[10px]">{event.time}</span>
            <span>{event.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
