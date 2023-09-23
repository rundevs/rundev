import Head from 'next/head'
import React from 'react'

const Page404 = () => {
  return (
    <>
      <Head>
        <title>Rundev | page not found</title>
      </Head>
      <section className='dark:bg-primary bg-white grid place-content-center place-items-center w-full h-full'>
        <span className='text-xl font-semibold animate-pulse'>Page not found, status code: 404</span>
      </section>
    </>
  )
}

export default Page404
