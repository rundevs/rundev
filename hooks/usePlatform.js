import { useEffect, useState } from "react"

function checkPlatform() {
  if (typeof navigator !== 'undefined') {
    return [navigator.userAgent.indexOf('Win')].includes(-1)
      ? [navigator.userAgent.indexOf('Linux')].includes(-1) ? 'Mac' : 'Linux' : 'Windows'
  }
  return 'Platform'
}

function checkIfMobile() {
  if (typeof navigator !== 'undefined') {
    return [navigator.userAgent.indexOf('Mobile')].includes(-1) ? false : true
  }
  return false
}

export default function usePlatform() {
  const [platform, setPlatform] = useState('Platform')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setPlatform(checkPlatform())
      setIsMobile(checkIfMobile())
    }
  }, [])

  return { platform, isMobile }
}
