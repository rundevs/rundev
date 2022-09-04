import { INITIAL_STATE } from 'assets/constants'
import useMatchQuery from 'hooks/useMatchQuery'
import React, { useCallback, useEffect, useState } from 'react'
import Split from 'react-split-grid'
import Editor from './Editor/Editor'
import Preview from './Preview/Preview'
import style from './playground.module.css'
import { useRouter } from 'next/router'
import { decode, encode } from 'js-base64'

const isDoc = typeof document !== 'undefined'

const Playground = () => {
  const [doc, setDoc] = useState(INITIAL_STATE)
  const matched = useMatchQuery('(min-width: 640px)')
  const router = useRouter()
  const { asPath } = router

  useEffect(() => {
    if (asPath.slice(5) !== '') {
      setDoc(decode(asPath.slice(5)))
    }
  }, [])

  useEffect(() => {
    const gridElement = isDoc && document.getElementById('grid')
    if (matched) {
      gridElement.style.gridTemplateColumns = '1fr 5px 1fr'
      gridElement.style.gridTemplateRows = '1fr'
    } else {
      gridElement.style.gridTemplateRows = '1fr 5px 1fr'
      gridElement.style.gridTemplateColumns = '1fr'
    }
  }, [])

  const handleChange = useCallback((/** @type string */ newDoc) => {
    setDoc(newDoc)
    const hashedCode = encode(newDoc)
    const href = `/app/?${hashedCode}`
    router.push(href, href, { shallow: true })
  }, [])

  return (
    <Split
      rowMinSize={100} columnMinSize={200} render={({ getGridProps, getGutterProps }) => (
        <div
          id='grid'
          className={matched ? style.gridColumn : style.gridRow}
          {...getGridProps()}
        >
          <section className={style.editorContain}>
            <Editor initialDoc={doc} onChange={handleChange} />
          </section>
          <div
            className={matched ? style.gutterColumn : style.gutterRow} {...getGutterProps(matched ? 'column' : 'row', 1)}
          />
          <section className={style.previewContain}>
            <Preview doc={doc} />
          </section>
        </div>
      )}
    />
  )
}

export default Playground
