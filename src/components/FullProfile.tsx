import React from 'react'

type Props = {
  src: string
  name: string
  email: string
}
export default function FullProfile({ src, name, email }: Props) {
  return (
    <div className='relative w-2/5 h-full max-w-[600px]'>
      <div className='max-w-[550px] rounded-xl h-full overflow-hidden'>
        <img
          src={src}
          alt='profile image'
          className='w-full h-full aspect-auto object-cover blur-md'
        />
      </div>
      <div className='absolute inset-0 m-auto flex flex-col justify-center items-center'>
        <img
          src={src}
          alt='profile image'
          className='block w-20 h-20 rounded-full border-[2px] border-white drop-shadow-lg'
        />
        <p className='font-bold text-2xl pt-4'>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}
