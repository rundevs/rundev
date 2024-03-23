import NavEditor from 'components/Playground/NavEditor/NavEditor'
import Footer from 'components/Playground/footer'
import AppLayout from 'components/layout/AppLayout'
import { Suspense } from 'react'
import Playground from 'components/Playground'
import Preview from 'components/Playground/Preview/Preview'
import dynamic from 'next/dynamic'

const PreviewDynamic = dynamic(() => import('components/Playground/Preview/Preview'), {
  loading: <p>Loading preview component...</p>
})

export default function HomePage() {
  return (
    <main className='dark:bg-primary bg-white flex flex-col w-full h-full overflow-hidden relative items-center justify-end'>
      <div className='flex flex-col h-full w-full overflow-hidden relative sm:flex-row'>
        <NavEditor />
        <AppLayout>
          <Playground>
            {/* <Suspense fallback={<Loading />}> */}
            <PreviewDynamic />
            {/* </Suspense> */}
          </Playground>
        </AppLayout>
      </div>
      <Footer />
    </main>
  )
}
