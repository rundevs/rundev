import Loading from 'components/Loading'
import Footer from 'components/Playground/footer/Footer'
import NavEditor from 'components/Playground/NavEditor/NavEditor'
import Explorer from 'components/Playground/Panel/Explorer'
import Profile from 'components/Playground/Panel/Profile'
import Settings from 'components/Playground/Panel/Settings'
import useClient from 'hooks/useClient'
import useSelectMenu from 'hooks/useSelectMenu'
import useSettings from 'hooks/useSettings'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { Suspense, useEffect } from 'react'
import Split from 'react-split-grid'
import style from '../styles/app.module.css'

const DynamicPlayground = dynamic(() => import('components/Playground'), {
  suspense: true
})
const DynamicWorkspaces = dynamic(() => import('components/WorkSpaceItem'), {
  suspense: true
})

const arrComponents = {
  explorer: <Explorer />,
  user: <Profile />,
  settings: <Settings />
}
const App = () => {
  const router = useRouter()
  const { menu, handleSelectMenu } = useSelectMenu()
  const { settings } = useSettings()
  const { mounted } = useClient()
  const { workspaces } = settings

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
    <main className={style.app}>
      <div className={style.appLayout}>
        <NavEditor handleSelectMenu={handleSelectMenu} />
        <Split
          columnMinSize={234}
          render={({
            getGridProps: getGridLayout,
            getGutterProps: getGutterLayout
          }) => (
            <div
              id='grid-layout'
              className={style.gridExplorer}
              {...getGridLayout()}
            >
              <div
                style={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {Object.entries(menu)
                  .filter((value) => value[1])
                  .map((value) => arrComponents[value[0]])[0]}
              </div>
              <div
                className={style.gutterColExplorer}
                {...getGutterLayout('column', 1)}
              />
              <Suspense fallback={<Loading />}>
                {mounted &&
                  (workspaces
                    ? <DynamicWorkspaces />
                    : <DynamicPlayground />
                  )}
              </Suspense>
            </div>
          )}
        />
      </div>
      <Footer />
    </main>
  )
}

export default App
