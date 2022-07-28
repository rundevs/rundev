import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BarHamburger from './BarHamburger'
import { hrefs } from '../../assets/hrefs'
import style from './header.module.css'
import Appearance from './display/Appearance'
import Languages from './display/Languages'

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const handleMenu = () => setActiveMenu(!activeMenu)

  let cleanup = true
  useEffect(() => {
    if (cleanup) {
      if (activeMenu) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'auto'
      }
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
          {hrefs.map((link, key) => (
            <Link href={link.href} key={key}>
              <a className={style.navLink}>{link.name}</a>
            </Link>
          ))}
          <Appearance />
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
              <li style={{ margin: '0.5rem 0' }}><Languages /></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navigation