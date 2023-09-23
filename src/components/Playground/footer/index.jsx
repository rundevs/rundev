import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-50 dark:bg-secondary dark:text-gray-300 text-primary h-[23px] flex flex-row justify-between items-center w-full border-t border-gray-700 text-sm text-sl [&>div]:flex [&>div]:h-full [&>div]:items-center [&>div]:overflow-hidden [&>div>span]:px-3 [&>div>span]:h-full [&>div>span]:whitespace-nowrap'>
      <div className='[&>span]:dark:hover:bg-primary [&>span]:hover:bg-slate-200'>
        <span
          data-tooltip='Rundev Application © 2022'
          title='Rundev Application'
          className='cursor-default'
        >
          Rundev
        </span>
      </div>
      <div className='[&>span]:cursor-default'>
        <span
          data-tooltip='Indentation'
          title='Indentation'
          className='dark:hover:bg-primary hover:bg-slate-100'
        >
          Spaces: 2
        </span>
        <span
          data-tooltip='Encoding'
          title='Encoding'
          className='dark:hover:bg-primary hover:bg-slate-100'
        >
          UTF-8
        </span>
        <span
          data-tooltip='Line Sequence'
          title='Line Sequence'
          className='dark:hover:bg-primary hover:bg-slate-100'
        >
          LF
        </span>
      </div>
    </footer>
  )
}

export default Footer
