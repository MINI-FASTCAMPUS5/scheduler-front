import React from 'react'
import { FaChevronLeft, FaChevronRight, FaMinus } from 'react-icons/fa'

export type DirectionType = 'left' | 'right'
type Props = {
  direction: DirectionType
  onClick?: (direction: 'left' | 'right') => void
  disabled?: boolean
}

export default function ArrowBotton({ direction, onClick, disabled = true }: Props) {
  const iconStyle = 'text-[16px] text-white'
  let ICON =
    direction === 'left' ? (
      <FaChevronLeft className={iconStyle} />
    ) : (
      <FaChevronRight className={iconStyle} />
    )
  disabled && (ICON = <FaMinus className={iconStyle} />)
  return (
    <button
      className='disabled:bg-[#411b92] h-[32px] w-[32px] bg-main p-2 rounded-[0.8rem] mt-auto hover:bg-[#411b92] transition-colors ease-in-out duration-200'
      disabled={disabled}
      onClick={() => onClick && onClick(direction)}
    >
      {ICON}
    </button>
  )
}
