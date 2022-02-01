import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { ReactNode, useRef } from 'react'
import { FaEllipsisH } from 'react-icons/fa'

interface NavbarTypes {
  childrenWeb: ReactNode,
  childrenDrawer: ReactNode,
}

const Navbar = ({ childrenWeb, childrenDrawer }: NavbarTypes) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <Box
      paddingY={[5, 5, 10, 10]}
      w={'100%'}
    >
        <Box
          display={['none', 'none', 'block', 'block']}
          w={'100%'}
        >
          {childrenWeb}
        </Box>
        <Flex
          align={'center'}
          justify={'flex-end'}
          w={'100%'}
          display={['flex', 'flex', 'none', 'none']}
        >
          <Button
            ref={btnRef}
            variant={'outline'}
            onClick={onOpen}
          >
            <Icon
              as={FaEllipsisH}
              w={7}
              h={7}
            />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='top'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>👋 Hola!</DrawerHeader>
              <DrawerBody>
                {childrenDrawer}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
    </Box>
  )
}

export default Navbar
