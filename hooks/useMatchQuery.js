import { useState, useEffect, useCallback } from 'react'

let isWindows = typeof window !== 'undefined'
let isDoc = typeof document !== 'undefined'

const useMatchQuery = () => {
  const [matched, setMatched] = useState(false)

  const matchQuery = useCallback((query) => {
    const gridElement = isDoc && document.getElementById('grid')
    if (gridElement) {
      if (query.matches) {
        setMatched(true)
        gridElement.style.gridTemplateColumns = '1fr 5px 1fr'
        gridElement.style.gridTemplateRows = '1fr'
      } else {
        setMatched(false)
        gridElement.style.gridTemplateRows = '1fr 5px 1fr'
        gridElement.style.gridTemplateColumns = '1fr'
      }
    }
  }, [])

  const mediaQuery = isWindows && window.matchMedia('(min-width: 640px)')

  let subscribe = true
  useEffect(() => {
    subscribe && matchQuery(mediaQuery)
    return () => {
      subscribe = false
    }
  }, []);

  useEffect(() => {
    if (subscribe) {
      isWindows && mediaQuery.addEventListener('change', matchQuery)
    }
    return () => {
      subscribe = false
    }
  }, [mediaQuery])

  return { matched }
}

export default useMatchQuery
