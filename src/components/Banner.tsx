import React from 'react'

type Props = {
  src: string
  alt: string
  type: 'top' | 'side' | 'post'
  className?: string
}
export default function Banner({ src, type = 'top', className, alt }: Props) {
  let bannerStyle = ''
  if (type === 'top') bannerStyle = 'w-full'
  else if (type === 'side') bannerStyle = 'w-[200px]'
  else if (type === 'post') bannerStyle = 'w-full'

  return (
    <div className={`items-center ${bannerStyle} ${className}`}>
      <img src={src} className='m-auto' alt={alt} />
    </div>
  )
}
