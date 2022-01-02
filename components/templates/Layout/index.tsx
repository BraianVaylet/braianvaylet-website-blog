import { ReactNode } from 'react'
import { Flex, useColorMode } from '@chakra-ui/react'
import IconButtonRotate from 'components/atoms/IconButtonRotate'
import MoonIcon from 'components/atoms/Icons/MoonIcon'
import Navbar from 'components/atoms/Navbar'
import AlterLink from 'components/atoms/AlterLink'
import SunIcon from 'components/atoms/Icons/SunIcon'

interface LayoutTypes {
  children: ReactNode,
  head: ReactNode
}

const Links = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/blog',
    title: 'Blog'
  },
  {
    path: 'https://www.linkedin.com/in/braianvaylet',
    title: 'Linkedin'
  },
  {
    path: 'https://github.com/BraianVaylet',
    title: 'Github'
  }
]

const Layout = ({ children, head }: LayoutTypes) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'flex-start'}
      minH={'100vh'}
      minW={'100vw'}

    >
      {head}
      <Flex
        direction={'column'}
        align={'center'}
        justify={'flex-start'}
        minH={'100vh'}
        w={'60%'}
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
              {Links.map(link => (
                <AlterLink
                  key={link.title}
                  mr={10}
                  fontSize={'lg'}
                  href={link.path}>
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

        <Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Layout
