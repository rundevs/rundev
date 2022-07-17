import { useEffect, useState } from "react";
import { KEY_THEME } from '../assets/constants'
/** @description verify if the html contain class dark */
function CheckIfIsLight() {
  if (typeof document !== "undefined") {
    return localStorage.getItem(KEY_THEME) === "light"
  } else {
    return false
  }
}

function useTheme() {
  const getMatchMedia = () => typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)")
  const [isDark, setIsDark] = useState(CheckIfIsLight() ? false : getMatchMedia().matches);
  const matchQueryListener = e => setIsDark(e.matches);
  // let cleanup = true
  useEffect(() => {
    const mq = getMatchMedia()
    mq.addEventListener('change', matchQueryListener)
    if (typeof document !== "undefined") {
      const currentHtml = document.querySelector('html')
      isDark ? (
        currentHtml.classList.add('dark'),
        currentHtml.classList.remove('light'),
        localStorage.setItem(KEY_THEME, 'auto')
      ) : (
        currentHtml.classList.add('light'),
        currentHtml.classList.remove('dark'),
        localStorage.setItem(KEY_THEME, 'light')
      )
    }
    return () => {
      mq.removeEventListener('change', matchQueryListener)
      // cleanup = false
    }
  }, [isDark]);

  const handleTheme = () => setIsDark(!isDark)

  return { isDark, handleTheme };
}

export default useTheme
