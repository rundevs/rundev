import AppLayout from 'components/layout/AppLayout'
import Loading from 'components/Loading'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

const DynamicPlayground = dynamic(() => import('components/Playground'), { suspense: true, ssr: true })

const Javascript = () => {
  return (
    <AppLayout>
      <Suspense fallback={<Loading />}>
        <DynamicPlayground language='javascript'>
          <div className='h-full w-full grid place-content-center place-items-center text-yellow-300 text-xl animate-pulse'>Run JavaScript is not available</div>
        </DynamicPlayground>
      </Suspense>
    </AppLayout>
  )
}

export default Javascript
