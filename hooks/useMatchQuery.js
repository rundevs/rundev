import { useState, useEffect, useCallback } from 'react'

const useMatchQuery = () => {
  const [matched, setMatched] = useState(false)

  const matchQuery = useCallback((query) => {
    const gridElement = document.getElementById('grid')
    if (query.matches) {
      setMatched(true)
      gridElement.style.gridTemplateColumns = '1fr 5px 1fr'
      gridElement.style.gridTemplateRows = '1fr'
    } else {
      setMatched(false)
      gridElement.style.gridTemplateRows = '1fr 5px 1fr'
      gridElement.style.gridTemplateColumns = '1fr'
    }
  }, [])

  const mediaQuery = typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)')

  let subscribe = true
  useEffect(() => {
    subscribe && matchQuery(mediaQuery)
    return () => {
      subscribe = false
    }
  }, []);

  useEffect(() => {
    if (subscribe) {
      typeof window !== 'undefined' && mediaQuery.addEventListener('change', matchQuery)
    }
    return () => {
      subscribe = false
    }
  }, [mediaQuery])

  return { matched }
}

export default useMatchQuery
