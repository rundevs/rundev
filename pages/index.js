import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import Layout from '../components/layout/Layout'
import style from '../styles/index.module.css'
/**
 * @todo check what operaton system the user is using
 */
function Home() {
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
          <p>Get maximum readability and ease, taking workflow and accomplish more.</p>
          <p>Markdown, the simple and easy-to-use markup language you can use to format virtually any document.</p>
          <Link href='/'>
            <a>Open in your Browser</a>
          </Link>
          <Link href='/'>
            <a>Download for </a>
          </Link>
          <div className={style.imgSticky}>
            <figure className={style.image}>
              <Image src='/md-demo.png' alt='Markdown Preview' layout='fill' objectFit='contain' priority={true} quality={100} />
            </figure>
          </div>
        </section>
        <section className={style.content}>
          {Array.from(Array(60).keys()).map((key) => (<span key={key}>Hello world {key}</span>))}
        </section>
      </Layout>
    </Fragment>
  )
}
export default Home
