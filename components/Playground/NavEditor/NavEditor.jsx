import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { BsGrid } from 'react-icons/bs'

import { Files, Setting, User } from '../../../assets/icons'
import style from './naveditor.module.css'
import useSettings from 'hooks/useSettings'

const NavEditor = ({ handleSelectMenu }) => {
  const router = useRouter()
  const { status } = useSession()
  const { settings, updateSettings } = useSettings()

  const handleLoginWithGitHub = () => signIn('github')

  const selectExplorer = () => handleSelectMenu('explorer')
  const selectUser = () => handleSelectMenu('user')
  const selectSettings = () => handleSelectMenu('settings')

  const handleUser = () => status === 'authenticated' ? selectUser() : handleLoginWithGitHub()

  const toggleWorkSpaces = () => updateSettings('workspaces', !settings.workspaces)

  return (
    <>
      <header className={style.headerEditor}>
        <nav className={style.navEditor}>
          <div className={style.actionEditor}>
            <button onClick={() => router.push('/')} className={style.tooltip} data-tooltip='Home' title='Home'>
              <div />
              <Image src='/rundevs.png' alt='Rundev logo' width={25} height={25} priority />
            </button>
            <button onClick={selectExplorer} className={style.tooltip} data-tooltip='Explorer' title='Explorer'>
              <Files />
            </button>
            <button onClick={toggleWorkSpaces} className={style.tooltip} data-tooltip='WorkSpaces' title='WorkSpaces'>
              <BsGrid />
            </button>
          </div>
          <div className={style.settingEditor}>
            <button onClick={handleUser} className={style.tooltip} data-tooltip='Account' title='Account'>
              <User />
            </button>
            <button className={style.tooltip} onClick={selectSettings} data-tooltip='Manage' title='Manage'>
              <Setting />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavEditor
