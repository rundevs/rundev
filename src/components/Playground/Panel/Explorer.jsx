import React from 'react'

const languages = { js: '.js', md: '.md' }

const Explorer = () => {
  const { js, md } = languages
  return (
    <section className='dark:bg-primary flex flex-col w-full h-full justify-start [&>details>div]:pl-7 [&>details>div]:flex [&>details>div]:flex-row [&>details>div]:items-center [&>details>div]:cursor-pointer [&>details>div]:leading-none [&>details>div]:before:bg-unset [&>details>div]:before:font-[seti] [&>details>div]:before:text-[24px] [&>details>div]:before:mr-1'>
      <header className='{style.header} h-12 relative flex flex-shrink-0 flex-row items-center dark:bg-secondary bg-slate-50'>
        <h2 className='text-sm dark:text-gray-300 font-normal uppercase pl-4'>Explorer</h2>
      </header>
      <details open className='{style.filesmd} flex flex-col select-none relative dark:bg-secondary open:h-full open:overflow-y-auto [&>summary]:open:before:content-["\eab4"] [&>div]:last:mb-4'>
        <summary className='h-6 w-full relative pl-2 m-0 flex items-center cursor-pointer border border-transparent font-medium text-sm leading-5 dark:bg-secondary before:content-["\eab6"] before:font-[codicon] before:text-base before:mr-2 focus:border focus:border-blue-500 dark:hover:bg-primary hover:bg-slate-200'>Markdown</summary>
        <div className='{style.file} dark:hover:bg-primary hover:bg-slate-200 before:text-blue-500 before:content-["\E04D"]' title='markdown/readme.md' aria-selected role='treeitem'>
          <span className='{style.file}'>readme{md}</span>
        </div>
      </details>
      <hr className='m-0 w-full h-[1px] border-0 bg-gray-700 relative flex flex-shrink-0' />
      <details open className='{style.filesjs} flex flex-col select-none relative dark:bg-secondary open:h-full open:overflow-y-auto [&>summary]:open:before:content-["\eab4"]'>
        <summary className='h-6 w-full relative pl-2 m-0 flex items-center cursor-pointer border border-transparent font-medium text-sm leading-5 dark:bg-secondary before:content-["\eab6"] before:font-[codicon] before:text-base before:mr-2 focus:border focus:border-blue-500 dark:hover:bg-primary hover:bg-slate-200'>JavaScript</summary>
        <div className='{style.file} dark:hover:bg-primary hover:bg-slate-200 before:text-yellow-300 before:content-["\E051"]' aria-selected>
          <span className='{style.file}'>notes{js}</span>
        </div>
      </details>
    </section>
  )
}

export default Explorer
