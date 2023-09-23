import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='grid place-content-center place-items-center'>
      <figure className='m-0 relative overflow-hidden animate-pulse'>
        <Image src='/rundevs.png' alt='rundevs animation pulse' height={80} width={80} priority quality={100} />
      </figure>
    </div>
  )
}

export default Loading
