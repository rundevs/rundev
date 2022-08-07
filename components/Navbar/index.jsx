import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BarHamburger from './BarHamburger'
import Appearance from './display/Appearance'
import NavLinks from './Links/NavLinks'
import style from './header.module.css'

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
        <Link href='/'>
          <a className={style.title} translate='no'>
            <figure className={style.logo}>
              <Image src='/mdpreview-logo.png' alt='Markdown Preview logo' title='Markdow Preview' layout='fill' />
            </figure>
            <h1>Markdown Preview</h1>
          </a>
        </Link>
        <nav className={style.navbar}>
          <NavLinks viewport='desktop' />
          <Appearance />
          <button
            onClick={handleMenu}
            className={style.burgerBtn}
            aria-label='mobile-navigation'
            aria-expanded={activeMenu}
          >
            <BarHamburger />
          </button>
          {activeMenu && <NavLinks viewport='mobile' />}
        </nav>
      </div>
    </header>
  )
}

export default Navigation
