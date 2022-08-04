import React from 'react'
import Link from 'next/link'
import { hrefs } from '../../../assets/hrefs'
import { GitHub } from '../../../assets/icons'
import Languages from '../display/Languages'
import style from './navlinks.module.css'

const NavLinks = ({ viewport = 'desktop', }) => {
  return (
    <ul className={viewport === 'desktop' ? style.navLinkDesktop : style.navLinkMobile}>
      {hrefs.map((link, key) => (
        <li key={key} className={viewport === 'mobile' ? style.link : style.linkDesktop}>
          <Link href={link.href}>
            <a>{link.name}</a>
          </Link>
        </li>
      ))}
      {viewport === 'mobile' && <li style={{ margin: '0.5rem 0' }}><Languages /></li>}
      <li className={style.social}>
        <Link href='https://github.com/Simply-Markdown/mdpreview-web'>
          <a target='_blank'>GitHub<GitHub /></a>
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
