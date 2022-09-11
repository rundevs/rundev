import { useEffect, useState } from 'react'

const existNavigator = typeof navigator !== 'undefined'

/** @param {string} os */
function verifyOs (os) {
  return [navigator.userAgent.indexOf(os)].includes(-1)
}

function checkPlatform () {
  if (existNavigator) {
    return verifyOs('Win')
      ? verifyOs('Linux') ? 'Mac' : 'Linux'
      : 'Windows'
  }
  return 'Platform'
}

function checkIfMobile () {
  if (existNavigator) {
    return !verifyOs('Mobile')
  }
  return false
}

export default function usePlatform () {
  const [platform, setPlatform] = useState('Platform')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (existNavigator) {
      setPlatform(checkPlatform())
      setIsMobile(checkIfMobile())
    }
  }, [])

  return { platform, isMobile }
}
