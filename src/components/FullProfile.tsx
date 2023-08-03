import React from 'react'

type Props = {
  src: string
  name: string
  email: string
}
export default function FullProfile({ src, name, email }: Props) {
  return (
    <div className='relative w-2/5 max-w-[600px] h-full p-12'>
      <div className='h-full max-w-[550px] rounded-xl overflow-hidden'>
        <img
          src={src}
          alt='profile image'
          className='w-full h-full aspect-auto object-cover blur-md'
        />
      </div>
      <div className='absolute inset-0 m-auto flex flex-col justify-center items-center'>
        <img src={src} alt='profile image' className=' w-20 h-20 rounded-full' />
        <p className='font-bold text-2xl'>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}
