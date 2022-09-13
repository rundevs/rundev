import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { BsGrid } from 'react-icons/bs'

import { Files, Setting, User } from '../../../assets/icons'
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
      <header className='dark:bg-secondary bg-slate-50 h-12 w-full relative border-b border-gray-700 sm:h-full sm:w-max sm:relative sm:border-r sm:border-b-0 sm:overflow-y-auto sm:overflow-x-hidden'>
        <nav className='flex flex-row justify-between items-center w-full h-full sm:flex-col sm:w-full sm:h-full sm:justify-between'>
          <div className='flex flex-row h-full [&>button]:leading-[10px] [&>button]:h-full [&>button]:w-12 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:relative [&>button]:bg-transparent [&>button]:border-none [&>button]:p-3 [&>button]:text-primary [&>button]:dark:text-slate-300 [&>button>svg]:w-full [&>button>svg]:h-full sm:flex-col sm:h-max sm:w-full'>
            <button onClick={() => router.push('/')} className='hover:cursor-pointer hover:text-gray-700 dark:hover:opacity-75 transition-all duration-200' data-tooltip='Home' title='Home'>
              <div />
              <Image src='/rundevs.png' alt='Rundev logo' width={25} height={25} priority />
            </button>
            <button onClick={selectExplorer} className='hover:cursor-pointer hover:text-gray-700 dark:hover:opacity-75 transition-all duration-200' data-tooltip='Explorer' title='Explorer'>
              <Files />
            </button>
            <button onClick={toggleWorkSpaces} className='hover:cursor-pointer hover:text-gray-700 dark:hover:opacity-75 transition-all duration-200' data-tooltip='WorkSpaces' title='WorkSpaces'>
              <BsGrid />
            </button>
          </div>
          <div className='flex flex-row h-full justify-end [&>button]:bg-transparent [&>button]:border-none [&>button]:p-3 [&>button]:relative [&>button]:text-primary [&>button]:dark:text-slate-300 sm:flex-col sm:h-full sm:w-full ss[&>button>svg]:w-full [&>button>svg]:h-full'>
            <button onClick={handleUser} className='hover:cursor-pointer hover:text-gray-700 dark:hover:opacity-75 transition-all duration-200' data-tooltip='Account' title='Account'>
              <User />
            </button>
            <button className='hover:cursor-pointer hover:text-gray-700 dark:hover:opacity-75 transition-all duration-200' onClick={selectSettings} data-tooltip='Manage' title='Manage'>
              <Setting />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavEditor
