import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta name='description' content='Markdown Preview is the best and easier editor on the web' />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Markdown Preview" />
          <meta property="og:description" content="Markdown Preview is the best and easier editor on the web" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <div id='portal-mdpreview' />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
