import HighlightCode from 'components/HighlightCode'

const FrameDemo = ({ codeString }) => {
  return (
    <div className='relative py-4  max-w-3xl mx-auto flex flex-col justify-center items-center'>
      <div className='dark:bg-primary bg-slate-100 shadow-xl shadow-blue-500/5 relative z-[1] flex flex-col border border-gray-700 rounded-lg max-w-2xl mx-auto w-full overflow-hidden'>
        <div className='flex flex-row items-center border-b border-gray-700 gap-2 px-4'>
          <span className='w-3 h-3 rounded-full bg-red-500' />
          <span className='w-3 h-3 rounded-full bg-yellow-400' />
          <span className='w-3 h-3 rounded-full bg-green-500' />
          <div className='bg-secondary h-full py-1 px-12 ml-2 text-lg border-x border-gray-700'>index.js</div>
        </div>
        <div className='flex flex-row w-full overflow-x-auto'>
          <div className='min-w-max w-1/2 border-r border-gray-700 pl-2 pt-3 pb-10'>
            <HighlightCode codeString={codeString} />
          </div>
          <div className='px-4 leading-none flex flex-col justify-between py-5 w-full pb-12'>
            <div>
              <span className='text-red-500 pr-3'>{'>'}</span> Hello world
            </div>
            <div>
              <span className='text-red-500 pr-3'>{'>'}</span> 71
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-auto left-auto w-3/4 h-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl' />
    </div>
  )
}

export default FrameDemo
