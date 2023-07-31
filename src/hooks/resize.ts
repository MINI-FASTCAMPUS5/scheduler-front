import { useEffect, useState } from 'react'

export default function useResize(selector: string) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  function resize() {
    const target = document.querySelector(selector) as HTMLElement
    setWidth(target.clientWidth)
    setHeight(target.clientHeight)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return { width, height, resize, setWidth, setHeight }
}
