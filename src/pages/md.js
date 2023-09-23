import AppLayout from 'components/layout/AppLayout'
import Loading from 'components/Loading'
import Preview from 'components/Playground/Preview/Preview'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

const DynamicPlayground = dynamic(() => import('components/Playground'), { suspense: true, ssr: true })

const Markdown = () => {
  return (
    <AppLayout>
      <Suspense fallback={<Loading />}>
        <DynamicPlayground language='markdown'>
          <Preview />
        </DynamicPlayground>
      </Suspense>
    </AppLayout>
  )
}

export default Markdown
