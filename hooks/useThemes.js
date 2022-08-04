import { useTheme } from '../context/ThemeProvider'

const useThemes = () => {
  const isThemeDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  /** @description context hook to get the current theme */
  const { theme, setTheme } = useTheme()

  const checkIfIsDark = () => {
    return isThemeDark && theme === 'system'
      ? true
      : theme === 'dark' ? true : false
  }
  return { theme, setTheme, checkIfIsDark }
}

export default useThemes
