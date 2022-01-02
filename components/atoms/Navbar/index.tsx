import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavbarTypes {
  children: ReactNode
}

const Navbar = ({ children }: NavbarTypes) => {
  return (
    <Box py={10} px={30} background={'pink'} w='100%'>
      {children}
    </Box>
  )
}

export default Navbar
