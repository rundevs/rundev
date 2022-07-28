import React, { useEffect, useState } from 'react'
import { Moon, Sun } from '../../../assets/icons'
import { useTheme } from '../../../context/ThemeProvider'
import style from '../header.module.css'

const Appearance = () => {
  const isThemeDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => {
    }
  }, [])

  const handleTheme = () => {
    if (isThemeDark && theme === 'system') {
      setTheme('light')
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  const checkIfIsDark = () => {
    return isThemeDark && theme === 'system'
      ? true
      : theme === 'dark' ? true : false
  }

  return (
    <div className={style.appearance}>
      <button
        onClick={handleTheme}
        className={style.toggleTheme}
        role='button'
        aria-label='toggle darks mode'
        aria-details={mounted && (checkIfIsDark() ? 'dark' : 'light') || 'dark'}
      >
        <span>
          {mounted && (checkIfIsDark() ? <Moon /> : <Sun />) || <Moon />}
        </span>
      </button>
    </div>
  )
}

export default Appearance