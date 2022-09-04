import React from 'react'
import style from './header.module.css'

const BarHamburger = () => {
  return (
    <div className={style.burger}>
      <span className='dark:bg-white bg-primary' />
      <span className='dark:bg-white bg-primary' />
      <span className='dark:bg-white bg-primary' />
    </div>
  )
}

export default BarHamburger
