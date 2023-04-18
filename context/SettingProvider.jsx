import React, { createContext, useEffect, useState } from 'react'

const SETTING_KEY = 'settings'

const initialState = {
  wordWrap: 'on',
  colorTheme: '',
  fontSize: 14,
  minimap: false,
  language: 'en',
  storage: false,
  workspaces: true
}

const manameStorage = (property, obj) => {
  const isDocument = typeof document !== 'undefined'
  if (isDocument) {
    if (property === 'get') {
      return window.localStorage.getItem(SETTING_KEY)
    } else {
      window.localStorage.setItem(SETTING_KEY, JSON.stringify(obj))
    }
  }
}

const getSettingStorage = () => {
  const storage = manameStorage('get')
  const currentState = storage ? JSON.parse(storage) : initialState
  return { ...currentState, storage: Boolean(storage) }
}

export const SettingContext = createContext(initialState)

const SettingProvider = ({ children }) => {
  /**
   * @type {[{
   *  wordWrap:string,
   *  colorTheme:string,
   *  fontSize:number,
   *  minimap:boolean,
   *  language:string,
   *  storage: boolean,
   *  workspaces: boolean
   * }]}
   */
  const [settings, setSettings] = useState(() => getSettingStorage())
  let subscribe = true
  useEffect(() => {
    if (subscribe) {
      !settings.storage && manameStorage('set', settings)
    }
    return () => {
      subscribe = false
    }
  }, [settings.storage])

  useEffect(() => {
    if (subscribe) {
      document.querySelector('html').className = settings.colorTheme
    }
    return () => {
      subscribe = false
    }
  }, [settings.colorTheme])

  /**
   * @param {'wordWrap' | 'colorTheme' | 'fontSize' | 'minimap' | 'language' | 'workspaces'}  name
   */
  const updateSettings = (name, value) => {
    const newSettings = { ...settings, [name]: value }
    manameStorage('set', newSettings)
    setSettings(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <SettingContext.Provider value={{ settings, updateSettings }}>{children}</SettingContext.Provider>
  )
}

export default SettingProvider
