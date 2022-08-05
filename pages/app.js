/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import Split from 'react-split-grid'
import Editor from '../components/Editor/Editor'
import NavEditor from '../components/Navbar/NavEditor/NavEditor'
import Preview from '../components/Preview/Preview'
import style from '../styles/app.module.css'

/** @todo move state matched in custom hook */
const App = () => {
  const [doc, setDoc] = useState(INITIAL_STATE)
  const [matched, setMatched] = useState(false)

  const handleChange = useCallback((/** @type string */ newDoc) => {
    setDoc(newDoc)
  }, [])

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

  return (
    <main className={style.app}>
      <NavEditor />
      <Split rowMinSize={100} columnMinSize={200} render={({ getGridProps, getGutterProps }) => (
        <div id='grid' className={matched ? style.gridColumn : style.gridRow} {...getGridProps()}>
          <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
            <Editor initialDoc={doc} onChange={handleChange} />
          </div>
          <div className={matched ? style.gutterColumn : style.gutterRow} {...getGutterProps(matched ? 'column' : 'row', 1)} />
          <div>
            <Preview doc={doc} />
          </div>
        </div>
      )} />
    </main>
  )
}

export default App

const INITIAL_STATE = `# Welcome to Markdown Preview
## Basic Syntax
### Heading 3

- List Item 1
- List Item 2

1. Ordered list item 1
2. Ordered list item 2

---
\`\`\`js
const message = "Hello "
function sayHello(name) {
  return message + name
}
console.log(sayHello('Bob')) // Hello Bob
\`\`\`

> Quote,
> Hello world of quote

- [ ] Task item todo
- [x] Task list item checkend
`
