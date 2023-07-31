import React from 'react'

type Props = {
  text: string
  onClick?: () => void
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  className?: string
}
export default function Button({
  text,
  disabled = false,
  size = 'medium',
  className,
  onClick
}: Props) {
  let sizeStyle = ''
  if (size === 'small') sizeStyle = 'h-6 px-2'
  else if (size === 'medium') sizeStyle = 'h-8 px-4'
  else if (size === 'large') sizeStyle = 'h-10 px-6'

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${disabled ? 'text-slate-300' : 'text-white'} 
      ${sizeStyle} bg-[#6C27FF] rounded-md ${
        className && className
      } hover:bg-[#411b92] transition-colors ease-in-out duration-200`}
    >
      {text}
    </button>
  )
}
