import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface FooterPropsTypes {
  children: ReactNode
}

const Footer = ({ children }: FooterPropsTypes) => {
  return (
    <Box
      padding={5}
      mt={10}
      mb={5}
      w='100%'
      borderWidth={1}
      borderRadius={10}
    >
      {children}
    </Box>
  )
}

export default Footer
