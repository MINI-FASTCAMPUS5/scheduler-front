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

  const color = type === 'purple' ? 'main' : 'point'
  const deepColor = type === 'purple' ? 'hover' : 'rose-500'

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      ${sizeStyle} bg-${color} hover:bg-${deepColor} ${
        disabled ? `text-slate-300 opacity-60 hover:bg-${color} cursor-not-allowed` : 'text-white'
      }  rounded-[14px] transition-colors ease-in-out duration-200 
      ${className && className}`}
    >
      {text}
    </button>
  )
}
