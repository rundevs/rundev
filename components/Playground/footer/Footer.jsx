import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <span
          data-tooltip='Rundev Application © 2022'
          title='Rundev Application'
          className={style.tooltip}
        >
          Rundev
        </span>
      </div>
      <div>
        <span
          data-tooltip='Indentation'
          title='Indentation'
          className={style.tooltip}
        >
          Spaces: 2
        </span>
        <span
          data-tooltip='Encoding'
          title='Encoding'
          className={style.tooltip}
        >
          UTF-8
        </span>
        <span
          data-tooltip='Line Sequence'
          title='Line Sequence'
          className={style.tooltip}
        >
          LF
        </span>
      </div>
    </footer>
  )
}

export default Footer