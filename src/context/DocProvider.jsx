import { createContext, useState } from 'react'

const initialState = ''

const contextState = {
  doc: initialState
}

export const DocContext = createContext(contextState)

export const DocProvider = ({ children }) => {
  const [doc, setDoc] = useState(initialState)

  return (
    <DocContext.Provider value={{ doc, setDoc }}>
      {children}
    </DocContext.Provider>
  )
}
