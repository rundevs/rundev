import React from 'react'
import Head from 'next/head'
import { programmingLanguages } from 'assets/workspaces'

import style from '../styles/workspaces.module.css'
import WorkspacesItem from 'components/WorkSpaceItem'

const WorkSpaceNotAvailable = ({ color, icon, label }) => (
  <div className={style.workItem}>
    <figure style={{ color }}>{icon}</figure>
    <span>{label}</span>
  </div>
)

const App = () => {
  return (
    <>
      <Head>
        <title>
          Rundev | Markdown preview | Edit, create, and improve your ideas ✨
        </title>
      </Head>
      <section className={style.workspaces}>
        <article className={style.workspacesContain}>
          <div className={style.workspacesHeader}>
            <h2>Work spaces</h2>
            <p>
              No more hours saving/extracting/installing locally. Get a more
              instant development experience. just click and start programming.
            </p>
          </div>
          <div className={style.workspacesLangs}>
            {programmingLanguages.map((item, index) =>
              item.available
                ? <WorkspacesItem key={index} />
                : <WorkSpaceNotAvailable key={index} />
            )}
          </div>
        </article>
      </section>
    </>
  )
}

export default App
