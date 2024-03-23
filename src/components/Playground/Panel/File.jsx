'use client'
import useSelectedFile from 'hooks/useSelectedFile'
import React from 'react'

const languagesCss = {
  js: <div className='before:text-[22px] before:content-["\E051"] before:text-yellow-300' />,
  md: <div className='before:text-[22px] before:content-["\E04D"] before:text-blue-400' />,
  css: <div className='before:text-[22px] before:content-["\E01D"] before:text-blue-400' />,
  html: <div className='before:text-[22px] before:content-["\E048"] before:text-red-400' />
}

const File = ({ folderId, file }) => {
  const { selectedFile, updateSelectedFile } = useSelectedFile()
  return (
    <div
      key={file.id}
      onClick={() => {
        updateSelectedFile({
          folderId,
          fileId: file.id,
          language: file.language
        })
      }}
      aria-selected={selectedFile.fileId === file.id}
      // aria-selected={selectedFile.fileId === file.id ? 'true' : 'false'}
      className='flex items-center h-6 dark:hover:bg-secondary hover:bg-slate-200 overflow-hidden relative [&>div]:before:font-[seti] cursor-pointer aria-selected:bg-secondary aria-selected:brightness-125'
      title={`${file.title}.${file.language}`}
      role='treeitem'
    >
      {languagesCss[file.language]}
      <span className='text-sm pl-1'>{file.title}.{file.language}</span>
    </div>
  )
}

export default File
