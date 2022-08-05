import Image from 'next/image'
import React from 'react'
import { Files, Setting, User } from '../../../assets/icons'
import style from './naveditor.module.css'

const NavEditor = () => {
  return (
    <header className={style.headerEditor}>
      <nav className={style.navEditor}>
        <div className={style.actionEditor}>
          <figure>
            <Image src='/mdpreview.webp' alt='markdown preview logo' width={25} height={25} priority={true} />
          </figure>
          <button>
            <Files />
          </button>
        </div>
        <div className={style.settingEditor}>
          <button>
            <User />
          </button>
          <button>
            <Setting />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavEditor
