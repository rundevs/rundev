import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import AppLayout from 'components/layout/AppLayout'
import PreviewJs from 'components/Playground/Preview/PreviewJs'
import Loading from 'components/Loading'

const DynamicPlayground = dynamic(() => import('components/Playground'), { suspense: true, ssr: true })

const Javascript = () => {
  return (
    <AppLayout>
      <Suspense fallback={<Loading />}>
        <DynamicPlayground language='javascript'>
          <PreviewJs />
        </DynamicPlayground>
      </Suspense>
    </AppLayout>
  )
}

export default Javascript
