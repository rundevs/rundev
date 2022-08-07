import { useState, useEffect } from 'react'

function useClient() {
  const [mounted, setMounted] = useState(false)

  let subscribe = true
  useEffect(() => {
    subscribe && setMounted(true)
    return () => {
      subscribe = false
    }
  }, [])

  return { mounted }
}

export default useClient
