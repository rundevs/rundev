import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en-US'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='theme-color' media='(prefers-color-scheme: light)' content='#1e1e1e' />
          <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#1e1e1e' />
          <meta name='description' content='Rundev is the best and easier editor on the web' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Rundev' />
          <meta property='og:description' content='Rundev is the best and easier editor on the web' />
          <meta name='twitter:card' content='summary_large_image' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='google-site-verification' content='googlee7d298e9e66eecd5.html' />
          <meta name='google-site-verification' content='nk6ETUfejHtjHnkXEBzgWhOOX_k-m3iSSVxpoEbVzGM' />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
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
