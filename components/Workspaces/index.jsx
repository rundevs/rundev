import React from 'react'
import useSettings from 'hooks/useSettings'
import { SiJavascript, SiMarkdown, SiTypescript, SiPython, SiGoland, SiRust, SiCsharp, SiVisualstudio } from 'react-icons/si'
import style from './workspaces.module.css'

const programmingLanguages = [
  { lang: 'markdown', label: 'Markdown', icon: <SiMarkdown />, available: true, color: '#fff' },
  { lang: 'javascript', label: 'javaScript', icon: <SiJavascript />, available: true, color: '#efd81d' },
  { lang: 'typescript', label: 'TypeScript', icon: <SiTypescript />, available: false },
  { lang: 'python', label: 'Python', icon: <SiPython />, available: false },
  { lang: 'go', label: 'Go', icon: <SiGoland />, available: false },
  { lang: 'rust', label: 'Rust', icon: <SiRust />, available: false },
  { lang: 'csharp', label: 'C++', icon: <SiCsharp />, available: false },
  { lang: 'visualBasic', label: 'Visual Basic', icon: <SiVisualstudio />, available: false },
]

const Workspaces = () => {
  const { updateSettings } = useSettings()
  const handleLanguage = (lang) => updateSettings('programmingLanguage', lang)
  return (
    <section className={style.workspaces}>
      <article className={style.workspacesContain}>
        <div className={style.workspacesHeader}>
          <h2>Work spaces</h2>
          <p>No more hours saving/extracting/installing locally. Get a more instant development experience. just click and start programming.</p>
        </div>
        <ul className={style.workspacesLangs}>
          {programmingLanguages.map((item, index) => (
            <li key={index} onClick={() => handleLanguage(item.lang)} className={item.available ? style.workItemAvailable : style.workItem}>
              <figure style={{ color: item.color }}>
                {item.icon}
              </figure>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default Workspaces
