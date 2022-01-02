import { Icon, IconProps } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { colorBase, colorBaseNeon } from 'styles/theme'

const LogoIcon = (props: IconProps) => {
  const { colorMode } = useColorMode()
  const color = colorMode === 'light' ? colorBaseNeon : colorBase
  return (
  <Icon viewBox="0 0 200 200" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
      <defs/>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 4h6a1 1 0 011 1v12l-4-4-4 4V5a1 1 0 011-1z"/>
      <path stroke="currentColor" d="M14 17L6 9"/>
      <path fill={color} stroke="currentColor" d="M6 9l4 4-.086.086L6 17V9z"/>
    </svg>
  </Icon>
  )
}

export default LogoIcon
