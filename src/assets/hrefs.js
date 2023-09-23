import { BsGithub, BsInfoCircleFill } from 'react-icons/bs'
import { FaCodeBranch } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

export const hrefs = [
  { name: 'Try App', href: '/', target: '_self', icon: <HiCode size={24} /> },
  { name: 'About', href: '/about', target: '_self', icon: <BsInfoCircleFill /> },
  { name: 'GitHub', href: 'https://github.com/rundevs', target: '_blank', icon: <BsGithub /> },
  { name: 'Developers', href: '/#developers', target: '_self', icon: <FaCodeBranch /> }
]
