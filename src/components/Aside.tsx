import React from "react";
import SelectOption from "./SelectOption";
import { NavLink } from "react-router-dom";

interface AsideProps{
  toggleAside:()=>void
}

export default function Aside({toggleAside}:AsideProps) {
  const getNavLinkClass: any = ({
    isActive,
  }: {
    isActive: boolean;
  }): string => {
    const base = " group transition-colors rounded-[8px]";
    const active = "bg-[#D5F2EB] text-[#018B67]";
    const inactive = " hover:text-[#018B67] text-[#464545] group";

    return `${base} ${isActive ? active : inactive}`;
  };

  return (
    <aside className="relative">
      <div onClick={toggleAside} className="arrow p-3 w-[35px] mx-auto rounded-[8px] bg-[#FFFFFF] border border-[#F6F6F6] absolute right-[-20px] top-[15px]">
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.1416 1.42513C6.4528 1.09911 6.4528 0.570532 6.1416 0.244514C5.8304 -0.0815045 5.32585 -0.0815045 5.01465 0.244514L0.233399 5.25344C-0.0777998 5.57946 -0.0777998 6.10804 0.233399 6.43406L5.01465 11.443C5.32585 11.769 5.8304 11.769 6.1416 11.443C6.4528 11.117 6.4528 10.5884 6.1416 10.2624L1.92383 5.84375L6.1416 1.42513Z"
            fill="black"
          />
        </svg>
      </div>

      <div className="min-w-[208px] w-full p-6 bg-[#FFFFFF] rounded-[20px]">
        <div className="info__user flex items-center gap-3 mb-6">
          <div className="user__ava">
            <img src="/svg/userAva.svg" alt="" />
          </div>
          <div className="user__info">
            <p className="font-normal text-[10px] leading-[12px] text-[#464545] uppercase">
              Manager
            </p>
            <h2 className="font-normal text-base leading-[143%]">
              Asanov Asan
            </h2>
          </div>
        </div>

        <div className="bg-[#F6F6F6] max-w-[208px] w-full mx-auto h-[2px]"></div>

        <div className="main mt-6">
          <p className="font-normal text-[10px] leading-[12px] text-[#464545] uppercase px-3">
            Main
          </p>

          <div className="pages mt-2 flex flex-col  gap-2">
            <NavLink to={"/"} className={getNavLinkClass}>
              <div className="flex items-center gap-3 px-3 py-[10px] w-full rounded-[8px] hover:bg-[#D5F2EB] hover:text-[#018B67]  ">
                <div className="">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      className="transition-colors group-hover:fill-[#018B67]"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.0013 0.231445C8.23992 0.231445 7.49308 0.440069 6.84193 0.834657L2.67526 3.35966C2.06254 3.73095 1.5559 4.25397 1.20429 4.87819C0.852676 5.50241 0.667957 6.20675 0.667969 6.92318V12.1665C0.667969 13.2716 1.10696 14.3314 1.88836 15.1128C2.66976 15.8942 3.72957 16.3332 4.83463 16.3332H13.168C14.273 16.3332 15.3328 15.8942 16.1142 15.1128C16.8956 14.3314 17.3346 13.2716 17.3346 12.1665V6.92235C17.3345 6.20608 17.1497 5.50176 16.7981 4.87774C16.4465 4.25372 15.9399 3.73087 15.3274 3.35966L11.1607 0.834664C10.5095 0.440076 9.76269 0.231445 9.0013 0.231445ZM7.70569 2.26003C8.09638 2.02328 8.54447 1.89811 9.0013 1.89811C9.45813 1.89811 9.90622 2.02328 10.2969 2.26003L14.4636 4.78503C14.8311 5.00776 15.1351 5.32147 15.346 5.69589C15.557 6.07025 15.6678 6.49266 15.668 6.92235V12.1665C15.668 12.8296 15.4046 13.4654 14.9357 13.9343C14.4669 14.4031 13.831 14.6665 13.168 14.6665H12.3346V12.1665C12.3346 11.2825 11.9834 10.4346 11.3583 9.80949C10.7332 9.18437 9.88535 8.83318 9.0013 8.83318C8.11725 8.83318 7.2694 9.18437 6.64428 9.80949C6.01916 10.4346 5.66797 11.2825 5.66797 12.1665V14.6665H4.83463C4.17159 14.6665 3.53571 14.4031 3.06687 13.9343C2.59803 13.4654 2.33464 12.8296 2.33464 12.1665V6.92318C2.33463 6.49332 2.44546 6.07069 2.65643 5.69616C2.8674 5.32163 3.17138 5.00782 3.53901 4.78504L7.70569 2.26003ZM10.1798 10.988C10.4924 11.3006 10.668 11.7245 10.668 12.1665V14.6665H7.33463V12.1665C7.33463 11.7245 7.51023 11.3006 7.82279 10.988C8.13535 10.6754 8.55927 10.4999 9.0013 10.4999C9.44333 10.4999 9.86725 10.6754 10.1798 10.988Z"
                    />
                  </svg>
                </div>

                <p className="font-normal text-sm">Dashboard</p>
              </div>
            </NavLink>

            <NavLink to={"/mypatients"} className={getNavLinkClass}>
              <div className="flex items-center gap-3 px-3 py-[10px] rounded-[8px] w-full ">
                <div className="">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      className="transition-colors group-hover:fill-[#018B67]"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.00065 0.5C5.89558 0.5 4.83577 0.938987 4.05437 1.72039C3.27297 2.50179 2.83398 3.5616 2.83398 4.66667C2.83398 5.77174 3.27297 6.83154 4.05437 7.61294C4.10934 7.66791 4.16568 7.72119 4.22333 7.77273C3.50956 8.09981 2.85246 8.55343 2.28661 9.11929C1.03636 10.3695 0.333984 12.0652 0.333984 13.8333V14.6667C0.333984 15.1269 0.70708 15.5 1.16732 15.5C1.62755 15.5 2.00065 15.1269 2.00065 14.6667V13.8333C2.00065 12.5073 2.52744 11.2355 3.46512 10.2978C4.4028 9.36012 5.67457 8.83333 7.00065 8.83333C8.32673 8.83333 9.5985 9.36012 10.5362 10.2978C11.4739 11.2355 12.0007 12.5073 12.0007 13.8333V14.6667C12.0007 15.1269 12.3737 15.5 12.834 15.5C13.2942 15.5 13.6673 15.1269 13.6673 14.6667V13.8333C13.6673 12.0652 12.9649 10.3695 11.7147 9.11929C11.1488 8.55343 10.4917 8.09981 9.77798 7.77273C9.83562 7.72119 9.89196 7.66791 9.94693 7.61294C10.7283 6.83154 11.1673 5.77174 11.1673 4.66667C11.1673 3.5616 10.7283 2.50179 9.94693 1.72039C9.16553 0.938987 8.10572 0.5 7.00065 0.5ZM5.23288 2.8989C5.70172 2.43006 6.33761 2.16667 7.00065 2.16667C7.66369 2.16667 8.29958 2.43006 8.76842 2.8989C9.23726 3.36774 9.50065 4.00363 9.50065 4.66667C9.50065 5.32971 9.23726 5.96559 8.76842 6.43443C8.29958 6.90327 7.66369 7.16667 7.00065 7.16667C6.33761 7.16667 5.70172 6.90327 5.23288 6.43443C4.76404 5.96559 4.50065 5.32971 4.50065 4.66667C4.50065 4.00363 4.76404 3.36774 5.23288 2.8989Z"
                    />
                  </svg>
                </div>

                <p className="font-normal text-sm">My patients</p>
              </div>
            </NavLink>

            <NavLink to={"/reservation"} className={getNavLinkClass}>
              <div className="flex items-center gap-3  px-3 py-[10px] rounded-[8px] w-full">
                <div className="">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-colors group-hover:fill-[#018B67]"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66601 1.66683C6.66601 1.20659 6.29292 0.833496 5.83268 0.833496C5.37244 0.833496 4.99935 1.20659 4.99935 1.66683V2.50016H4.16602C3.50297 2.50016 2.86709 2.76355 2.39825 3.2324C1.92941 3.70124 1.66602 4.33712 1.66602 5.00016V15.8335C1.66602 16.4965 1.92941 17.1324 2.39825 17.6013C2.86709 18.0701 3.50297 18.3335 4.16602 18.3335H15.8327C16.4957 18.3335 17.1316 18.0701 17.6004 17.6013C18.0693 17.1324 18.3327 16.4965 18.3327 15.8335V5.00016C18.3327 4.33712 18.0693 3.70124 17.6004 3.2324C17.1316 2.76355 16.4957 2.50016 15.8327 2.50016H15.416C14.9558 2.50016 14.5827 2.87326 14.5827 3.3335C14.5827 3.79373 14.9558 4.16683 15.416 4.16683H15.8327C16.0537 4.16683 16.2657 4.25463 16.4219 4.41091C16.5782 4.56719 16.666 4.77915 16.666 5.00016V7.50016H3.33268V5.00016C3.33268 4.77915 3.42048 4.56719 3.57676 4.41091C3.73304 4.25463 3.945 4.16683 4.16602 4.16683H4.99935V5.00016C4.99935 5.4604 5.37244 5.8335 5.83268 5.8335C6.29292 5.8335 6.66601 5.4604 6.66601 5.00016V1.66683ZM3.57676 16.4228C3.42048 16.2665 3.33268 16.0545 3.33268 15.8335V9.16683H16.666V15.8335C16.666 16.0545 16.5782 16.2665 16.4219 16.4228C16.2657 16.579 16.0537 16.6668 15.8327 16.6668H4.16602C3.945 16.6668 3.73304 16.579 3.57676 16.4228Z"
                      fill="currentColor"
                    />
                    <path
                      className="transition-colors group-hover:fill-[#018B67]"
                      d="M13.3327 1.66683C13.3327 1.20659 12.9596 0.833496 12.4993 0.833496C12.0391 0.833496 11.666 1.20659 11.666 1.66683V2.50016H8.74935C8.28911 2.50016 7.91601 2.87326 7.91601 3.3335C7.91601 3.79373 8.28911 4.16683 8.74935 4.16683H11.666V5.00016C11.666 5.4604 12.0391 5.8335 12.4993 5.8335C12.9596 5.8335 13.3327 5.4604 13.3327 5.00016V1.66683Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <p className="font-normal text-sm">Reservation</p>
              </div>
            </NavLink>

            <NavLink to={"/income"} className={getNavLinkClass}>
              <SelectOption />
            </NavLink>
          </div>
        </div>

        <div className="bg-[#F6F6F6] max-w-[208px] w-full mx-auto h-[2px] mt-6"></div>

        <div className="additionally mt-6 flex flex-col gap-2 ">
          <NavLink to={"/help"} className={getNavLinkClass}>
            <div className="flex items-center gap-3 px-3 py-[10px] rounded-[8px] w-full group  ">
              <div className="">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33398 7.50016C8.33398 7.01102 8.51643 6.69819 8.75595 6.49496C9.01358 6.27636 9.38679 6.146 9.79232 6.146C10.1979 6.146 10.5711 6.27636 10.8287 6.49496C11.0682 6.69819 11.2507 7.01102 11.2507 7.50016C11.2507 7.86447 11.1648 8.06672 11.0651 8.2163C10.9487 8.39081 10.7957 8.52842 10.5368 8.76114L10.4848 8.80784C10.2185 9.04754 9.86812 9.37158 9.60096 9.84357C9.32563 10.33 9.16732 10.9177 9.16732 11.6668C9.16732 12.1271 9.54041 12.5002 10.0007 12.5002C10.4609 12.5002 10.834 12.1271 10.834 11.6668C10.834 11.1659 10.9361 10.8683 11.0514 10.6646C11.1748 10.4465 11.3453 10.2757 11.5998 10.0467C11.6227 10.026 11.6469 10.0045 11.672 9.98207C11.8998 9.77908 12.2117 9.50103 12.4518 9.1408C12.7427 8.70444 12.9173 8.17752 12.9173 7.50016C12.9173 6.53097 12.5268 5.75005 11.907 5.22411C11.3052 4.71355 10.5326 4.47933 9.79232 4.47933C9.05202 4.47933 8.27939 4.71355 7.67765 5.22411C7.05779 5.75005 6.66732 6.53097 6.66732 7.50016C6.66732 7.9604 7.04041 8.3335 7.50065 8.3335C7.96089 8.3335 8.33398 7.9604 8.33398 7.50016Z"
                    fill="currentColor"
                    className="transition-colors group-hover:fill-[#018B67]"
                  />
                  <path
                    d="M10.6256 15.5599C10.9352 15.2194 10.9101 14.6923 10.5696 14.3827C10.229 14.0731 9.70198 14.0982 9.39238 14.4388L9.38405 14.4479C9.07445 14.7885 9.09953 15.3155 9.44007 15.6251C9.78061 15.9347 10.3077 15.9096 10.6173 15.5691L10.6256 15.5599Z"
                    fill="currentColor"
                    className="transition-colors group-hover:fill-[#018B67]"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0007 0.833496C4.93791 0.833496 0.833984 4.93743 0.833984 10.0002C0.833984 15.0629 4.93791 19.1668 10.0007 19.1668C15.0634 19.1668 19.1673 15.0629 19.1673 10.0002C19.1673 4.93743 15.0634 0.833496 10.0007 0.833496ZM2.50065 10.0002C2.50065 5.8579 5.85839 2.50016 10.0007 2.50016C14.1429 2.50016 17.5007 5.8579 17.5007 10.0002C17.5007 14.1424 14.1429 17.5002 10.0007 17.5002C5.85839 17.5002 2.50065 14.1424 2.50065 10.0002Z"
                    fill="currentColor"
                    className="transition-colors group-hover:fill-[#018B67]"
                  />
                </svg>
              </div>

              <p className=" font-normal text-sm ">Help</p>
            </div>
          </NavLink>

          <div className="flex items-center gap-3 px-3 py-[10px] rounded-[8px] hover:bg-[#D5F2EB] ">
            <div className="">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83398 1.6665C5.17094 1.6665 4.53506 1.9299 4.06622 2.39874C3.59738 2.86758 3.33398 3.50346 3.33398 4.1665V15.8332C3.33398 16.4962 3.59738 17.1321 4.06622 17.6009C4.53506 18.0698 5.17094 18.3332 5.83398 18.3332H14.1673C14.8304 18.3332 15.4662 18.0698 15.9351 17.6009C16.4039 17.1321 16.6673 16.4962 16.6673 15.8332V14.9998C16.6673 14.5396 16.2942 14.1665 15.834 14.1665C15.3737 14.1665 15.0007 14.5396 15.0007 14.9998V15.8332C15.0007 16.0542 14.9129 16.2661 14.7566 16.4224C14.6003 16.5787 14.3883 16.6665 14.1673 16.6665H5.83398C5.61297 16.6665 5.40101 16.5787 5.24473 16.4224C5.08845 16.2661 5.00065 16.0542 5.00065 15.8332V4.1665C5.00065 3.94549 5.08845 3.73353 5.24473 3.57725C5.40101 3.42097 5.61297 3.33317 5.83398 3.33317H14.1673C14.3883 3.33317 14.6003 3.42097 14.7566 3.57725C14.9129 3.73353 15.0007 3.94549 15.0007 4.1665V4.99984C15.0007 5.46007 15.3737 5.83317 15.834 5.83317C16.2942 5.83317 16.6673 5.46007 16.6673 4.99984V4.1665C16.6673 3.50346 16.4039 2.86758 15.9351 2.39874C15.4662 1.9299 14.8304 1.6665 14.1673 1.6665H5.83398Z"
                  fill="#D55F5A"
                />
                <path
                  d="M13.9232 6.91058C13.5978 6.58514 13.0702 6.58514 12.7447 6.91058C12.4193 7.23602 12.4193 7.76366 12.7447 8.08909L13.8221 9.1665H10.0007C9.54041 9.1665 9.16732 9.5396 9.16732 9.99984C9.16732 10.4601 9.54041 10.8332 10.0007 10.8332H13.8221L12.7447 11.9106C12.4193 12.236 12.4193 12.7637 12.7447 13.0891C13.0702 13.4145 13.5978 13.4145 13.9232 13.0891L16.4232 10.5891C16.7487 10.2637 16.7487 9.73602 16.4232 9.41058L13.9232 6.91058Z"
                  fill="#D55F5A"
                />
              </svg>
            </div>

            <p className="text-[#D55F5A] text-sm font-normal">
              Log out Account
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
