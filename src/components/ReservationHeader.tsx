import React from "react";

export default function ReservationHeader() {
  return (
    <header>
      <div className="flex items-center justify-between pt-[29px]">
        <button
          style={{ boxShadow: "0px 2px 5px 0px #26334D08" }}
          className="border border-[#F5F6F7] font-black text-xs py-[10px] px-5 rounded-[20px] "
        >
          Today
        </button>

        <div className="value flex items-center gap-16">
          <div
            style={{ boxShadow: "0px 2px 5px 0px #26334D08" }}
            className="px-[15px] py-[15px] rounded-full w-[40px] border border-[#F5F6F7]"
          >
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.0732 0.672889C5.89882 0.49812 5.66208 0.399902 5.4152 0.399902C5.16831 0.399902 4.93157 0.49812 4.7572 0.672889L0.473195 4.95689C0.109195 5.32089 0.109195 5.90889 0.473195 6.27289L4.7572 10.5569C5.1212 10.9209 5.7092 10.9209 6.0732 10.5569C6.4372 10.1929 6.4372 9.60489 6.0732 9.24089L2.45186 5.61022L6.0732 1.98889C6.4372 1.62489 6.42786 1.02756 6.0732 0.672889Z"
                fill="#C3CAD9"
              />
            </svg>
          </div>

          <div className="font-bold text-xl leading-[20px]">
            <p>June</p>
          </div>

          <div
            style={{ boxShadow: "0px 2px 5px 0px #26334D08" }}
            className="px-[17px] py-[15px] rounded-full w-[40px] border border-[#F5F6F7]"
          >
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.473195 0.67408C0.109195 1.03808 0.109195 1.62608 0.473195 1.99008L4.09453 5.61141L0.473195 9.23275C0.109195 9.59675 0.109195 10.1847 0.473195 10.5487C0.837195 10.9127 1.4252 10.9127 1.7892 10.5487L6.0732 6.26475C6.4372 5.90075 6.4372 5.31275 6.0732 4.94875L1.7892 0.664747C1.43453 0.31008 0.837195 0.31008 0.473195 0.67408Z"
                fill="#C3CAD9"
              />
            </svg>
          </div>
        </div>


        <div className="">
          <button className="font-black text-xs leading-[20px] text-[#6B7A9966] py-[10px] pl-[20px] pr-[15px] border border-[#F5F6F7] rounded-l-[30px]">Year</button>
          <button className="font-black text-xs leading-[20px] text-[#6B7A9966] py-[10px] px-[15px] border border-[#F5F6F7]">Week</button>
          <button className="font-black text-xs leading-[20px] text-[#6B7A9966] py-[10px] px-[15px] border border-[#F5F6F7]">Month</button>
          <button className="font-black text-xs leading-[20px] text-[#6B7A9966] py-[10px] pl-[15px] pr-[20px] border border-[#F5F6F7]  rounded-r-[30px]  ">Day</button>


        </div>
      </div>
    </header>
  );
}
