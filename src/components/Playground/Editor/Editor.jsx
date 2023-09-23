import React, { useCallback, useRef } from 'react'
import EditorCode from '@monaco-editor/react'
import useThemes from '../../../hooks/useThemes'
import onedark from './themes/onedark.json'
import onelight from './themes/onelight.json'
import style from './editor.module.css'
import useSettings from 'hooks/useSettings'
import Loading from 'components/Loading'

/**
 * @param {{initialDoc: string, onChange: (newDoc: string) => void, language: string}}
 * @returns {JSX.Element}
 */
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
    monaco.editor.setTheme(colorTheme === '' ? themeSystem : colorTheme)
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
    theme: colorTheme === '' ? themeSystem : colorTheme,
    colorDecorators: true
  }

  return (
    <EditorCode
      value={initialDoc}
      theme={colorTheme === '' ? themeSystem : colorTheme}
      language={language}
      onChange={handleChange}
      className={style.editor}
      onMount={handleEditorDidMount}
      options={options}
      loading={<Loading />}
    />
  )
}

export default Editor
