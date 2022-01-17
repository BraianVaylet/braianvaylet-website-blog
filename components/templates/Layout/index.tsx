import { ReactNode } from 'react'
import { Flex, useColorMode } from '@chakra-ui/react'
import IconButtonRotate from 'components/atoms/IconButtonRotate'
import MoonIcon from 'components/atoms/Icons/MoonIcon'
import Navbar from 'components/atoms/Navbar'
import AlterLink from 'components/atoms/AlterLink'
import SunIcon from 'components/atoms/Icons/SunIcon'
import Footer from 'components/atoms/Footer'

import { Pages, Social } from 'utils/links'
import logo from 'public/images/logo.png'
import CustomImage from 'components/atoms/Image/CustomImageBackground'

interface LayoutTypes {
  children: ReactNode,
  head: ReactNode
}

const Layout = ({ children, head }: LayoutTypes) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'flex-start'}
      minH={'100vh'}
    >
      {head}
      <Flex
        direction={'column'}
        align={'center'}
        justify={'space-between'}
        minH={'100vh'}
        w={'35%'}
      >
        <Navbar>
          <Flex
            justify={'space-between'}
            align={'center'}
            w={'100%'}
          >
            <Flex
              justify={'flex-start'}
              align={'center'}
            >
              {[...Pages, ...Social].map(link => (
                <AlterLink
                  key={link.title}
                  mr={10}
                  fontSize={'lg'}
                  letterSpacing={0.5}
                  href={link.path}
                >
                  {link.title}
                </AlterLink>
              ))}
            </Flex>
            <IconButtonRotate
              onClick={toggleColorMode}
              icon={
                colorMode === 'light'
                  ? (
                  <MoonIcon boxSize={7} />
                    )
                  : (
                  <SunIcon boxSize={7} />
                    )
              }
            />
          </Flex>
        </Navbar>

        <Flex
          w={'100%'}
          minH={'75vh'}
          h={'100%'}
          direction={'column'}
          align={'center'}
          justify={'flex-start'}
        >
          {children}
        </Flex>

        <Footer>
          <Flex
            w={'100%'}
          >
            <Flex
              direction={'column'}
              justify={'flex-start'}
              align={'flex-start'}
            >
              {Pages.map(link => (
                <AlterLink
                  key={link.title}
                  fontSize={'lg'}
                  mr={10}
                  letterSpacing={0.5}
                  href={link.path}>
                    {link.title}
                  </AlterLink>
              ))}
            </Flex>

            <Flex
              direction={'column'}
              justify={'flex-start'}
              align={'flex-start'}
            >
              {Social.map(link => (
                <AlterLink
                  key={link.title}
                  fontSize={'lg'}
                  href={link.path}>
                    {link.title}
                  </AlterLink>
              ))}
            </Flex>
          </Flex>
        </Footer>
      </Flex>
    </Flex>
  )
}

export default Layout
