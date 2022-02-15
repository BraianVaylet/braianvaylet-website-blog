import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react'

const IconTheme = ({ ...props }: IconButtonProps | any) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="icon"
      size="lg"
      onClick={toggleColorMode}
      icon={
        colorMode === 'light'
          ? (
          <MoonIcon
            w={5}
            h={5}
            transitionDuration="0.75s"
            transitionProperty="transform"
            _hover={{
              transform: 'rotate(360deg) scale(1.25)',
              cursor: 'pointer'
            }}
            _focus={{
              borderStyle: 'none',
              backgroundColor: 'transparent'
            }}
          />
            )
          : (
          <SunIcon
            w={5}
            h={5}
            transitionDuration="0.75s"
            transitionProperty="transform"
            _hover={{
              transform: 'rotate(360deg) scale(1.25)',
              cursor: 'pointer'
            }}
            _focus={{
              borderStyle: 'none',
              backgroundColor: 'transparent'
            }}
          />
            )
      }
      {...props}
    />
  )
}

export default IconTheme
