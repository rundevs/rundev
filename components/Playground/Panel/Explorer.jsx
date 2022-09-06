import React from 'react'
import style from './explorer.module.css'

const languages = { js: '.js', md: '.md' }

const Explorer = () => {
  const { js, md } = languages
  return (
    <section className={style.explorer}>
      <header className={style.header}>
        <h2>Explorer</h2>
      </header>
      <details open className={style.filesmd}>
        <summary>Markdown</summary>
        <div className={style.file} title='markdown/readme.md' aria-selected role='treeitem'>
          <span className={style.file}>readme{md}</span>
        </div>
      </details>
      <hr />
      <details open className={style.filesjs}>
        <summary>JavaScript</summary>
        <div className={style.file} aria-selected>
          <span className={style.file}>notes{js}</span>
        </div>
      </details>
    </section>
  )
}

export default Explorer
