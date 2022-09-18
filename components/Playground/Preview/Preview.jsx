import React, { useEffect, useRef } from 'react'
import highlightjs from 'highlight.js'
import style from './preview.module.css'
import { marked } from 'marked'
import useThemes from '../../../hooks/useThemes'
import useSettings from 'hooks/useSettings'
import useDoc from 'hooks/useDoc'

const Preview = () => {
  const { checkIfIsDark } = useThemes()
  const { doc } = useDoc()
  const { settings } = useSettings()
  const refMarkdownHtml = useRef(null)

  marked.setOptions({
    highlight: (code, lang = 'shell') => {
      const language = highlightjs.getLanguage(lang) ? lang : 'plaintext'
      return highlightjs.highlight(code, { language }).value
    },
    langPrefix: 'hljs language-',
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })

  const markdown = marked.parse(doc, {
    breaks: true
  })

  useEffect(() => {
    if (settings.colorTheme !== '') {
      switch (settings.colorTheme) {
        case 'atom-one-dark':
          import('highlight.js/styles/atom-one-dark.css')
          break
        case 'atom-one-light':
          import('highlight.js/styles/atom-one-light.css')
          break
        case 'vs-dark':
          import('highlight.js/styles/github-dark-dimmed.css')
          break
        case 'vs':
          import('highlight.js/styles/github.css')
      }
    } else {
      checkIfIsDark()
        ? import('highlight.js/styles/github-dark-dimmed.css')
        : import('highlight.js/styles/atom-one-light.css')
    }
  }, [checkIfIsDark, settings.colorTheme])

  useEffect(() => {
    if (refMarkdownHtml.current) {
      refMarkdownHtml.current.innerHTML = markdown
    }
    return () => {
    }
  }, [markdown])

  return (
    <div className='h-full w-full dark:bg-secondary bg-slate-50 relative box-border overflow-auto dark:text-white text-primary'>
      <div ref={refMarkdownHtml} className={style.markdown} />
    </div>
  )
}

export default Preview
