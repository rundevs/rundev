import 'styles/globals.css'
import Script from 'next/script'
import { Providers } from './Providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rundev',
  description: 'Rundev is the best and easier editor on the web',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e1e1e' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1e1e' }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang='es' data-theme='dark' style={{ colorScheme: 'dark' }}>
      <head />
      <body className={inter.className}>
        <Script dangerouslySetInnerHTML={{
          __html: `
          !function(){try{var d=document.documentElement,n='data-theme',s='setAttribute';var e=localStorage.getItem('theme');if('system'===e||(!e&&true)){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);if(m.media!==t||m.matches){d.style.colorScheme = 'dark';d[s](n,'dark')}else{d.style.colorScheme = 'light';d[s](n,'light')}}else if(e){d[s](n,e|| '')}if(e==='light'||e==='dark')d.style.colorScheme=e}catch(e){}}()`
        }}
        />
        <div id='portal-mdpreview' />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
