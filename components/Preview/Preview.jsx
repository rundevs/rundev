import React, { useEffect, useRef } from 'react'
import highlightjs from 'highlight.js'
import style from './preview.module.css'
import { marked } from 'marked'
import useThemes from '../../hooks/useThemes'
// import 'highlight.js/styles/github-dark.css'
// import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/base16/onedark.css'

const Preview = ({ doc }) => {
  const { checkIfIsDark } = useThemes()
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
    xhtml: false,
  })

  const markdown = marked.parse(doc, {
    breaks: true,
  })

  useEffect(() => {
    checkIfIsDark()
      ? import('highlight.js/styles/github-dark-dimmed.css')
      : import('highlight.js/styles/atom-one-light.css')
  }, [checkIfIsDark])

  useEffect(() => {
    if (refMarkdownHtml.current) {
      refMarkdownHtml.current.innerHTML = markdown
    }
    return () => {
    }
  }, [markdown])

  return (
    <div className={style.preview}>
      <div ref={refMarkdownHtml} className={style.markdown} />
    </div>
  )
}

export default Preview
