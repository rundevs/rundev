import Head from 'next/head'
import { useEffect } from 'react'

import Frame from '../components/FrameDemo/Frame'
import Hero from '../components/Hero/Hero'
import Layout from '../components/layout'
import style from '../styles/index.module.css'
import FrameDemo from 'components/FrameDemo'

const demoCode1 = "console.log('Hello world');\n\nconst users = [\n  { user: 'fred', age: 48 },\n  { user: 'barney', age: 36 },\n  { user: 'tex', age: 71 },\n];\n\nMath.max(...users.map(item => item.age));\n"

const Home = () => {
  let subscribe = true
  useEffect(() => {
    if (subscribe) {
      document.querySelector('html').style.position = 'relative'
    }
    return () => {
      subscribe = false
    }
  }, [])

  return (
    <>
      <Head>
        <title>Rundev | An editor with real-time preview</title>
        <meta name='description' content='Rundev - Markdown Preview, JavaScript & other Languages in run-time.' />
      </Head>
      <Layout>
        <section className='p-4 w-full h-full lg:pt-28 xl:pt-32'>
          <Hero />
          <FrameDemo codeString={demoCode1} />
          <article className='py-14 max-w-3xl mx-auto dark:text-gray-300 text-primary text-xl flex flex-col gap-4 sm:text-2xl md:text-justify'>
            <p>🚀 Start coding within seconds.</p>
            <p>👨🏻‍💻 The easiest way to learn javascript, the fastest JavaScript coding experience ever made.</p>
            <p>✨ Type code faster and easier with smart code autocomplete. It helps avoid looking for documentation every time and it adds confidence in your coding abilities.</p>
          </article>
          {/* <div className='flex flex-col items-center justify-center w-full relative select-none'>
            <figure className='shadow-2xl w-72 aspect-square relative'>
              <Image src='/mdpreview-linux.png' alt='markdown preview logo' layout='fill' priority quality={100} objectFit='contain' />
            </figure>
            <div className='absolute' />
            <figure className='shadow-2xl w-full aspect-video relative'>
              <Image src='/mdpreview-window.png' alt='markdown preview logo' layout='fill' priority quality={100} objectFit='contain' />
            </figure>
          </div> */}
          <article className={style.textGoals}>
            <div className={style.regularText}>
              <span>It is....</span>
              <span>Simple</span>
              <span>Fast</span>
              <span>Readable</span>
              <span>Efficient</span>
              <span>Plain text</span>
            </div>
            <div style={{ height: '10vh' }} />
            <div className={style.demo}>
              <div className={style.shadow} />
              <Frame />
            </div>
          </article>
        </section>
        <section id='platforms' className='max-w-3xl w-full mx-auto flex flex-col items-center py-24'>
          <h2 className='text-2xl md:text-3xl font-medium'>Platforms</h2>
          <p className='text-xl md:text-2xl py-4'>Latest version: v0.2.0</p>
          <table className='border border-collapse w-1/2 dark:text-white text-primary text-lg'>
            <tbody>
              <tr className='border [&>td]:border [&>td]:pl-4 [&>td]:py-2'>
                <td>macOS (.app)</td>
                <td>not avaible</td>
              </tr>
              <tr className='border [&>td]:border [&>td]:pl-4 [&>td]:py-2'>
                <td>Windows (.exe)</td>
                <td>64 bit</td>
              </tr>
              <tr className='border [&>td]:border [&>td]:pl-4 [&>td]:py-2'>
                <td>Linux (.deb)</td>
                <td>64 bit</td>
              </tr>
              <tr className='border [&>td]:border [&>td]:pl-4 [&>td]:py-2'>
                <td>More distros (.AppImage)</td>
                <td>64 bit</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='pb-24 max-w-3xl mx-auto dark:text-gray-300 text-center text-2xl flex flex-col gap-4'>
          <h2 className='text-2xl md:text-3xl font-medium dark:text-white'>
            Project Goals
          </h2>
          <p className='text-justify text-xl md:text-2xl'>
            The goal of the project is to create a beautiful and easy writing experience, while maintaining a readable layout at all times, so for simplicity you can consider Markdown as a writing method.
          </p>
          <p className='text-justify text-xl md:text-2xl'>
            <span className='dark:text-white font-semibold'>@Sauterdev:</span> In the future, we anticipate that the community will come up with innovative additions to enhance what could be the simplest, most powerful, and best-tested productivity interface.
          </p>
        </section>
      </Layout>
    </>
  )
}
export default Home
