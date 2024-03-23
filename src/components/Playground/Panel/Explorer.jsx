'use client'
import useSettings from 'hooks/useSettings'
import File from './File'
import Link from 'next/link'

const folders = [
  {
    id: '100',
    name: 'proyecto-1',
    files: [
      {
        id: '100-0',
        title: 'readme',
        language: 'md'
      },
      {
        id: '100-1',
        title: 'global',
        language: 'css'
      },
      {
        id: '100-2',
        title: 'index',
        language: 'html'
      },
      {
        id: '100-3',
        title: 'main',
        language: 'js'
      }
    ]
  },
  {
    id: '101',
    name: 'spa-project',
    files: [
      {
        id: '101-0',
        title: 'readme',
        language: 'md'
      },
      {
        id: '101-1',
        title: 'main',
        language: 'js'
      },
      {
        id: '101-2',
        title: 'counter',
        language: 'js'
      }
    ]
  }
]

const Explorer = () => {
  const { menu } = useSettings()

  return (
    <section aria-expanded={menu.explorer} className='dark:bg-primary hidden flex-col w-full h-full justify-start aria-expanded:flex'>
      <header className='{style.header} h-12 relative flex flex-shrink-0 flex-row items-center dark:bg-secondary bg-slate-50'>
        <h2 className='text-sm dark:text-gray-300 font-normal uppercase pl-4'>Explorer</h2>
      </header>
      <hr className='m-0 w-full h-[1px] border-0 bg-gray-700 relative flex flex-shrink-0' />
      <div className='bg-primary overflow-x-hidden overflow-y-auto'>
        {folders.map(folder => (
          <details key={folder.id} open className='flex flex-col select-none relative dark:bg-primary open:overflow-y-auto [&>summary]:open:before:content-["\eab4"] [&>div]:pl-7'>
            <summary className='h-6 w-full relative pl-2 m-0 flex items-center cursor-pointer border border-transparent font-medium text-sm leading-5 before:content-["\eab6"] before:font-[codicon] before:text-base before:mr-2 focus:border focus:border-blue-500 dark:hover:bg-secondary hover:bg-slate-200'>
              <span>{folder.name}</span>
            </summary>
            {folder.files.map((file, index) => (
              <File key={index} file={file} folderId={folder.id} />
            ))}
          </details>
        ))}
        <Link href='/dashboard'>Go to DashBoard</Link>
      </div>
    </section>
  )
}

export default Explorer
