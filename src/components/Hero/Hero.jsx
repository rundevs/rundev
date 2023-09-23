import { programmingLanguages } from 'assets/workspaces'
import WorkspacesItem from 'components/WorkSpaceItem'
import React from 'react'

const WorkSpaceNotAvailable = ({ color, icon, label }) => (
  <div
    style={{ borderColor: color.secondary, backgroundColor: color.primary }}
    className='flex flex-row items-center gap-2 w-max px-4 py-2 rounded-xl border saturate-50 grayscale opacity-50 text-lg md:text-xl lg:text-2xl lg:py-4 lg:px-8'
    title='Available soon'
  >
    <figure style={{ color: color.secondary }}>{icon}</figure>
    <span>{label}</span>
  </div>
)

const Hero = () => {
  return (
    <article className='flex flex-col md:items-center md:justify-center lg:flex-row pb-10 max-w-7xl mx-auto xl:py-11'>
      <div className='flex flex-col w-full max-w-7xl pb-5 lg:pl-6 lg:w-[60%] xl:pl-8'>
        <header className='dark:text-white text-primary flex flex-col gap-8 w-full max-w-4xl md:mx-auto md:text-center lg:text-left'>
          <h2 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
            The <span className='text-red-500'>Rundev</span> is a <span className='text-blue-500'>Playground</span> for your favorite<span className='text-green-500'> Programming language</span> at<span className='text-yellow-400'> runtime.</span>
          </h2>
          <p className='dark:text-gray-300 text-primary w-full max-w-4xl text-xl md:mx-auto md:text-center sm:text-2xl lg:text-left'>
            It allows you to edit your code in real-time, and see the result instantly.
            No more hours <span className='dark:text-white text-black'>saving/extracting/installing</span> locally. Get a more instant development experience. just click and start programming.
          </p>
        </header>
        {/* <div className='w-full flex flex-row flex-wrap gap-4 py-5 z-10 text-white'>
          <Link href='/app'>
            <a className='bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl transition-colors duration-200'>Open in your Browser</a>
          </Link>
          <Link href={mounted && isMobile ? '#platforms' : '/'}>
            <a title='pre-release' className='bg-transparent hover:bg-secondary/50 dark:hover:bg-secondary hover:bg-slate-100 dark:text-white text-primary border border-gray-500 backdrop-blur-sm px-5 py-2 rounded-xl transition-colors duration-200'>
              {mounted && isMobile ? 'Download' : `Download for ${platform}`}
            </a>
          </Link>
        </div> */}
      </div>
      <div className='w-full flex flex-col gap-8 relative h-full py-5 md:max-w-3xl lg:w-[43%] lg:pr-6 lg:pt-0 xl:pr-8'>
        <div className='flex flex-row flex-wrap items-center gap-4 select-none md:justify-center lg:justify-end lg:gap-5 xl:justify-center'>
          <h2 className='dark:text-white text-primary bg-slate-100 dark:bg-secondary w-max px-4 py-2 rounded-xl border border-gray-700 shadow-none transition-all duration-100 relative text-lg  md:text-xl lg:text-2xl lg:py-4 lg:px-8 lg:border-2'>Work spaces:</h2>
          {programmingLanguages.map((item, index) =>
            item.available
              ? <WorkspacesItem key={index} color={item.color} icon={item.icon} label={item.label} lang={item.lang} />
              : <WorkSpaceNotAvailable key={index} color={item.color} icon={item.icon} label={item.label} />
          )}
        </div>
      </div>
    </article>
  )
}

export default Hero
