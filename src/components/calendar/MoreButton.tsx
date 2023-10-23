interface MoreButtonProps {
  date: string
  count: number
  onClick?: (id: string) => void
}
export function MoreButton({ date, count, onClick }: MoreButtonProps) {
  return (
    <div className='absolute'>
      <button
        className={` moreBtn flex items-center leading-[1rem] border-[1px] bg-white border-main text-main px-1 font-bold rounded-[8px] ml-1 cursor-pointer
      transition-all ease-in-out hover:text-white hover:bg-main hover:border-main text-[0.6rem]
      `}
        onClick={() => onClick && onClick(date)}
      >
        <span className='moreBtn'>{`+ MORE ${count}`}</span>
      </button>
    </div>
  )
}
