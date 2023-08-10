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
    bannerStyle = 'h-full'
    imgStyle = 'flex h-full object-cover'
  } else if (type === 'post') {
    bannerStyle = 'w-full'
    imgStyle = 'flex w-full object-cover'
  }

  return (
    <div className={`items-center ${bannerStyle} ${className}`}>
      <img src={src} className={`m-auto ${imgStyle}`} alt={alt} />
    </div>
  )
}
