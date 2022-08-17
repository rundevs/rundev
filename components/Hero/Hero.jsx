import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useClient from '../../hooks/useClient'
import usePlatform from '../../hooks/usePlatform'
import style from './hero.module.css'

const Hero = () => {
  const { mounted } = useClient()
  const { isMobile, platform } = usePlatform()

  return (
    <article className={style.flexHero}>
      <div className={style.heroMain}>
        <header className={style.title}>
          <h2>
            The <span className={style.rundev}>Rundev</span> is a <span className={style.textBlue}>Playground</span> for your <span className={style.textYellow}> favorite language at runtime.</span>
          </h2>
        </header>
        <div className={style.tagline}>
          <p>It allows you to edit your code in real-time, and see the result instantly.</p>
        </div>
        <div className={style.action}>
          <Link href='/app'>
            <a className={style.actionLink}>Open in your Browser</a>
          </Link>
          <Link href={mounted && isMobile ? '#platforms' : '/'}>
            <a title='pre-release' className={style.actionLink}>
              {mounted && isMobile ? 'Download' : `Download for ${platform}`}
            </a>
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
