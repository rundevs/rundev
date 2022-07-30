import Link from 'next/link'
import React from 'react'
import Navigation from '../Navbar'
import style from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Navigation />
      <main>{children}</main>
      <footer className={style.footer}>
        <p>Copyright © 2022 <Link href='/'><a>Markdown Preview</a></Link></p>
        <p>Developer <Link href='https://sauterdev.vercel.app/'><a>Luis Gabriel Janco</a></Link></p>
      </footer>
    </div>
  )
}

export default Layout
