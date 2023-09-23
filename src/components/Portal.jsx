import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children, wrapperId = 'portal-mdpreview' }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(children, document.getElementById(wrapperId)) : null
}

export default Portal
