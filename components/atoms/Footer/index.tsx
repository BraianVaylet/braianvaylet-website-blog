import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface FooterTypes {
  children: ReactNode
}

const Footer = ({ children }: FooterTypes) => {
  return (
    <Box
      paddingY={10}
      marginTop={10}
      w='100%'
    >
      {children}
    </Box>
  )
}

export default Footer
