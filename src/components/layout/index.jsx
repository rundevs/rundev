import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Navigation from '../Navbar'
import { BsGithub, BsTwitter } from 'react-icons/bs'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen h-full w-full flex flex-col relative items-center dark:bg-primary bg-white'>
      <Navigation />
      <main className='w-full h-max relative flex flex-col items-center'>{children}</main>
      <footer className='dark:bg-secondary bg-slate-100 w-full'>
        <div className='max-w-7xl mx-auto w-full px-4 text-center py-8 flex flex-col items-center md:px-8'>
          <Link href='/'>
            <a className='w-14 h-14 relative'>
              <Image src='/rundevs.png' alt='Rundevs' layout='fill' />
            </a>
          </Link>
          <button className='bg-blue-600 hover:bg-blue-500 text-white text-xl transition-colors duration-200 px-8 pb-[2px] rounded-xl leading-loose my-4 lg:text-2xl lg:leading-loose'>Download for Desktop</button>
          <span className='dark:text-white text-primary mb-4 sm:mb-10 md:text-xl'>Come on, give it a try.</span>
          <section className=' flex flex-col gap-4 w-full sm:flex-row items-center sm:justify-between'>
            <figure className='sm:order-3 flex-grow-0 sm:w-1/2 flex justify-end items-center'>
              <img className='h-6' src='https://badgen.net/github/release/rundevs/rundev' alt='latest release Rundev' title='Latest release' />
            </figure>
            <article className='flex flex-row gap-4 justify-center w-full text-4xl sm:order-2 flex-grow-1'>
              <Link href='https://github.com/rundevs/rundev'>
                <a target='_blank'><BsGithub /></a>
              </Link>
              <Link href='/'>
                <a target='_blank'><BsTwitter /></a>
              </Link>
            </article>
            <article className='flex flex-col items-start sm:order-1 sm:w-1/2 whitespace-nowrap flex-grow-0'>
              <span className='opacity-100 text-sm text-gray-500'>Developer <a href='https://sauterdev.vercel.app/' target='_blank' rel='noreferrer' className='hover:underline hover:text-blue-500'>Luis Gabriel Janco</a></span>
              <span>© 2022 <a href='https://github.com/rundevs' target='_blank' rel='noreferrer' className='hover:underline hover:text-blue-500'>Rundevs</a></span>
            </article>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Layout
