import { useEffect, useState } from 'react'

const initialState = {
  explorer: false,
  user: false,
  settings: false
}

const $el = (selector) => document.querySelector(selector)

export default function useSelectMenu () {
  const [menu, setMenu] = useState(initialState)

  const handleSelectMenu = (menuName) => {
    setMenu({ ...initialState, [menuName]: !menu[menuName] })
  }

  useEffect(() => {
    const activeGrid = Object.values(menu).includes(true)
    if (activeGrid) {
      $el('#grid-layout').style.gridTemplateColumns = '234px 5px 1fr'
    } else {
      $el('#grid-layout').style.gridTemplateColumns = '0px 0px 1fr'
    }
  }, [menu.explorer, menu.user, menu.settings])

  return { menu, handleSelectMenu }
}
