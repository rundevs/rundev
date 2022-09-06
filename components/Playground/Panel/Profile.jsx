import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import style from './panel.module.css'

const Profile = () => {
  const { data: { user: { image, name } } } = useSession()

  const handleLogout = () => signOut()

  return (
    <section className={style.panel}>
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
            <span>Joined: Aug 09 2022</span>
          </div>
        </div>
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
