import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Portal from '../../Portal'
import { Files, Setting, User } from '../../../assets/icons'
import style from './naveditor.module.css'

const NavEditor = () => {
  const [activeSetting, setActiveSetting] = useState(false)
  const router = useRouter()
  const handleMenu = () => setActiveSetting(!activeSetting)

  return (
    <Fragment>
      <header className={style.headerEditor}>
        <nav className={style.navEditor}>
          <div className={style.actionEditor}>
            {/* <Link href='/'> */}
            <button onClick={() => router.push('/')} className={style.tooltip} data-tooltip='Home'>
              <div />
              <Image src='/mdpreview.webp' alt='markdown preview logo' width={25} height={25} priority={true} />
            </button>
            {/* </Link> */}
            <button className={style.tooltip} data-tooltip='Explorer'>
              <Files />
            </button>
          </div>
          <div className={style.settingEditor}>
            <button className={style.tooltip} data-tooltip='Account'>
              <User />
            </button>
            <button className={style.tooltip} onClick={handleMenu} data-tooltip='Manage'>
              <Setting />
            </button>
          </div>
        </nav>
      </header>
      {activeSetting && <Portal wrapperId='portal-mdpreview'>
        <div>
          <h1>Hello wold</h1>
        </div>
      </Portal>}
    </Fragment>
  )
}

export default NavEditor
