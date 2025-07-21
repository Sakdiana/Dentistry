import React, { useState } from "react";

interface SelectItems {
  value: string;
  label: string;
}

const select_items: SelectItems[] = [
  { label: "Earnings", value: "earnings" },
  { label: "Refunds", value: "refunds" },
  { label: "Declines", value: "declines" },
  { label: "Payouts", value: "payouts" },
];

export default function SelectOption() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };


  const [selected, setSelected] = useState("");

  return (
    <div>
      <div
        onClick={handleOpen}
        className="flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9993 2.1665C12.6457 2.1665 12.3066 2.30698 12.0565 2.55703C11.8065 2.80708 11.666 3.14622 11.666 3.49984V7.1665H7.99935C7.64573 7.1665 7.30659 7.30698 7.05654 7.55703C6.80649 7.80708 6.66601 8.14622 6.66601 8.49984V12.9998H2.99935C2.64573 12.9998 2.30659 13.1403 2.05654 13.3904C1.80649 13.6404 1.66602 13.9795 1.66602 14.3332V17.4998C1.66602 17.8535 1.80649 18.1926 2.05654 18.4426C2.30659 18.6927 2.64573 18.8332 2.99935 18.8332H16.9993C17.353 18.8332 17.6921 18.6927 17.9422 18.4426C18.1922 18.1926 18.3327 17.8535 18.3327 17.4998V3.49984C18.3327 3.14622 18.1922 2.80708 17.9422 2.55703C17.6921 2.30698 17.353 2.1665 16.9993 2.1665H12.9993ZM8.33268 8.83317H11.666V17.1665H8.33268V8.83317ZM16.666 17.1665H13.3327V3.83317H16.666V17.1665ZM6.66601 14.6665V17.1665H3.33268V14.6665H6.66601Z"
                fill="#018B67"
              />
            </svg>
          </div>
          <p className="font-normal text-base leading-[143%]">Income</p>
        </div>

        <div className="">
          <img
            src="/svg/selectArrow.svg"
            alt=""
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {open && (
        <div className="mt-3">
          {select_items.map((item) => (
            <div onClick={handleOpen} className="ml-9 mt-2 ">
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
