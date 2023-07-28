import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export type ToggleType = 'left' | 'right'
type Props = {
  direction: ToggleType
  onClick?: (direction: 'left' | 'right') => void
  disabled?: boolean
}

export default function ToggleButton({ direction, onClick, disabled = true }: Props) {
  const ICON =
    direction === 'left' ? (
      <FaChevronLeft className={`w-6 h-6 ${disabled ? 'text-slate-300' : 'text-black'}`} />
    ) : (
      <FaChevronRight className={`w-6 h-6 ${disabled ? 'text-slate-300' : 'text-black'}`} />
    )
  return (
    <button disabled={disabled} onClick={() => onClick && onClick(direction)}>
      {ICON}
    </button>
  )
}
