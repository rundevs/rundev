import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from './hero.module.css'

const Hero = () => {
  const [platform, setPlatform] = useState('Platform')

  useEffect(() => {
    typeof navigator !== 'undefined' &&
      setPlatform(navigator.userAgent.indexOf('Win') !== -1 ? 'Windows' : 'Mac')
  }, [])

  return (
    <article className={style.flexHero}>
      <div className={style.heroMain}>
        <header className={style.title}>
          <h2>The <span className={style.textYellow}> Markdown language</span> text editor with <span className={style.textBlue}>preview</span></h2>
        </header>
        <div className={style.tagline}>
          <p>Get maximum readability and ease by documenting your projects, taking your workflow and accomplishing more.</p>
        </div>
        <div className={style.action}>
          <Link href='/app'>
            <a className={style.actionLink}>Open in your Browser</a>
          </Link>
          <Link href='/'>
            <a title='pre-release' className={style.actionLink}>Download for {platform}</a>
          </Link>
        </div>
      </div>
      <div className={style.heroPreview}>
        <div className={style.linux}>
          <figure>
            <Image src='/mdpreview-linux.png' alt='markdown preview logo' layout='fill' priority={true} quality={100} />
          </figure>
        </div>
        <div className={style.heroShadow} />
        <div className={style.window}>
          <figure>
            <Image src='/mdpreview-window.png' alt='markdown preview logo' layout='fill' priority={true} quality={100} />
          </figure>
        </div>
      </div>
    </article>
  )
}

export default Hero