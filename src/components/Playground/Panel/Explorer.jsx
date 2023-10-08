import React from 'react'

const languagesCss = {
  js: <div className='before:text-[22px] before:content-["\E051"] before:text-yellow-300' />,
  md: <div className='before:text-[22px] before:content-["\E04D"] before:text-blue-400' />,
  css: <div className='before:text-[22px] before:content-["\E01D"] before:text-blue-400' />,
  html: <div className='before:text-[22px] before:content-["\E048"] before:text-red-400' />
}

const folders = [
  {
    id: '100',
    name: 'proyecto-1',
    files: [
      {
        id: '0',
        title: 'readme',
        language: 'md'
      },
      {
        id: '1',
        title: 'global',
        language: 'css'
      },
      {
        id: '2',
        title: 'index',
        language: 'html'
      },
      {
        id: '3',
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
        id: '0',
        title: 'readme',
        language: 'md'
      },
      {
        id: '1',
        title: 'main',
        language: 'js'
      },
      {
        id: '2',
        title: 'counter',
        language: 'js'
      }
    ]
  }
]

const Explorer = () => {
  return (
    <section className='dark:bg-primary flex flex-col w-full h-full justify-start'>
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
            {folder.files.map(file => (
              <div
                key={file.id}
                className='flex items-center h-6 dark:hover:bg-secondary hover:bg-slate-200 overflow-hidden relative [&>div]:before:font-[seti] cursor-pointer'
                title={`${file.title}.${file.language}`}
                aria-selected
                role='treeitem'
              >
                {languagesCss[file.language]}
                <span className='text-sm pl-1'>{file.title}.{file.language}</span>
              </div>
            ))}
          </details>
        ))}
      </div>
    </section>
  )
}

export default Explorer
