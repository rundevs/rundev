import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Split from 'react-split-grid'

import useSelectMenu from 'hooks/useSelectMenu'

import Footer from 'components/Playground/footer/Footer'
import NavEditor from 'components/Playground/NavEditor/NavEditor'
import Explorer from 'components/Playground/Panel/Explorer'
import Profile from 'components/Playground/Panel/Profile'
import Settings from 'components/Playground/Panel/Settings'
import Playground from 'components/Playground'
import style from 'styles/app.module.css'

const arrComponents = { explorer: <Explorer />, user: <Profile />, settings: <Settings /> }

const App = () => {
  const { menu, handleSelectMenu } = useSelectMenu()

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
                <Playground />
              </div>
            )}
          />
        </div>
        <Footer />
      </main>
    </Fragment >
  )
}

export default App
