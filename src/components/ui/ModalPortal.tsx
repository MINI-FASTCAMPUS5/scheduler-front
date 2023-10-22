import reactDom from 'react-dom'

interface ModalPortalProps {
  children: React.ReactNode
}
export function ModalPortal({ children }: ModalPortalProps) {
  if (typeof window === 'undefined') {
    return null
  }

  const node = document.getElementById('portal') as Element
  return reactDom.createPortal(children, node)
}
