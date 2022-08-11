import { SettingContext } from 'context/SettingProvider'
import { useContext } from 'react'

export default function useSettings() {
  const { settings, updateSettings } = useContext(SettingContext)

  return { settings, updateSettings }
}
