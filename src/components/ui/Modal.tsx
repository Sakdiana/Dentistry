import React from "react";
import DateSelect from "../DateSelect";
import Btn from "./Btn";

type ModalProps = {
  event: { time: string; title: string };
  onClose: () => void;
};

export default function Modal({ event, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-[#F8FAFB]/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#FFFFFF] max-w-[362px] w-full rounded-[20px] p-5">
        <div className="header flex items-center justify-between border-b border-[#C3CAD9] pb-[17px]">
          <div className="date flex items-center gap-[10px]">
            <div className="svg">
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
                  d="M19 16H16C15.45 16 15 16.45 15 17V20C15 20.55 15.45 21 16 21H19C19.55 21 20 20.55 20 20V17C20 16.45 19.55 16 19 16ZM19 6V7H11V6C11 5.45 10.55 5 10 5C9.45 5 9 5.45 9 6V7H8C6.89 7 6.01 7.9 6.01 9L6 23C6 24.1 6.89 25 8 25H22C23.1 25 24 24.1 24 23V9C24 7.9 23.1 7 22 7H21V6C21 5.45 20.55 5 20 5C19.45 5 19 5.45 19 6ZM21 23H9C8.45 23 8 22.55 8 22V12H22V22C22 22.55 21.55 23 21 23Z"
                  fill="#2B3A58"
                />
              </svg>
            </div>
            <h2 className="text-[#2B3A58] font-bold text-xs">Date</h2>
          </div>
          <DateSelect />
        </div>

        <div className="allInputs my-4 flex flex-col items-center gap-5">
          <input
            className="outline-none font-normal text-base border border-[#C3CAD9] rounded-[15px] px-5 py-2 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="outline-none font-normal text-base border border-[#C3CAD9] rounded-[15px] px-5 py-2 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="outline-none font-normal text-base border border-[#C3CAD9] rounded-[15px] px-5 py-2 w-full"
            type="text"
            placeholder="First name"
          />
        </div>

        <div className="btns flex items-center justify-center gap-5">
          <Btn text="Save" padding="11px 58px" background="#F0B815" />
          <div onClick={onClose} className="">
            <Btn text="Cancel" padding="11px 58px" background="#C3CAD9" />
          </div>
        </div>
      </div>
    </div>
  );
}
