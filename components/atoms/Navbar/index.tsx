import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavbarTypes {
  children: ReactNode
}

const Navbar = ({ children }: NavbarTypes) => {
  return (
    <Box
      p={5}
      w='100%'
    >
      {children}
    </Box>
  )
}

export default Navbar
