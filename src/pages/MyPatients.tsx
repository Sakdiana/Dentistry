import React from "react";
import SearchInput from "../components/SearchInput";

export default function MyPatients() {
  return (
    <div className="">
      <SearchInput />

      <table className="w-full mt-8 bg-[#FFFFFF] px-3 py-4 text-start max-w-[1011px]">
        <tr className="border border-[#9090901A]">
          <th className="font-bold text-sm leding-[-2px] text-[#2B3A58] text-start px-2 py-4">Name</th>
          <th className="font-bold text-sm leding-[-2px] text-[#2B3A58] text-start px-2 py-4">Number</th>
          <th className="font-bold text-sm leding-[-2px] text-[#2B3A58] text-start px-2 py-4">Address</th>
          <th className="font-bold text-sm leding-[-2px] text-[#2B3A58] text-start px-2 py-4">Address</th>
          <th className="font-bold text-sm leding-[-2px] text-[#2B3A58] text-start px-2 py-4">Email address</th>
          <th className="font-bold text-sm leding-[-2px] text-[#2B3A58] text-start px-2 py-4">Gender</th>
        </tr>

        <tr className="border border-[#9090901A]">
          <td className="font-normal text-sm leading-[20px] text-[#2B3A58] text-start px-2 py-4 flex items-center gap-2 "> <img className="w-6 h-6 rounded-full" src="/svg/woman.svg" alt="" /> Kristin Watson </td>
          <td className="font-normal text-sm leading-[20px] text-[#2B3A58] text-start px-2 py-4">+996223341515</td>
          <td className="font-normal text-sm leading-[20px] text-[#2B3A58] text-start px-2 py-4">Lenin 313</td>
          <td className="font-normal text-sm leading-[20px] text-[#2B3A58] text-start px-2 py-4">Lenin 313</td>
          <td className="font-normal text-sm leading-[20px] text-[#2B3A58] text-start px-2 py-4">michelle.rivera@example.com</td>
          <td className="font-normal text-sm leading-[20px] text-[#2B3A58] text-start px-2 py-4">Female</td>
        </tr>
      </table>
    </div>
  );
}
