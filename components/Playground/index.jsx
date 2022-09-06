import { INITIAL_STATE } from 'assets/constants'
import useMatchQuery from 'hooks/useMatchQuery'
import React, { useCallback, useEffect, useState } from 'react'
import Split from 'react-split-grid'
import Editor from './Editor/Editor'
import Preview from './Preview/Preview'
import { useRouter } from 'next/router'
import { decode, encode } from 'js-base64'

const isDoc = typeof document !== 'undefined'

const Playground = () => {
  const [doc, setDoc] = useState(INITIAL_STATE)
  const matched = useMatchQuery('(min-width: 640px)')
  const router = useRouter()
  const { app } = router.query

  useEffect(() => {
    const appLength = app && app.length

    function getPath (length) {
      return router.asPath.slice(appLength + length)
    }

    if (!['', '/[app]'].includes(getPath(1))) {
      !['', '/[app]'].includes(getPath(2)) ? setDoc(decode(getPath(1))) : setDoc('')
    } else {
      setDoc(doc)
    }
  }, [router])

  useEffect(() => {
    const gridElement = isDoc && document.getElementById('grid')
    if (matched) {
      gridElement.style.gridTemplateColumns = '1fr 5px 1fr'
      gridElement.style.gridTemplateRows = '1fr'
    } else {
      gridElement.style.gridTemplateRows = '1fr 5px 1fr'
      gridElement.style.gridTemplateColumns = '1fr'
    }
  }, [matched])

  const handleChange = useCallback((/** @type string */ newDoc) => {
    setDoc(newDoc)
    const hashedCode = encode(newDoc)
    const href = `/${app}/?${hashedCode}`
    router.push(href, href, { shallow: true })
  }, [router])

  return (
    <Split
      rowMinSize={100} columnMinSize={200} render={({ getGridProps, getGutterProps }) => (
        <div
          id='grid'
          className={matched ? 'grid grid-cols-[1fr_5px_1fr] h-full w-full overflow-hidden' : 'grid grid-rows-[1fr_5px_1fr] h-full w-full overflow-hidden'}
          {...getGridProps()}
        >
          <section className='h-full relative overflow-hidden'>
            <Editor initialDoc={doc} onChange={handleChange} />
          </section>
          <div
            className={`dark:bg-secondary bg-slate-100 dark:hover:bg-blue-600 dark:active:bg-blue-500 hover:bg-blue-600 active:bg-blue-500 ${matched ? 'row-[1/-1] cursor-col-resize col-[2] bg-[url("/gutter-col.png")] bg-[50%_center] bg-no-repeat' : 'col-[1/-1] cursor-row-resize row-[2] bg-[url("/gutter-row.png")] bg-[50%_center] bg-no-repeat'} transition-colors duration-200`} {...getGutterProps(matched ? 'column' : 'row', 1)}
          />
          <section className='w-full h-full relative overflow-hidden'>
            <Preview doc={doc} />
          </section>
        </div>
      )}
    />
  )
}

export default Playground
