import React from 'react'

type Props = {
  src: string
  name: string
  email: string
}
export default function FullProfile({ src, name, email }: Props) {
  return (
    <div className='relative h-full rounded-xl'>
      <div className='h-full blur-md'>
        <img src={src} alt='profile image' className='w-full h-full aspect-auto object-fill' />
      </div>
      <div className='absolute inset-0 m-auto flex flex-col justify-center items-center'>
        <img src={src} alt='profile image' className=' w-20 h-20 rounded-full' />
        <p className='font-bold text-2xl'>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}
