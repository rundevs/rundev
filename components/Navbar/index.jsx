import Image from 'next/image'
import React from 'react'
import style from './header.module.css'

const Navigation = () => {
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
          <ul className={style.content}>
            {Array.from(Array(2).keys()).map(key => (<li key={key}>{key}</li>))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation