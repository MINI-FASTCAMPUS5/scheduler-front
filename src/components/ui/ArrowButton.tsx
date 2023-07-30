import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export type DirectionType = 'left' | 'right'
type Props = {
  direction: DirectionType
  onClick?: (direction: 'left' | 'right') => void
  disabled?: boolean
}

export default function ArrowBotton({ direction, onClick, disabled = true }: Props) {
  const ICON =
    direction === 'left' ? (
      <FaChevronLeft className={`w-6 h-6 ${disabled ? 'text-slate-300' : 'text-black'} `} />
    ) : (
      <FaChevronRight className={`w-6 h-6 ${disabled ? 'text-slate-300' : 'text-black'}`} />
    )
  return (
    <button
      className='bg-slate-500 p-2 rounded-[0.5rem]'
      disabled={disabled}
      onClick={() => onClick && onClick(direction)}
    >
      {ICON}
    </button>
  )
}
