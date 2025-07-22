import React from 'react'

export default function ClientCard() {
  return (
    <div className='bg-[#FFFFFF] max-w-[260px] w-full rounded-[14px] p-4'>

        <div className="diagnos">
        <p className='text-[#2B3A58] text-base font-normal leading-[143%] '>Diagnosis - Caries</p>

        </div>

        <div className="time">
            <p className='font-bold text-xl '>08:00 </p>
        </div>

        <div className="status">
           <p className=''> Status</p>

        </div>
    </div>
  )
}
