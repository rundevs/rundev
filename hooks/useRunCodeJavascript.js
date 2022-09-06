/* eslint-disable no-new-func */
import { useEffect, useState } from 'react'

const useRunCodeJavascript = (code) => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const RunCodeWithFunction = (obj) => {
    try {
      setResult(Function(`"use strict"; ${obj}`)())
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    RunCodeWithFunction(code)
  }, [code])

  return { result, error }
}

export default useRunCodeJavascript
