import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Portal from '../../Portal'
import { signIn } from 'next-auth/react'
import { Files, Setting, User } from '../../../assets/icons'
import style from './naveditor.module.css'

const themesContent = [
  { value: 'atom-one-dark', label: 'Atom One Dark' },
  { value: 'atom-one-light', label: 'Atom One Light' },
  { value: 'github', label: 'GitHub' },
  { value: 'github-dark-dimmed', label: 'GitHub Dark' }
]

const NavEditor = ({ handleExplorer }) => {
  const [activeSetting, setActiveSetting] = useState(false)
  const router = useRouter()
  const handleMenu = () => setActiveSetting(!activeSetting)

  const handleLoginWithGitHub = () => signIn('github')

  return (
    <Fragment>
      <header className={style.headerEditor}>
        <nav className={style.navEditor}>
          <div className={style.actionEditor}>
            {/* <Link href='/'> */}
            <button onClick={() => router.push('/')} className={style.tooltip} data-tooltip='Home'>
              <div />
              <Image src='/rundevs.png' alt='Rundev logo' width={25} height={25} priority={true} />
            </button>
            {/* </Link> */}
            <button onClick={handleExplorer} className={style.tooltip} data-tooltip='Explorer'>
              <Files />
            </button>
          </div>
          <div className={style.settingEditor}>
            <button onClick={handleLoginWithGitHub} className={style.tooltip} data-tooltip='Account'>
              <User />
            </button>
            <button className={style.tooltip} onClick={handleMenu} data-tooltip='Manage'>
              <Setting />
            </button>
          </div>
        </nav>
      </header>
      {activeSetting && (
        <Portal wrapperId='portal-mdpreview'>
          <div onClick={handleMenu} className={style.menuClose} />
          <div className={style.menu}>
            <details>
              <summary>Theme Color</summary>
              {themesContent.map((theme, index) => (
                <button key={index}>{theme.label}</button>
              ))}
            </details>
            <hr />
            <button>About</button>
          </div>
        </Portal>
      )}
    </Fragment>
  )
}

export default NavEditor
