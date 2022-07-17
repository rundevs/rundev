import React from 'react'
import { Language } from '../../../assets/icons'
import style from '../header.module.css'

const Languages = () => {
  return (
    <div className={style.language}>
      <Language />
      <span>English</span>
    </div>
  )
}

export default Languages