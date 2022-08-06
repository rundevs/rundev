import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Split from 'react-split-grid'
import Head from 'next/head'
import Editor from '../components/Editor/Editor'
import NavEditor from '../components/Navbar/NavEditor/NavEditor'
import Preview from '../components/Preview/Preview'
import style from '../styles/app.module.css'
import useMatchQuery from '../hooks/useMatchQuery'
import useClient from '../hooks/useClient'

const App = () => {
  const [doc, setDoc] = useState(INITIAL_STATE)
  const { matched } = useMatchQuery()
  const { mounted } = useClient()

  const handleChange = useCallback((/** @type string */ newDoc) => {
    setDoc(newDoc)
  }, [])

  let subscribe = true
  useEffect(() => {
    if (subscribe) {
      document.body.style.overflowY = 'hidden'
      document.querySelector('html').style.position = 'fixed'
    }
    return () => {
      subscribe = false
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Markdown with preview | Edit, create, and improve your ideas ✨</title>
      </Head>
      <main className={style.app}>
        <div className={style.appLayout}>
          <NavEditor />
          <Split rowMinSize={100} columnMinSize={200} render={({ getGridProps, getGutterProps }) => (
            <div
              id='grid'
              className={matched ? style.gridColumn : style.gridRow}
              {...getGridProps()}
            >
              <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                {mounted && <Editor initialDoc={doc} onChange={handleChange} />}
              </div>
              <div
                className={matched ? style.gutterColumn : style.gutterRow}
                {...getGutterProps(matched ? 'column' : 'row', 1)}
              />
              <div style={{ width: '100%', height: '100%', overflow: 'auto', position: 'relative', overflow: 'hidden' }}>
                <Preview doc={doc} />
              </div>
            </div>
          )}
          />
        </div>
        <footer className={style.footer}>
          <div>
            <span
              data-tooltip='Markdown Preview Application'
              className={style.tooltip}
            >
              Markdown Preview
            </span>
          </div>
          <div>
            <span
              data-tooltip='Indentation'
              className={style.tooltip}
            >
              Spaces: 2
            </span>
            <span
              data-tooltip='Encoding'
              className={style.tooltip}
            >
              UTF-8
            </span>
            <span
              data-tooltip='Line Sequence'
              className={style.tooltip}
            >
              LF
            </span>
            <span
              data-tooltip='Language'
              className={style.tooltip}
            >
              Markdown
            </span>
          </div>
        </footer>
      </main>
    </Fragment>
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
