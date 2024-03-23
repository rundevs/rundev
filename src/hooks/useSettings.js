import { SettingContext } from 'context/SettingProvider'
import { useContext, useEffect, useState } from 'react'

const initialState = {
  explorer: false,
  user: false,
  settings: false
}

const $el = (selector) => document.querySelector(selector)

/**
 * @returns {{
 *  menu: {
 *    explorer: boolean, user: false, settings: false
 *  },
 *  settings: {
 *    wordWrap:string,
 *    colorTheme:string,
 *    fontSize:number,
 *    minimap:boolean,
 *    language:string,
 *    storage: boolean,
 *    workspaces: boolean,
 *    menu: string
 *  },  updateSettings: () => void
 * }}
 */
export default function useSettings() {
  const { settings, updateSettings } = useContext(SettingContext)
  const [menu, setMenu] = useState(initialState)

  useEffect(() => {
    settings.menu === '' ? closeMenu() : handleSelectMenu(settings.menu)
  }, [settings.menu])

  const handleSelectMenu = (menuName) => {
    setMenu({ ...initialState, [menuName]: !menu[menuName] })
  }

  const closeMenu = () => setMenu(initialState)

  useEffect(() => {
    const activeGrid = Object.values(menu).includes(true)
    if (activeGrid) {
      $el('#grid-layout').style.gridTemplateColumns = '234px 5px 1fr'
    } else {
      $el('#grid-layout').style.gridTemplateColumns = '0px 0px 1fr'
    }
  }, [menu.explorer, menu.user, menu.settings])

  return { menu, settings, updateSettings }
}
