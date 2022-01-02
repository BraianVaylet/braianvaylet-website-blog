import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { MouseEventHandler, ReactElement } from 'react'

export interface IconButtonRotateTypes extends IconButtonProps {
  icon: ReactElement,
  onClick: MouseEventHandler<HTMLButtonElement> | undefined,
  'aria-label': string
}

const IconButtonRotate = ({ icon, onClick }: IconButtonRotateTypes | any) => (
  <IconButton
    aria-label="icon"
    variant="none"
    onClick={onClick}
    size="lg"
    transitionDuration="0.75s"
    transitionProperty="transform"
    borderRadius="9999px"
    _hover={{
      transform: 'rotate(360deg) scale(1.25)',
      cursor: 'pointer'
    }}
    _focus={{
      borderStyle: 'none',
      backgroundColor: 'transparent'
    }}
    icon={icon}
  />
)

export default IconButtonRotate
