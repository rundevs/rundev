import React, { useCallback, useRef } from 'react'
import EditorCode from '@monaco-editor/react'
import useThemes from '../../../hooks/useThemes'
import onedark from './onedark.json'
import style from './editor.module.css'
import useSettings from 'hooks/useSettings'

/**
 * @param {{initialDoc: string, onChange: (newDoc: string) => void}}
 * @returns {JSX.Element}
 */
const Editor = ({ initialDoc, onChange }) => {
  const { settings } = useSettings()
  const { wordWrap, minimap, colorTheme, fontSize } = settings
  const editorRef = useRef(null)
  const { checkIfIsDark } = useThemes()
  const handleChange = useCallback((value) => onChange(value), [onChange])

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
    monaco.editor.defineTheme("atom-one-dark", onedark)
    monaco.editor.setTheme(colorTheme === '' ? themeSystem : colorTheme)
  }

  const handleSave = () => {
    // const content = editorRef.current.getValue()
  }

  const themeSystem = checkIfIsDark() ? 'vs-dark' : 'vs'

  const options = {
    selectOnLineNumbers: true,
    wordWrap: wordWrap,
    minimap: {
      enabled: minimap
    },
    scrollBeyondLastLine: false,
    renderLineHighlight: 'gutter',
    renderIndentGuides: true,
    fontSize: `${fontSize}px`,
    theme: colorTheme === '' ? themeSystem : colorTheme,
    colorDecorators: true,
  }

  return (
    <EditorCode
      value={initialDoc}
      theme={colorTheme === '' ? themeSystem : colorTheme}
      language='markdown'
      onChange={handleChange}
      className={style.editor}
      onMount={handleEditorDidMount}
      options={options}
    />
  )
}

export default Editor
