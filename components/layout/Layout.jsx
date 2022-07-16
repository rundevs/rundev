import React from 'react'
import Navigation from '../Navbar'
import style from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
