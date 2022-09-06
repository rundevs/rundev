import React from 'react'
import useSettings from 'hooks/useSettings'
import style from './panel.module.css'

const Settings = () => {
  const { settings: { colorTheme, minimap, fontSize, wordWrap }, updateSettings } = useSettings()

  const handleMinimap = event => updateSettings('minimap', event.target.checked)
  const handleFontSize = event => updateSettings('fontSize', event.target.value)
  const handleTheme = event => updateSettings('colorTheme', event.target.value)
  const handleWordWrap = event => updateSettings('wordWrap', event.target.value)

  return (
    <section className={style.panel}>
      <article className={style.sectionItem}>
        <header className={style.sectionType}>
          <span>Editor:</span><strong>Word Wrap</strong>
        </header>
        <div className={style.content}>
          <span>Controls how lines should wrap.</span>
        </div>
        <select value={wordWrap} onChange={handleWordWrap}>
          <option value='on' key='on'>on</option>
          <option value='of' key='of'>off</option>
        </select>
      </article>

      <article className={style.sectionItem}>
        <header className={style.sectionType}>
          <span>Workbench:</span><strong>Theme</strong>
        </header>
        <div className={style.content}>
          <span>Specifies the color theme used in the workbench.</span>
        </div>
        <select value={colorTheme} onChange={handleTheme}>
          <option value='' disabled hidden>System</option>
          <option value='atom-one-dark'>Atom One Dark</option>
          <option value='atom-one-light'>Atom One Light</option>
          <option value='vs-dark'>GitHub Dark</option>
          <option value='vs'>GitHub</option>
        </select>
      </article>

      <article className={style.sectionItem}>
        <header className={style.sectionType}>
          <span>Editor:</span><strong>Font Size</strong>
        </header>
        <div className={style.content}>
          <span>Controls the font size in pixels.</span>
        </div>
        <input value={fontSize} onChange={handleFontSize} type='number' className={style.input} />
      </article>

      <article className={style.sectionItem}>
        <header className={style.sectionType}>
          <span>Editor:</span><strong>Minimap</strong>
        </header>
        <div className={style.content}>
          <label className={style.labelInput}>
            <input checked={minimap} onChange={handleMinimap} type='checkbox' className={style.inputCheckbox} />
            <span>Controls whether the minimap is shown.
            </span>
          </label>
        </div>
      </article>
    </section>
  )
}

export default Settings
