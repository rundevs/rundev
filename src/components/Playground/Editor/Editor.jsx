'use client'
import React, { useCallback, useRef } from 'react'
import EditorCode from '@monaco-editor/react'
import useThemes from '../../../hooks/useThemes'
import onedark from './themes/onedark.json'
import onelight from './themes/onelight.json'
import style from './editor.module.css'
import useSettings from 'hooks/useSettings'
import Loading from 'components/Loading'

const Editor = ({ initialDoc, onChange, language }) => {
  const { settings } = useSettings()
  const { wordWrap, minimap, colorTheme, fontSize } = settings
  const editorRef = useRef(null)
  const { checkIfIsDark } = useThemes()

  const handleChange = useCallback((value) => onChange(value), [onChange])

  const themeSystem = checkIfIsDark() ? 'vs-dark' : 'vs'

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
    monaco.editor.defineTheme('atom-one-dark', onedark)
    monaco.editor.defineTheme('atom-one-light', onelight)
    // monaco.editor.setTheme(colorTheme === '' ? themeSystem : colorTheme)
  }

  const options = {
    selectOnLineNumbers: true,
    wordWrap,
    minimap: {
      enabled: minimap
    },
    scrollBeyondLastLine: false,
    renderLineHighlight: 'gutter',
    renderIndentGuides: true,
    fontSize: `${fontSize}px`,
    theme: themeSystem,
    // theme: colorTheme === '' ? themeSystem : colorTheme,
    colorDecorators: true
  }

  return (
    <EditorCode
      value={initialDoc}
      theme={themeSystem}
      // theme={colorTheme === '' ? themeSystem : colorTheme}
      language={language}
      onChange={handleChange}
      className={style.editor}
      onMount={handleEditorDidMount}
      options={options}
      loading={
        <div className='flex flex-row justify-center items-center w-full h-full bg-primary'>
          <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-red-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
          </svg>
          Cargando Editor
        </div>
      }
    />
  )
}

export default Editor
