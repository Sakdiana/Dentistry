import React from 'react'

interface BtnProps{
    text:string,
    padding:string,
    background:string,
}

export default function Btn({text,padding,background}:BtnProps) {
  return (
    <button className=' rounded-[8px] border-none text-white font-normal text-sm leading-[20px]' style={{ padding,background}}>{text}</button>
  )
}
