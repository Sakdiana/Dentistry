import React from 'react'

interface BtnProps{
    text:string,
    padding:string
}

export default function Btn({text,padding}:BtnProps) {
  return (
    <button className='bg-[#F0B815] rounded-[8px] border-none text-white font-normal text-sm leading-[20px]' style={{ padding }}>{text}</button>
  )
}
