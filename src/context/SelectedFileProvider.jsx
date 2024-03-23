import { useEffect, useState, createContext } from 'react'

const SELECTEDFILE_KEY = 'selectedFile'

const initialState = { folderId: '', fileId: '', language: '', storage: false }

const manageStorage = (property, obj) => {
  const isDocument = typeof document !== 'undefined'
  if (isDocument) {
    if (property === 'get') return window.localStorage.getItem(SELECTEDFILE_KEY)
    else window.localStorage.setItem(SELECTEDFILE_KEY, JSON.stringify(obj))
  }
}

const getSelectFileStorage = () => {
  const storage = manageStorage('get')
  const currentState = storage ? JSON.parse(storage) : initialState
  return { ...currentState, storage: Boolean(storage) }
}

export const SelectedFileContext = createContext(initialState)

const SelectedFileProvider = ({ children }) => {
  /**
   * @type {[{
   *  fileId:string,
   *  folderId:string,
   *  language:string
   *  storage:boolean,
   * }]}
   */
  const [selectedFile, setSelectedFile] = useState(() => getSelectFileStorage())
  let subscribe = true
  useEffect(() => {
    if (subscribe) {
      !selectedFile.storage && manageStorage('set', selectedFile)
    }
    return () => {
      subscribe = false
    }
  }, [selectedFile.storage])

  /**
   * @param {{folderId:string, fileId:string, language:string}} obj
   */
  const updateSelectedFile = (obj) => {
    const newSelectedFile = { ...selectedFile, ...obj }
    manageStorage('set', newSelectedFile)
    setSelectedFile(prevState => ({ ...prevState, ...obj }))
  }

  return (
    <SelectedFileContext.Provider value={{ selectedFile, updateSelectedFile }}>{children}</SelectedFileContext.Provider>
  )
}

export default SelectedFileProvider
