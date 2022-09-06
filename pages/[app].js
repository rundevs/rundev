import React, { Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Split from 'react-split-grid'

import Loading from 'components/Loading'
import Footer from 'components/Playground/footer/Footer'
import NavEditor from 'components/Playground/NavEditor/NavEditor'
import Explorer from 'components/Playground/Panel/Explorer'
import Profile from 'components/Playground/Panel/Profile'
import Settings from 'components/Playground/Panel/Settings'
import useSelectMenu from 'hooks/useSelectMenu'

const DynamicPlayground = dynamic(() => import('components/Playground'), {
  suspense: true
})

const arrComponents = {
  explorer: <Explorer />,
  user: <Profile />,
  settings: <Settings />
}
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
    <main className='dark:bg-primary bg-white flex flex-col w-full h-full overflow-hidden relative items-center justify-end'>
      <div className='flex flex-col h-full w-full overflow-hidden relative sm:flex-row'>
        <NavEditor handleSelectMenu={handleSelectMenu} />
        <Split
          columnMinSize={234}
          render={({
            getGridProps: getGridLayout,
            getGutterProps: getGutterLayout
          }) => (
            <div
              id='grid-layout'
              className='grid-cols-[0px_5px_1fr] h-full w-full grid overflow-hidden'
              {...getGridLayout()}
            >
              <div className='h-full relative overflow-hidden'>
                {Object.entries(menu)
                  .filter((value) => value[1])
                  .map((value) => arrComponents[value[0]])[0]}
              </div>
              <div
                className='dark:bg-secondary bg-slate-100 dark:hover:bg-blue-600 dark:active:bg-blue-500 hover:bg-blue-600 active:bg-blue-500 row-[1/-1] cursor-col-resize col-[2] bg-[url("/gutter-col.png")] bg-[50%_center] bg-no-repeat transition-colors duration-200'
                {...getGutterLayout('column', 1)}
              />
              <Suspense fallback={<Loading />}>
                <DynamicPlayground />
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
