import { ThemeProvider } from '../context/ThemeProvider'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import { Fragment } from 'react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Fragment>
      <ThemeProvider forcedTheme={Component.theme || undefined}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
