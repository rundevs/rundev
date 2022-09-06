import { ThemeProvider } from '../context/ThemeProvider'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import { Fragment } from 'react'
import SettingProvider from 'context/SettingProvider'

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <ThemeProvider forcedTheme={Component.theme || undefined}>
        <SessionProvider session={session}>
          <SettingProvider>
            <Component {...pageProps} />
          </SettingProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
