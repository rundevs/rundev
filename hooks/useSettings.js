import { SettingContext } from 'context/SettingProvider'
import { useContext } from 'react'
/**
 * @returns {{settings: {
 *   wordWrap:string,
 *   colorTheme:string,
 *   fontSize:number,
 *   minimap:boolean,
 *   language:string,
 *   storage: boolean,
 *   workspaces: boolean
 *   }, updateSettings: () => void
 * }}
 */
export default function useSettings() {
  const { settings, updateSettings } = useContext(SettingContext)

  return { settings, updateSettings }
}
