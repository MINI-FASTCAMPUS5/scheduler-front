import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  children?: React.ReactNode

  onClose: () => void
}
export default function CalendarModal({ onClose, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    setTimeout(() => setIsOpen(true), 200)
  }, [])
  return (
    <section
      className={`fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full
      ${isOpen ? 'opacity-100' : 'opacity-0'}
      bg-[rgba(0,0,0,0.4)]
       z-[999] backdrop-blur-[2px] transition-all duration-200 ease-in-out
        `}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className='bg-white w-4/5 f-full max-w-[640px] max-h-[740px] min-h-[640px] rounded-2xl'>
        <div style={{ position: 'relative' }}>
          {children}
          <button className='absolute top-3 right-3 p-2 font-bold' onClick={() => onClose()}>
            <div
              className={`flex justify-center items-center w-7 h-7 bg-point text-white rounded-[0.6rem]
          transtion-all duration-200 ease-in-out hover:bg-wait hover:text-white
          `}
            >
              <CgClose className='stroke-1' />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
