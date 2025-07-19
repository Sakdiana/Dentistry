import React, { useState } from "react";

export default function Login() {
    const [eye,setEye]=useState(false)

   
  return (
    <div className="relative">
      <div className="absolute z-[-2] ">
        <img
          className="max-w-[567px] w-full object-contain max-[1200px]:w-[60%]"
          src="/svg/yellowBg.svg"
          alt=""
        />
      </div>
      <div className="container min-h-screen flex items-center justify-center">
        <div className="max-w-[686px] w-full mx-auto py-16 border border-2 border-[#018B67] rounded-[8px] text-center max-[600px]:px-12 max-[400px]:px-6">
          <h2 className="font-bold text-[32px] text-[#018B67] max-[405px]:text-xl">
            Login to Account
          </h2>

          <div className="flex flex-col gap-5 items-center max-w-[426px] w-full mx-auto mt-16 ">
            <input
              className="outline-none font-normal border border-[#018B67] rounded-[8px] text-base px-4 py-3 w-full text-[#3C2F2F80]"
              type="text"
              placeholder="Phone number"
            />

            <div className="w-full">
              <div className="password flex items-center justify-between border border-[#018B67] rounded-[8px] px-4 py-3 w-full">
                <input
                  className="outline-none w-full font-normal  text-base  text-[#3C2F2F80] max-[390px]:w-[50%]"
                  type= {eye?"text":"password"}
                  placeholder="Password"

                 
                />
                <div  onClick={() => setEye(prev => !prev)} className="w-[20px]">

                  <img className="w-[20px]" src={eye? "/svg/openEye.svg" :"/svg/closedEye.svg"} alt="" />
                </div>
              </div>
              <p className="font-normal mt-2 text-[#464545] font-normal leading-[20px] tracking-[-2%] text-sm text-end  ">
                Forget Password?
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-normal text-sm leading-[22px] text-[#3C2F2F80] ">
              Don’t have an account?
            </h3>
            <p className="text-[#F0B815] text-sm font-bold leading-[160%] mt-1 ">
              Create Account
            </p>
          </div>
        </div>

      
      </div>

        <div className="absolute right-0 bottom-0 z-[-10] max-[1200px]:right-[-160px]">
          <img
            className="max-w-[436px] w-full max-[1200px]:w-[60%] object-contain"
            src="/svg/greenBg.svg"
            alt=""
          />
        </div>
    </div>
  );
}
