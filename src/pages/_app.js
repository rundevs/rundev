import '../styles/globals.css'
import { ThemeProvider } from '../context/ThemeProvider'
import { SessionProvider } from 'next-auth/react'
import SettingProvider from 'context/SettingProvider'
import { DocProvider } from 'context/DocProvider'

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => (
  <ThemeProvider forcedTheme={Component.theme || undefined}>
    <SessionProvider session={session}>
      <DocProvider>
        <SettingProvider>
          <Component {...pageProps} />
        </SettingProvider>
      </DocProvider>
    </SessionProvider>
  </ThemeProvider>
)

export default MyApp
