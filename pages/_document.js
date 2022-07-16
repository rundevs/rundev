import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Html lang="en-US" className='dark'>
        <Head>
          <meta charSet="utf-8" />
          <meta name='description' content='Markdown Preview is the best and easier editor on the web' />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
