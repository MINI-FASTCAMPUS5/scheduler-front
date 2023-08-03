import { useEffect } from 'react'
// mouseenter, mouseleave

export default function useHover(start: boolean) {
  function addNoHover(e: Event) {
    const element = e.target as HTMLElement
    element.closest('.cell')?.classList.add('no-cell-hover')
  }
  function removeNoHover(e: Event) {
    const element = e.target as HTMLElement
    element.closest('.cell')?.classList.remove('no-cell-hover')
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!start) return
    document.querySelectorAll('.schedule-cell').forEach((el) => {
      el.addEventListener('mouseenter', addNoHover)
      el.addEventListener('mouseleave', removeNoHover)
    })

    return () => {
      document.querySelectorAll('.schedule-cell').forEach((el) => {
        el.removeEventListener('mouseenter', addNoHover)
        el.removeEventListener('mouseleave', removeNoHover)
      })
    }
  }, [start])

  return null
}
