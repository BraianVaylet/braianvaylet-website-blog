import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface FooterPropsTypes {
  children: ReactNode
}

const Footer = ({ children }: FooterPropsTypes) => {
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
