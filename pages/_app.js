import { ThemeProvider } from '../context/ThemeProvider'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import SettingProvider from 'context/SettingProvider'

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => (
  <ThemeProvider forcedTheme={Component.theme || undefined}>
    <SessionProvider session={session}>
      <SettingProvider>
        <Component {...pageProps} />
      </SettingProvider>
    </SessionProvider>
  </ThemeProvider>
)

export default MyApp
