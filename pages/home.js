import Head from 'next/head'
import { useEffect } from 'react'
import Frame from '../components/FrameMD/Frame'
import Hero from '../components/Hero/Hero'
import Layout from '../components/layout/Layout'
import style from '../styles/index.module.css'

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
        <section className={style.heroSection}>
          <Hero />
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
        <section id='platforms' className={style.platforms}>
          <h2>Platforms</h2>
          <p>Latest version: v0.2.0</p>
          <table className={style.table}>
            <tbody>
              <tr>
                <td>macOS (.app)</td>
                <td>not avaible</td>
              </tr>
              <tr>
                <td>Windows (.exe)</td>
                <td>64 bit</td>
              </tr>
              <tr>
                <td>Linux (.deb)</td>
                <td>64 bit</td>
              </tr>
              <tr>
                <td>More distros (.AppImage)</td>
                <td>64 bit</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={style.content}>
          <h2>
            Project Goals
          </h2>
          <p>
            The goal of the project is to create a beautiful and easy writing experience, while maintaining a readable layout at all times, so for simplicity you can consider Markdown as a writing method.
          </p>
          <span className={style.quote}>
            In the future, we anticipate that the community will come up with innovative additions to enhance what could be the simplest, most powerful, and best-tested productivity interface.
          </span>
        </section>
      </Layout>
    </>
  )
}
export default Home
