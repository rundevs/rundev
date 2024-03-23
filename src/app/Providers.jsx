'use client'
import { DocProvider } from 'context/DocProvider'
import SelectedFileProvider from 'context/SelectedFileProvider'
import SettingProvider from 'context/SettingProvider'
import { ThemeProvider } from 'context/ThemeProvider'
import { SessionProvider } from 'next-auth/react'

export function Providers({ children }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <DocProvider>
          <SettingProvider>
            <SelectedFileProvider>
              {children}
            </SelectedFileProvider>
          </SettingProvider>
        </DocProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
