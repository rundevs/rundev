import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'

import { Files, Setting, User } from '../../../assets/icons'
import style from './naveditor.module.css'

const themesContent = [
  { value: 'atom-one-dark', label: 'Atom One Dark' },
  { value: 'atom-one-light', label: 'Atom One Light' },
  { value: 'github', label: 'GitHub' },
  { value: 'github-dark-dimmed', label: 'GitHub Dark' }
]

const NavEditor = ({ handleSelectMenu }) => {
  const router = useRouter()
  const { status } = useSession()

  const handleLoginWithGitHub = () => signIn('github')

  const selectExplorer = () => handleSelectMenu('explorer')
  const selectUser = () => handleSelectMenu('user')
  const selectSettings = () => handleSelectMenu('settings')

  const handleUser = () => status === 'authenticated' ? selectUser() : handleLoginWithGitHub()

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
            <button onClick={selectExplorer} className={style.tooltip} data-tooltip='Explorer'>
              <Files />
            </button>
          </div>
          <div className={style.settingEditor}>
            <button onClick={handleUser} className={style.tooltip} data-tooltip='Account'>
              <User />
            </button>
            <button className={style.tooltip} onClick={selectSettings} data-tooltip='Manage'>
              <Setting />
            </button>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}

export default NavEditor
