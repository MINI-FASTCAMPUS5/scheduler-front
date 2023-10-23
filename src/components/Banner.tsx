interface BannerProps {
  src: string
  alt: string
  type?: 'top' | 'side' | 'post'
  className?: string
}
export function Banner({ src, type = 'top', className, alt }: BannerProps) {
  let imgStyle = 'flex h-full object-cover'
  if (type === 'top') imgStyle += ' aspect-auto'

  return (
    <div className={`items-center w-full ${className}`}>
      <img src={src} className={`m-auto ${imgStyle}`} alt={alt} />
    </div>
  )
}
