import React from "react";

type Event = {
  date: string;
  time: string;
  title: string;
  color: "green" | "yellow";
};


const events: Event[] = [
  { date: "2025-08-06", time: "10:00", title: "The Amazing Hubble", color: "yellow" },
  { date: "2025-08-10", time: "10:00", title: "The Amazing Hubble", color: "green" },
  { date: "2025-08-20", time: "10:00", title: "The Amazing Hubble", color: "yellow" },
  { date: "2025-08-27", time: "10:00", title: "The Amazing Hubble", color: "yellow" },
  { date: "2025-08-28", time: "10:00", title: "The Amazing Hubble", color: "yellow" },
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const daysInMonth = 31;

export default function ReservationMonth() {
  const startDate = new Date("2025-08-01");
  const startDay = (startDate.getDay() + 6) % 7; 

  const cells = Array.from({ length: 42 }, (_, i) => {
    const day = i - startDay + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });

  return (
    <div className="p-4 max-w-[1100px] mx-auto">

      {/* Заголовок дней недели */}

      <div className="grid grid-cols-8 border-b border-gray-200">

        <div className="w-[50px]"></div> 
        {/* Колонка для часов */}

        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-bold py-2 text-gray-700">
            {day}
          </div>
        ))}
      </div>

      {/* Сетка календаря */}

      <div className="grid grid-cols-8 border-l border-t border-gray-200">
        {/* Часы слева */}

        <div className="border-r border-gray-200">
          {[9, 10, 11, 12, 13].map((hour) => (
            <div key={hour} className="h-24 flex items-start justify-center text-xs text-gray-500 border-b">
              {hour}
            </div>
          ))}
        </div>

        {/* Дни месяца */}
        
        <div className="col-span-7 grid grid-cols-7">
          {cells.map((day, i) => (
            <div
              key={i}
              className="border-r border-b border-gray-200 h-24 relative p-1"
            >
              {day && (
                <>
                  <span className="absolute top-1 right-1 text-xs text-gray-400">{day}</span>
                  {/* События */}
                  {events
                    .filter((e) => new Date(e.date).getDate() === day)
                    .map((event, idx) => (
                      <div
                        key={idx}
                        className={`mt-5 p-1 text-[10px] border rounded-md flex flex-col w-[90%] ${
                          event.color === "green"
                            ? "border-green-500 bg-green-50"
                            : "border-yellow-500 bg-yellow-50"
                        }`}
                      >
                        <span className="font-bold">{event.time}</span>
                        <span>{event.title}</span>
                      </div>
                    ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
