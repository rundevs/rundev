import Head from 'next/head'
import { Fragment } from 'react'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Markdown Preview | Editor</title>
        <meta name="description" content="This application is a editor of markdown with preview." />
      </Head>
      <Layout>
        <main>
          <ul>{Array.from(Array(50).keys()).map(key => (<li key={key}>Hello world {key}</li>))}</ul>
        </main>
        <footer>
          <a
            href="https://github.com/LuiSauter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by Luis Gabriel Janco
          </a>
        </footer>
      </Layout>
    </Fragment>
  )
}
