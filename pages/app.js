import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import Split from 'react-split-grid'

import Editor from '../components/Playground/Editor/Editor'
import Footer from '../components/Playground/footer/Footer'
import Preview from '../components/Playground/Preview/Preview'
import NavEditor from '../components/Playground/NavEditor/NavEditor'
import Explorer from '../components/Playground/Panel/Explorer'
import useMatchQuery from '../hooks/useMatchQuery'
import useClient from '../hooks/useClient'
import style from '../styles/app.module.css'
import Profile from 'components/Playground/Panel/Profile'
import useSelectMenu from 'hooks/useSelectMenu'
import Settings from 'components/Playground/Panel/Settings'
import SettingProvider from 'context/SettingProvider'

const arrComponents = { explorer: <Explorer />, user: <Profile />, settings: <Settings /> }

const App = () => {
  const [doc, setDoc] = useState(INITIAL_STATE)
  const { menu, handleSelectMenu } = useSelectMenu()
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
        <title>Rundev | Markdown preview | Edit, create, and improve your ideas ✨</title>
      </Head>
      <SettingProvider>

        <main className={style.app}>
          <div className={style.appLayout}>
            <NavEditor handleSelectMenu={handleSelectMenu} />
            <Split
              columnMinSize={234}
              render={({ getGridProps: getGridLayout, getGutterProps: getGutterLayout }) => (
                <div id='grid-layout' className={style.gridExplorer} {...getGridLayout()}>
                  <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                    {Object.entries(menu).filter(value => value[1]).map(value => arrComponents[value[0]])[0]}
                  </div>
                  <div className={style.gutterColExplorer} {...getGutterLayout('column', 1)} />
                  <Split rowMinSize={100} columnMinSize={200} render={({ getGridProps, getGutterProps }) => (
                    <div
                      id='grid'
                      className={matched ? style.gridColumn : style.gridRow}
                      {...getGridProps()}
                    >
                      <section className={style.editorContain}>
                        {mounted && <Editor initialDoc={doc} onChange={handleChange} />}
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
                </div>
              )}
            />
          </div>
          <Footer />
        </main>
      </SettingProvider>
    </Fragment >
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
