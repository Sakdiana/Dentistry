import React from "react";
import { useLocation } from "react-router-dom";

export default function ReservationDateTitle() {
  const location = useLocation();
  const today = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let title = "";

  if (location.pathname.includes("/reservation/year")) {
    // Год

    title = today.getFullYear().toString();
  } else if (location.pathname.includes("/reservation/month")) {
    // Месяц и год

    title = `${months[today.getMonth()]} ${today.getFullYear()}`;

  } else if (location.pathname.includes("/reservation/week")) {

    // Неделя (с понедельника по воскресенье)
    const startOfWeek = new Date(today);
    const day = today.getDay(); // 0 = Sunday, 1 = Monday ...
    const diff = day === 0 ? -6 : 1 - day;
    startOfWeek.setDate(today.getDate() + diff);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    title = `${months[startOfWeek.getMonth()]} ${startOfWeek.getDate()} - ${
      months[endOfWeek.getMonth()]
    } ${endOfWeek.getDate()}, ${today.getFullYear()}`;
  } else {
    // День
    title = `${
      months[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()}`;
  }

  return <p className="text-[#2B3A58] font-bold text-xl ">{title}</p>;
}
