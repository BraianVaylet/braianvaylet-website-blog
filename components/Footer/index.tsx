import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface FooterTypes {
  children: ReactNode
}

const Footer = ({ children }: FooterTypes) => {
  return (
    <Box
      padding={5}
      marginY={10}
      w='100%'
      borderWidth={1}
      borderRadius={10}
    >
      {children}
    </Box>
  )
}

export default Footer
