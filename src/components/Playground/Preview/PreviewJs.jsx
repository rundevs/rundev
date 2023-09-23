/* eslint-disable no-new-func */
import useDoc from 'hooks/useDoc'
import React, { useEffect, useState } from 'react'

const PreviewJs = () => {
  const { doc } = useDoc()
  const [result, setResult] = useState(null)
  const [strjs, setStrjs] = useState(null)
  const [error, setError] = useState(null)

  /** @param {string} codeString */
  const RunCodeWithFunction = (codeString) => {
    try {
      const runjs = new Function(`"use strict"; ${codeString}`)
      runjs()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    RunCodeWithFunction(doc)
  }, [doc])

  useEffect(() => {
    (function () {
      const old = console.log
      const logger = document.getElementById('log')
      console.log = function () {
        if (typeof arguments[0] === 'object') {
          // logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[0], undefined, 2) : arguments[0]) + '<br />'
        } else {
          logger.innerHTML += arguments[0] + 'else' + '<br />'
        }

        // for (let i = 0; i < arguments.length; i++) {
        //   if (typeof arguments[i] === 'object') {
        //     logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />'
        //   } else {
        //     logger.innerHTML += arguments[i] + '<br />'
        //   }
        // }
      }
    })()
    return () => {
    }
  }, [doc])

  console.log(doc)

  return (
    <div className='h-full w-full overflow-y-auto overflow-x-hidden'>
      <pre id='log' />
    </div>
  )
}

export default PreviewJs
