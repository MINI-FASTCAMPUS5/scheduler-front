import { useEffect, useState } from 'react'

export default function useResize(selector?: string) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  function resize() {
    if (selector) {
      const target = document.querySelector(selector) as HTMLElement
      setWidth(target ? target.clientWidth : 0)
      setHeight(target ? target.clientHeight : 0)
      return
    }
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return { width, height, resize, setWidth, setHeight }
}
