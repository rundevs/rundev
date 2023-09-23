import React from 'react'
import { IoLanguage } from 'react-icons/io5'

const Languages = () => {
  return (
    <div className='flex dark:text-white text-black text-inherit items-center font-semibold text-lg gap-2 py-4 w-full justify-center md:hidden'>
      <span>English</span>
      <IoLanguage size={22} />
    </div>
  )
}

export default Languages
