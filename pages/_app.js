import { ThemeProvider } from '../context/ThemeProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
