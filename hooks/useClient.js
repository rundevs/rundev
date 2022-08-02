import { useState, useEffect } from 'react'

function useClient() {
  const [mounted, setMounted] = useState(false)

  let cleanup = true

  useEffect(() => {
    cleanup && setMounted(true)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanup = false
    }
  }, [])

  return { mounted }
}

export default useClient
