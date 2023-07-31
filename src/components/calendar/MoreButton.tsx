import React from 'react'

type Props = {
  date: string
  restItem: number
  onClick?: (id: string) => void
}
export default function MoreButton({ date, restItem, onClick }: Props) {
  return (
    <button
      className={`flex items-center leading-[1rem] border-2 border-[#6C27FF] px-2 font-bold cursor-pointer
      transition-all ease-in-out hover:text-white hover:bg-[#6C27FF] hover:border-[#6C27FF]
      `}
      onClick={() => onClick && onClick(date)}
    >
      <span>{`+ more ${restItem}`}</span>
      {/* <div className='ml-2 w-full border-2 border-[#6C27FF] bg-transparent uppercase font-bold'></div> */}
    </button>
  )
}
