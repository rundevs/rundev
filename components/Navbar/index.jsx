import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BarHamburger from './BarHamburger'
import { hrefs } from './hrefs'
import style from './header.module.css'
import { Language, Moon, Sun } from '../../assets/icons'
import useTheme from '../../hooks/useTheme'

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const { isDark, handleTheme } = useTheme()
  const handleMenu = () => setActiveMenu(!activeMenu)
  let cleanup = true
  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflowY = 'hidden'
      document.body.style.paddingRight = '1rem'
    } else {
      document.body.style.overflowY = 'auto'
      document.body.style.paddingRight = '0px'
    }
    return () => {
      cleanup = false
    }
  }, [activeMenu])

  return (
    <header className={style.header}>
      <div className={style.nav}>
        <div className={style.title} translate='no'>
          <figure className={style.logo}>
            <Image src='/mdpreview-logo.png' alt='Markdown Preview logo' title='Markdow Preview' layout='fill' />
          </figure>
          <h1>Markdown Preview</h1>
        </div>
        <nav className={style.navbar}>
          <button onClick={handleMenu} className={style.burgerBtn} aria-label='mobile-navigation' aria-expanded={activeMenu}>
            <BarHamburger />
          </button>
          {activeMenu && (
            <ul className={style.MenuContent}>
              {hrefs.map((link, key) => (
                <li key={key} className={style.link}>
                  <Link href={link.href}><a>{link.name}</a></Link>
                </li>
              ))}
              <li className={style.language}>
                <Language />
                <span>English</span>
              </li>
              <li className={style.appearance}>
                <span>Appearance</span>
                <button onClick={handleTheme} className={style.toggleTheme}>
                  <span>
                    {isDark ? <Moon /> : <Sun />}
                  </span>
                </button>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navigation