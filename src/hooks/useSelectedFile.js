import { SelectedFileContext } from 'context/SelectedFileProvider'
import { useContext } from 'react'

/**
 * @returns {{
 *  selectedFile: { fileId:string, folderId:string, language:string storage:boolean },
 *  updateSelectedFile: (obj:{folderId:string, fileId:string, language:string}) => void
 * }}
 */
const useSelectedFile = () => {
  const { selectedFile, updateSelectedFile } = useContext(SelectedFileContext)

  return { selectedFile, updateSelectedFile }
}

export default useSelectedFile
