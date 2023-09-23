import useMatchQuery from 'hooks/useMatchQuery'
import React, { useCallback, useEffect } from 'react'
import Split from 'react-split-grid'
import Editor from './Editor/Editor'
import { useRouter } from 'next/router'
import { decode, encode } from 'js-base64'
import useDoc from 'hooks/useDoc'

const isDoc = typeof document !== 'undefined'

const Playground = ({ children, language }) => {
  const { doc, setDoc, handleInitialState } = useDoc()
  const matched = useMatchQuery('(min-width: 640px)')
  const router = useRouter()

  useEffect(() => {
    const pathLength = router.pathname.length
    const getPath = (length = 0) => router.asPath.slice(pathLength + length)
    setDoc(decode(getPath(1)))
    if ([''].includes(getPath())) handleInitialState(router.pathname)
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

  const handleChange = useCallback(
    (/** @type string */ newDoc) => {
      setDoc(newDoc)
      const hashedCode = encode(newDoc)
      const href = `${router.pathname}/?${hashedCode}`
      router.push(href, href, { shallow: true })
    },
    [router]
  )

  return (
    <Split
      rowMinSize={100}
      columnMinSize={200}
      render={({ getGridProps, getGutterProps }) => (
        <div
          id='grid'
          className={
            matched
              ? 'grid grid-cols-[1fr_5px_1fr] h-full w-full overflow-hidden'
              : 'grid grid-rows-[1fr_5px_1fr] h-full w-full overflow-hidden'
          }
          {...getGridProps()}
        >
          <section className='w-full h-full relative overflow-hidden'>
            <Editor
              initialDoc={doc}
              onChange={handleChange}
              language={language}
            />
          </section>
          <div
            className={`dark:bg-secondary bg-slate-100 dark:hover:bg-blue-600 dark:active:bg-blue-500 hover:bg-blue-600 active:bg-blue-500 ${
              matched
                ? 'row-[1/-1] cursor-col-resize col-[2] bg-[url("/gutter-col.png")] bg-[50%_center] bg-no-repeat'
                : 'col-[1/-1] cursor-row-resize row-[2] bg-[url("/gutter-row.png")] bg-[50%_center] bg-no-repeat'
            } transition-colors duration-200`}
            {...getGutterProps(matched ? 'column' : 'row', 1)}
          />
          <section className='w-full h-full relative overflow-hidden'>
            {children}
          </section>
        </div>
      )}
    />
  )
}

export default Playground
