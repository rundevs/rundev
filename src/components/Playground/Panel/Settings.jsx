/* eslint-disable no-octal-escape */
import React from 'react'
import useSettings from 'hooks/useSettings'

const Settings = () => {
  const { settings: { colorTheme, minimap, fontSize, wordWrap }, menu, updateSettings } = useSettings()

  const handleMinimap = event => updateSettings('minimap', event.target.checked)
  const handleFontSize = event => updateSettings('fontSize', event.target.value)
  const handleTheme = event => updateSettings('colorTheme', event.target.value)
  const handleWordWrap = event => updateSettings('wordWrap', event.target.value)

  return (
    <section aria-expanded={menu.settings} className='hidden aria-expanded:flex flex-col w-full h-full text-primary dark:text-slate-200 overflow-y-auto overflow-x-hidden relative [&>article]:flex [&>article]:flex-col [&>article]:p-4 [&>article]:w-full [&>article]:h-max [&>article]:relative [&>article]:text-sm'>
      <article className='focus-within:border border border-transparent focus-within:border-gray-600 dark:hover:bg-neutral-700/50 hover:bg-slate-200'>
        <header className='flex flex-row items-center gap-1 font-bold text-base mt-1'>
          <span className='dark:text-neutral-400'>Editor:</span>
          <strong>Word Wrap</strong>
        </header>
        <div className='flex flex-row items-center gap-1 py-2'>
          <span>Controls how lines should wrap.</span>
        </div>
        <select
          value={wordWrap}
          onChange={handleWordWrap}
          className='max-w-[200px] px-2 h-7 border border-slate-700 dark:bg-secondary rounded outline-none dark:hover:bg-neutral-900 focus:border-blue-500'
        >
          <option value='on' key='on'>
            on
          </option>
          <option value='of' key='of'>
            off
          </option>
        </select>
      </article>

      <article className='focus-within:border border border-transparent focus-within:border-gray-600 dark:hover:bg-neutral-700/50 hover:bg-slate-200'>
        <header className='flex flex-row items-center gap-1 font-bold text-base mt-1'>
          <span className='dark:text-neutral-400'>Workbench:</span>
          <strong>Theme</strong>
        </header>
        <div className='flex flex-row items-center gap-1 py-2'>
          <span>Specifies the color theme used in the workbench.</span>
        </div>
        <select
          value={colorTheme}
          onChange={handleTheme}
          className='max-w-[200px] px-2 h-7 border border-slate-700 dark:bg-secondary rounded outline-none dark:hover:bg-neutral-900 focus:border-blue-500'
        >
          <option value='' disabled hidden>
            System
          </option>
          <option value='atom-one-dark'>Atom One Dark</option>
          <option value='atom-one-light'>Atom One Light</option>
          <option value='vs-dark'>GitHub Dark</option>
          <option value='vs'>GitHub</option>
        </select>
      </article>

      <article className='focus-within:border border border-transparent focus-within:border-gray-600 dark:hover:bg-neutral-700/50 hover:bg-slate-200 focus:border-blue-500'>
        <header className='flex flex-row items-center gap-1 font-bold text-base mt-1'>
          <span className='dark:text-neutral-400'>Editor:</span>
          <strong>Font Size</strong>
        </header>
        <div className='flex flex-row items-center gap-1 py-2'>
          <span>Controls the font size in pixels.</span>
        </div>
        <input
          value={fontSize}
          onChange={handleFontSize}
          type='number'
          className='max-w-[200px] px-2 h-7 border border-slate-700 dark:bg-secondary rounded outline-none dark:hover:bg-neutral-900 focus:border-blue-500'
        />
      </article>

      <article className='focus-within:border border border-transparent focus-within:border-gray-600 dark:hover:bg-neutral-700/50 hover:bg-slate-200 focus:border-blue-500'>
        <header className='flex flex-row items-center gap-1 font-bold text-base mt-1'>
          <span className='dark:text-neutral-400'>Editor:</span>
          <strong>Minimap</strong>
        </header>
        <div className='flex flex-row items-center gap-1 py-2'>
          <label className='flex flex-row items-center gap-1 py-2'>
            <input
              checked={minimap}
              onChange={handleMinimap}
              type='checkbox'
              className='peer m-0 p-0 absolute overflow-hidden whitespace-nowrap w-0 border-none'
            />
            <span className='flex flex-row items-center flex-shrink-0 w-full before:content-[""] before:border before:border-gray-700 before:text-blue-500 before:rounded before:h-5 before:w-5 before:mr-1 before:flex before:flex-shrink-0 before:flex-row before:items-center before:justify-center before:active:border before:active:border-blue-500  peer-checked:before:content-["\2713"]'>
              Controls whether the minimap is shown.
            </span>
          </label>
        </div>
      </article>
    </section>
  )
}

export default Settings
