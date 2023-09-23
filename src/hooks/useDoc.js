import { useContext, useEffect } from 'react'
import { DocContext } from 'context/DocProvider'
import { INITIAL_DOC_JS, INITIAL_DOC_MD } from 'assets/constants'
import { useRouter } from 'next/router'

const langs = { '/md': INITIAL_DOC_MD, '/js': INITIAL_DOC_JS }

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
    Object.entries(langs).forEach(([langName, doc]) => {
      lang === langName && setDoc(doc)
    })
  }

  return { doc, setDoc, handleInitialState }
}

export default useDoc
