import React, { useEffect, useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import useThemes from '../../../hooks/useThemes'
import style from '../header.module.css'

const Appearance = () => {
  const isThemeDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  const { theme, setTheme } = useThemes()

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
      : theme === 'dark'
  }

  return (
    <div className={style.appearance}>
      <button
        onClick={handleTheme}
        className={style.toggleTheme}
        role='button'
        aria-label='toggle darks mode'
        aria-details={mounted ? (checkIfIsDark() ? 'dark' : 'light') : 'dark'}
      >
        <span className='dark:text-white text-gray-900'>
          {mounted ? (checkIfIsDark() ? <HiMoon /> : <HiSun />) : <HiMoon />}
        </span>
      </button>
    </div>
  )
}

export default Appearance
