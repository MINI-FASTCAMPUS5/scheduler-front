import React from 'react'

type Props = {
  date: string
  restItem: number
  onClick?: (id: string) => void
}
export default function MoreButton({ date, restItem, onClick }: Props) {
  return (
    <button
      className={`moreBtn flex items-center leading-[1rem] border-[1px] bg-white border-main text-main px-1 font-bold rounded-[8px] ml-1 cursor-pointer
      transition-all ease-in-out hover:text-white hover:bg-main hover:border-main text-[0.6rem]
      `}
      onClick={() => onClick && onClick(date)}
    >
      <span className='moreBtn'>{`+ MORE ${restItem}`}</span>
      {/* <div className='ml-2 w-full border-2 border-main bg-transparent uppercase font-bold'></div> */}
    </button>
  )
}
