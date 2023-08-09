import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactNode
  isActive?: boolean
  name: string
  idx: number
  url: string
  onClick?: (name: string) => void
}
export default function SidebarMenu({ name, children, isActive = false, url, onClick }: Props) {
  const style = isActive ? 'bg-white text-main rounded-l-[20px]' : 'bg-main text-white'
  return (
    <div className='relative h-[60px] bg-white text-[18px] font-gmarket font-bold' onClick={() => onClick && onClick(name)}>
      <div className={`${isActive ? 'h-[70px]' : 'h-[70px]'} w-full text-right bg-main hover:text-[19px]`}>
        <div className='relative bounce-menu'>
          {isActive && <img className='absolute right-[-1px] z-40' src='/sbtn_ac.svg' />}
          <Link
            to={url}
            className={`absolute flex items-center w-[246px] h-[50px] right-0 top-[20px] z-50 ${style}`}
          >
            {children}
          </Link>
        </div>
      </div>
    </div>
  )
}
