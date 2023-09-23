import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BarHamburger from './BarHamburger'
import Appearance from './display/Appearance'
import style from './header.module.css'
import { hrefs } from 'assets/hrefs'
import Languages from './display/Languages'
import useMatchQuery from 'hooks/useMatchQuery'

const Navigation = () => {
  const matched = useMatchQuery('(min-width: 768px)')
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  let cleanup = true
  useEffect(() => {
    if (cleanup) {
      if (showMenu && !matched) {
        document.body.style.overflowY = 'hidden'
        window.scrollTo(0, 0)
      } else {
        document.body.style.overflowY = 'auto'
      }
    }
    return () => {
      cleanup = false
    }
  }, [showMenu, matched])

  return (
    <header className='w-full h-max relative flex-shrink-0 z-10 lg:fixed lg:top-0 lg:left-auto dark:lg:bg-primary/80 lg:bg-white/80 lg:backdrop-blur-sm'>
      <div className='w-full h-full my-0 mx-auto px-4 py-6 flex flex-row justify-between items-center max-w-7xl sm:px-6 lg:px-10 lg:py-4'>
        <Link href='/'>
          <a className='items-end flex flex-row dark:text-white dark:hover:text-blue-500 hover:text-blue-500 text-primary transition-colors duration-200' translate='no'>
            <figure className='m-0 p-0 w-6 h-6 relative flex-shrink-0 md:w-8 md:h-8 md:mb-1'>
              <Image
                src='/rundevs.png'
                alt='Rundev logo'
                title='Rundev'
                layout='fill'
                priority
              />
            </figure>
            <h1 title='Rundev' aria-label='Rundev' className='font-semibold text-2xl leading-none md:text-3xl'>undev</h1>
          </a>
        </Link>
        <nav className='flex flex-row items-center h-full gap-4'>
          <input
            type='checkbox'
            checked={showMenu}
            onChange={(e) => toggleMenu(e.target.checked)}
            className='peer hidden'
            id='menu'
          />
          <ul className='peer-checked:absolute peer-checked:top-[72px] peer-checked:bottom-0 peer-checked:left-0 peer-checked:right-0 peer-checked:h-[calc(100vh-72px)] peer-checked:flex peer-checked:md:relative peer-checked:md:h-full peer-checked:md:top-0 peer-checked:lg:bg-transparent peer-checked:lg:backdrop-blur-none hidden dark:bg-primary/90 bg-white/80 backdrop-blur-sm dark:lg:bg-transparent lg:bg-transparent lg:backdrop-blur-none flex-col justify-center items-center overflow-y-auto md:flex md:flex-row md:mr-4 md:gap-7 lg:gap-10'>
            {hrefs.map((link, key) => (
              <li key={key} className='dark:hover:text-blue-500 hover:text-blue-500 dark:text-white text-primary font-medium relative flex transition-all duration-200'>
                <Link href={link.href}>
                  <a target={link.target} className='h-full py-4 text-xl font-semibold flex items-center gap-2 leading-none'>{link.name}{link.icon}</a>
                </Link>
              </li>
            ))}
            <Languages />
          </ul>
          <Appearance />
          <label
            htmlFor='menu'
            className={style.burgerBtn}
            aria-label='mobile-navigation'
            aria-expanded={showMenu}
          >
            <BarHamburger />
          </label>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
