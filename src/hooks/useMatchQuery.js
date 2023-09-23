import { useState, useEffect, useCallback } from 'react'

const isWindows = typeof window !== 'undefined'

/** @param {string} breakPoint */
const useMatchQuery = (breakPoint) => {
  const [matched, setMatched] = useState(false)

  const matchQuery = useCallback((query) => {
    query.matches ? setMatched(true) : setMatched(false)
  }, [])

  const mediaQuery = isWindows && window.matchMedia(breakPoint)

  let subscribe = true
  useEffect(() => {
    subscribe && matchQuery(mediaQuery)
    return () => {
      subscribe = false
    }
  }, [])

  useEffect(() => {
    if (subscribe) isWindows && mediaQuery.addEventListener('change', matchQuery)
    return () => {
      subscribe = false
      // mediaQuery.removeEventListener(matchQuery)
    }
  }, [mediaQuery])

  return matched
}

export default useMatchQuery
