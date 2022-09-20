/* eslint-disable no-new-func */
import { useEffect, useState } from 'react'

const useRunjs = (code) => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  /** @param {string} codeString */
  const RunCodeWithFunction = (codeString) => {
    try {
      setResult(Function(`"use strict"; ${codeString}`)())
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    RunCodeWithFunction(code)
  }, [code])

  return { result, error }
}

export default useRunjs

/**
 * @todo runjs
 * <pre id="log"></pre>
In js,

(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();
 *
 * */
