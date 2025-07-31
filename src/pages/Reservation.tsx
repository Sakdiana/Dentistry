import React from "react";
import { ru } from "date-fns/locale";
import { format, getDay, parse, startOfWeek } from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { ru };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Кастомный Toolbar
const CustomToolbar = (toolbar: any) => {
  const buttonStyle =
    "border border-[#F5F6F7] font-black text-xs py-[10px] px-5 rounded-[20px]";
  const shadowStyle = { boxShadow: "0px 2px 5px 0px #26334D08" };

  return (
    <div className="flex items-center justify-between mb-4">
      {/* Левая часть: Today / Back / Next */}
      <div className="flex gap-2">
        <button
          onClick={() => toolbar.onNavigate("TODAY")}
          style={shadowStyle}
          className={buttonStyle}
        >
          Today
        </button>
        <button
          onClick={() => toolbar.onNavigate("PREV")}
          style={shadowStyle}
          className={buttonStyle}
        >
          Back
        </button>
        <button
          onClick={() => toolbar.onNavigate("NEXT")}
          style={shadowStyle}
          className={buttonStyle}
        >
          Next
        </button>
      </div>

      {/* Центр: Дата */}
      <span className="font-bold text-sm text-center">{toolbar.label}</span>

      {/* Правая часть: Day / Week / Month / Agenda */}
      <div className="flex gap-2">
        <button
          onClick={() => toolbar.onView("day")}
          style={shadowStyle}
          className={`${buttonStyle} ${
            toolbar.view === "day"
              ? "bg-[#F5F6F7] text-[#2B3A58]"
              : "text-[#BBBBBB]"
          }`}
        >
          Day
        </button>
        <button
          onClick={() => toolbar.onView("week")}
          style={shadowStyle}
          className={`${buttonStyle} ${
            toolbar.view === "week"
              ? "bg-[#F5F6F7] text-[#2B3A58]"
              : "text-[#BBBBBB]"
          }`}
        >
          Week
        </button>
        <button
          onClick={() => toolbar.onView("month")}
          style={shadowStyle}
          className={`${buttonStyle} ${
            toolbar.view === "month"
              ? "bg-[#F5F6F7] text-[#2B3A58]"
              : "text-[#BBBBBB]"
          }`}
        >
          Month
        </button>
        <button
          onClick={() => toolbar.onView("agenda")}
          style={shadowStyle}
          className={`${buttonStyle} ${
            toolbar.view === "agenda"
              ? "bg-[#F5F6F7] text-[#2B3A58]"
              : "text-[#BBBBBB]"
          }`}
        >
          Agenda
        </button>
      </div>
    </div>
  );
};

export default function ReservationDay() {
  const events = [
    {
      title: "Встреча с клиентом",
      start: new Date(2025, 6, 31, 10, 0),
      end: new Date(2025, 6, 31, 12, 0),
    },
  ];

  return (
    <div
      style={{ boxShadow: "0px 60px 120px 0px #26334D0D" }}
      className="h-[600px] font-nunito bg-[#FFFFFF] p-[30px] rounded-[20px]"
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="day"
        views={["day", "week", "month", "agenda"]}
        culture="ru"
        min={new Date(2025, 6, 31, 9, 0)}
        max={new Date(2025, 6, 31, 20, 0)}
        step={60}
        timeslots={1}
        components={{
          toolbar: CustomToolbar,
        }}
        formats={{
          timeGutterFormat: "HH:mm",
          eventTimeRangeFormat: ({ start, end }) =>
            `${format(start, "HH:mm")} – ${format(end, "HH:mm")}`,
        }}
      />
    </div>
  );
}
