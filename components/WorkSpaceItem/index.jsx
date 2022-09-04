import React from 'react'
import useSettings from 'hooks/useSettings'
import Link from 'next/link'

const WorkspacesItem = ({ lang, color, label, icon }) => {
  const { updateSettings } = useSettings()
  const handleLanguage = (lang) => updateSettings('programmingLanguage', lang)

  return (
    <Link href={`/${lang}`}>
      <a
        onClick={() => handleLanguage(lang)}
        style={{ borderColor: color.secondary, backgroundColor: color.primary, boxShadow: `0 0 15px -3px ${color.primary}, 0 0 6px -4px ${color.primary}` }}
        aria-label={color.secondary}
        className='flex flex-row items-center gap-5 w-max px-4 py-2 rounded-xl border shadow-none brightness-90 hover:brightness-100 transition-all duration-100 hover:scale-105 text-lg md:text-xl lg:text-2xl lg:py-4 lg:px-8 lg:border-2'
      >
        <figure style={{ color: color.secondary }}>{icon}</figure>
        <span>{label}</span>
      </a>
    </Link>
  )
}

export default WorkspacesItem
