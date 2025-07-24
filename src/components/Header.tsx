import React from "react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="bg-white py-5 px-6 rounded-3xl flex items-center justify-between gap-4 max-[510px]:flex-col">
          <Link to={"/"}>
            <div className="logo max-[470px]:w-20">
              <img src="/svg/logo.svg" alt="" />
            </div>
          </Link>
          <div className="max-w-[500px] w-full flex items-center justify-between gap-2 ">
            <SearchInput />

            <img
              className="h-8 hidden max-[920px]:block"
              src="/svg/menu.png"
              alt=""
            />
          </div>

          <div className="notification__user flex items-center gap-7 max-[920px]:hidden ">
            <div className="notification bg-[#EBEBEB66] p-2 rounded-full">
              <svg
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.84968 2.05991C10.0364 1.5983 10.3568 1.20298 10.7697 0.924622C11.1826 0.646267 11.6692 0.497559 12.1672 0.497559C12.6651 0.497559 13.1518 0.646267 13.5647 0.924622C13.9775 1.20298 14.2979 1.5983 14.4847 2.05991C16.3331 2.56826 17.9636 3.66935 19.1256 5.19407C20.2877 6.7188 20.9171 8.58283 20.9172 10.4999V16.3712L23.2072 19.8062C23.3328 19.9944 23.4049 20.2132 23.4159 20.4393C23.4269 20.6653 23.3763 20.8901 23.2695 21.0896C23.1628 21.2891 23.0038 21.456 22.8097 21.5722C22.6156 21.6885 22.3935 21.7499 22.1672 21.7499H16.4984C16.3479 22.7913 15.8273 23.7436 15.0318 24.4323C14.2364 25.1211 13.2194 25.5002 12.1672 25.5002C11.115 25.5002 10.098 25.1211 9.30255 24.4323C8.5071 23.7436 7.98643 22.7913 7.83593 21.7499H2.16718C1.94088 21.7499 1.71881 21.6885 1.52467 21.5722C1.33053 21.456 1.1716 21.2891 1.06484 21.0896C0.958075 20.8901 0.907485 20.6653 0.918464 20.4393C0.929444 20.2132 1.00158 19.9944 1.12718 19.8062L3.41718 16.3712V10.4999C3.41718 6.4699 6.14218 3.0749 9.84968 2.05991ZM10.3997 21.7499C10.5288 22.1157 10.7682 22.4325 11.0848 22.6565C11.4015 22.8806 11.7799 23.0009 12.1678 23.0009C12.5557 23.0009 12.9341 22.8806 13.2508 22.6565C13.5674 22.4325 13.8068 22.1157 13.9359 21.7499H10.3984H10.3997ZM12.1672 4.24991C10.5096 4.24991 8.91986 4.90839 7.74776 6.08049C6.57566 7.25259 5.91718 8.8423 5.91718 10.4999V16.7499C5.91723 16.9968 5.84416 17.2382 5.70718 17.4437L4.50343 19.2499H19.8297L18.6259 17.4437C18.4894 17.2381 18.4168 16.9967 18.4172 16.7499V10.4999C18.4172 8.8423 17.7587 7.25259 16.5866 6.08049C15.4145 4.90839 13.8248 4.24991 12.1672 4.24991Z"
                  fill="#898A8D"
                />
              </svg>
            </div>

            <div className="user flex items-center gap-3">
              <div className="user__img">
                <img src="/svg/userAva.svg" alt="" />
              </div>

              <div className="user__text">
                <p className="font-normal font-[10px] uppercase text-[#757575]">
                  Doctor
                </p>
                <h2 className="font-normal font-base ">Asanov Asan</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
