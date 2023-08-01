import React from 'react'

type Props = {
  children: React.ReactNode
  isActive?: boolean
  name: string
  idx: number
  onClick?: (name: string) => void
}
export default function SidebarMenu({ name, children, isActive = false, onClick }: Props) {
  const style = isActive ? 'bg-white text-[#6C27FF] rounded-l-[20px]' : 'bg-[#6C27FF] text-white'
  return (
    <div className='relative h-[70px] bg-white font-bold' onClick={() => onClick && onClick(name)}>
      <div className={`${isActive ? 'h-[70px]' : 'h-[70px]'} w-full text-right bg-[#6C27FF]`}>
        <div className='relative'>
          {isActive && <img className='absolute right-0 z-40' src='/sbtn_ac.svg' />}
          <button className={`absolute w-[240px] h-[50px] right-0 top-[20px] z-50 ${style}`}>
            {children}
          </button>
        </div>
      </div>
    </div>
  )
}
