import React from 'react'
import useSettings from 'hooks/useSettings'
import style from '../../styles/workspaces.module.css'
import Link from 'next/link'

const WorkspacesItem = ({ lang, color, label, icon }) => {
  const { updateSettings } = useSettings()
  const handleLanguage = (lang) => updateSettings('programmingLanguage', lang)

  return (
    <Link href={`/${lang}`}>
      <a
        onClick={() => handleLanguage(lang)}
        className={style.workItemAvailable}
      >
        <figure style={{ color }}>{icon}</figure>
        <span>{label}</span>
      </a>
    </Link>
  )
}

export default WorkspacesItem
