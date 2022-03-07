import { ReactNode, useRef } from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, useColorMode, useDisclosure } from '@chakra-ui/react'
import CustomImage from 'components/Image/CustomImage'
import { FaEllipsisH } from 'react-icons/fa'
import { Logo } from 'utils/images'
import { addOpacityToColor } from 'styles/utils'
import styles from './Navbar.styles.module.css'

interface NavbarPropsTypes {
  childrenWeb: ReactNode,
  childrenDrawer: ReactNode,
}

const Navbar = ({ childrenWeb, childrenDrawer }: NavbarPropsTypes) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const { colorMode } = useColorMode()

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
          justify={'space-between'}
          w={'100%'}
          display={['flex', 'flex', 'none', 'none']}
        >
          <CustomImage src={Logo.src} boxSize={10} alt={'logo Braian Vaylet'} />
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
            <DrawerOverlay
              bg={addOpacityToColor({ color: colorMode === 'dark' ? 'black' : 'white', opacity: 1000 })}
              className={styles.NavBar_DrawerContent__box}
            />
            <DrawerContent
              bg={colorMode === 'dark' ? 'black' : 'white'}
            >
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
