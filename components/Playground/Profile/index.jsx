import React from 'react'
import style from './profile.module.css'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

const Profile = () => {
  const { data: { user: { email, image, name } } } = useSession()

  const handleLogout = () => signOut()

  return (
    <section className={style.profile}>
      <article className={style.sectionItem}>
        <header className={style.sectionType}>
          <span>Account:</span><strong>User</strong>
        </header>
        <span>This is account information</span>
        <div className={style.content}>
          <figure className={style.photo}>
            <Image src={image} alt={name} title={name} layout='fill' />
          </figure>
          <div>
            <h2>{name}</h2>
            <span>Created: Tue Aug 09 2022</span>
          </div>
        </div>
      </article>

      <article className={style.sectionItem}>
        <header className={style.sectionType}>
          <span>Editor:</span><strong>Word Wrap</strong>
        </header>
        <div className={style.content}>
          <span>Controls how lines should wrap.</span>
        </div>
        <select>
          <option value="on" key="on">on</option>
          <option value="of" key="of">off</option>
        </select>
      </article>

      <article className={style.sectionItem}>
        <header className={style.sectionType}>
          <span>Wokbench:</span><strong>Color Theme</strong>
        </header>
        <div className={style.content}>
          <span>Specifies the color theme used in the workbench.</span>
        </div>
        <select>
          <option value="system" key="system">System</option>
          <option value="atom-one-dark" key="atom-one-dark">Atom One Dark</option>
          <option value="atom-one-light" key="atom-one-light">Atom One Light</option>
          <option value="github-dark" key="github-dark">GitHub Dark</option>
          <option value="github" key="github">GitHub</option>
        </select>
      </article>

      <article className={style.sectionItem}>
        <header className={style.sectionType}>
          <span>Editor:</span><strong>Font Size</strong>
        </header>
        <div className={style.content}>
          <span>Controls the font size in pixels.</span>
        </div>
        <input autoCorrect='off' autoCapitalize='off' spellCheck='false' type='number' wrap='of' value={14} min={1} max={100} step={1} />
      </article>

      <article className={style.sectionItem}>
        <header className={style.sectionType}>
          <span>Account:</span><strong>Sign out</strong>
        </header>
        <div className={style.content}>
          <span>When you log out your projects will not be saved in the cloud.</span>
        </div>
        <button onClick={handleLogout} className={style.btn}>Log out</button>
      </article>
    </section>
  )
}

export default Profile