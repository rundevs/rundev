import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import Frame from '../components/FrameMD/Frame'
import Layout from '../components/layout/Layout'
import style from '../styles/index.module.css'

function Home() {
  const [platform, setPlatform] = useState('Platform')

  useEffect(() => {
    typeof navigator !== 'undefined' &&
      setPlatform(navigator.userAgent.indexOf('Win') !== -1 ? 'Windows' : 'Mac')
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Markdown Preview | Editor</title>
        <meta name="description" content="This application is a editor of markdown with preview." />
      </Head>
      <Layout>
        <section className={style.heroSection}>
          <header className={style.title}>
            <h2>The <span className={style.textYellow}> Markdown language</span> text editor with <span className={style.textBlue}>preview</span></h2>
          </header>
          <div className={style.tagline}>
            <p>Get maximum readability and ease, taking workflow and accomplish more.</p>
          </div>
          <article className={style.action}>
            <Link href='/app'>
              <a className={style.actionLink}>Open in your Browser</a>
            </Link>
            <Link href='/'>
              <a className={style.actionLink}>Download for {platform}</a>
            </Link>
          </article>
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
        <section className={style.platforms}>
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
    </Fragment>
  )
}
export default Home
