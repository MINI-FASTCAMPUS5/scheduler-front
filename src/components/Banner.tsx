import React from 'react'

type Props = {
  src: string
  alt: string
  type: 'top' | 'side' | 'post'
  className?: string
}
export default function Banner({ src, type = 'top', className, alt }: Props) {
  let bannerStyle = ''
  let imgStyle = ''
  if (type === 'top') {
    bannerStyle = 'w-full'
    imgStyle = 'w-full aspect-auto object-cover'
  } else if (type === 'side') {
    bannerStyle = 'w-[200px]'
    imgStyle = 'w-full aspect-auto object-cover'
  } else if (type === 'post') {
    bannerStyle = 'w-full'
    imgStyle = 'w-full max-h-[318px] aspect-square object-contain'
  }

  return (
    <div className={`items-center ${bannerStyle} ${className}`}>
      <img src={src} className={`m-auto ${imgStyle}`} alt={alt} />
    </div>
  )
}
