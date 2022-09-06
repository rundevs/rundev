import Image from 'next/image'
import React from 'react'
import style from './loading.module.css'

const Loading = () => {
  return (
    <div className={style.loading}>
      <figure>
        <Image src='/rundevs.png' alt='rundevs animation pulse' height={80} width={80} priority quality={100} />
      </figure>
    </div>
  )
}

export default Loading
