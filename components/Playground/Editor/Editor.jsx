import React, { useCallback, useRef } from 'react'
import EditorCode from '@monaco-editor/react'
import useThemes from '../../../hooks/useThemes'
// import onedark from './onedark.json'
import style from './editor.module.css'

/**
 * @param {{initialDoc: string, onChange: (newDoc: string) => void}}
 * @returns {JSX.Element}
 */
const Editor = ({ initialDoc, onChange }) => {
  const handleChange = useCallback((value) => onChange(value), [onChange])
  const editorRef = useRef(null)
  const { theme, checkIfIsDark } = useThemes()

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
    console.log({ monaco, editor })
    // monaco.editor.defineTheme("onedark", onedark)
    // monaco.editor.setTheme("onedark")
  }

  const handleSave = () => {
    // const content = editorRef.current.getValue()
  }

  const options = {
    selectOnLineNumbers: true,
    wordWrap: 'on',
    scrollBeyondLastLine: false,
    renderLineHighlight: 'gutter',
    renderIndentGuides: true,
  }

  return (
    <EditorCode
      value={initialDoc}
      theme={checkIfIsDark() ? 'vs-dark' : 'vs'}
      language='markdown'
      onChange={handleChange}
      className={style.editor}
      onMount={handleEditorDidMount}
      options={options}
    />
  )
}

export default Editor
