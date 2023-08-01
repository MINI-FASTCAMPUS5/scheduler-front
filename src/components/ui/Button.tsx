import React from 'react'

type Props = {
  text: string
  onClick?: () => void
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'red' | 'purple'
}
export default function Button({
  text,
  disabled = false,
  size = 'md',
  className,
  onClick,
  type = 'purple'
}: Props) {
  let sizeStyle = ''
  if (size === 'sm') sizeStyle = 'h-6 px-2'
  else if (size === 'md') sizeStyle = 'h-8 px-4'
  else if (size === 'lg') sizeStyle = 'h-10 px-6'

  const color = type === 'purple' ? '#6C27FF' : '#FF00A5'
  const deepColor = type === 'purple' ? '#511bc7' : '#b00d77'

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${disabled ? 'text-slate-300' : 'text-white'} 
      ${sizeStyle} bg-[${color}] hover:bg-[${deepColor}] rounded-md transition-colors ease-in-out duration-200 
      ${className && className}`}
    >
      {text}
    </button>
  )
}
