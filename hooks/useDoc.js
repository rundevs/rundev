import { useContext, useEffect } from 'react'
import { DocContext } from 'context/DocProvider'
import { INITIAL_DOC_JS, INITIAL_DOC_MD } from 'assets/constants'
import { useRouter } from 'next/router'

const useDoc = () => {
  const { doc, setDoc } = useContext(DocContext)

  const router = useRouter()

  let subscribe = true
  useEffect(() => {
    if (subscribe) handleInitialState(router.asPath)
    return () => {
      subscribe = false
    }
  }, [])

  const handleInitialState = (lang) => {
    switch (lang) {
      case '/md':
        setDoc(INITIAL_DOC_MD)
        break
      case '/js':
        setDoc(INITIAL_DOC_JS)
    }
  }

  return { doc, setDoc, handleInitialState }
}

export default useDoc
