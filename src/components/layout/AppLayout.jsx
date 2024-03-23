'use client'
import useSettings from 'hooks/useSettings'
import React, { Suspense, useEffect } from 'react'
import Split from 'react-split-grid'
import dynamic from 'next/dynamic'

const Explorer = dynamic(() => import('components/Playground/Panel/Explorer'))
const Profile = dynamic(() => import('components/Playground/Panel/Profile'))
const Settings = dynamic(() => import('components/Playground/Panel/Settings'))

const arrComponents = {
  explorer: <Explorer />,
  user: <Profile />,
  settings: <Settings />
}

const AppLayout = ({ children }) => {
  const { menu } = useSettings()
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
            <Suspense fallback={<div>Loading menu...</div>}>
              {Object.entries(menu)
                .filter((value) => value[1])
                .map((value) => arrComponents[value[0]])[0]}
            </Suspense>
          </div>
          <div
            className='dark:bg-secondary bg-slate-100 dark:hover:bg-blue-600 dark:active:bg-blue-500 hover:bg-blue-600 active:bg-blue-500 row-[1/-1] cursor-col-resize col-[2] bg-[url("/gutter-col.png")] bg-[50%_center] bg-no-repeat transition-colors duration-200'
            {...getGutterLayout('column', 1)}
          />
          {children}
        </div>
      )}
    />
  )
}

export default AppLayout
