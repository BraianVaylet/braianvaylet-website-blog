import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import IconButtonRotate from 'components/atoms/IconButtonRotate'
import MoonIcon from 'components/atoms/Icons/MoonIcon'
import Navbar from 'components/atoms/Navbar'
import AlterLink from 'components/atoms/AlterLink'

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
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'flex-start'}
    >
      {head}

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
                href={link.path}>
                  {link.title}
                </AlterLink>
            ))}
          </Flex>
          <IconButtonRotate icon={<MoonIcon />}/>
        </Flex>
      </Navbar>

      <Flex>
        {children}
      </Flex>

    </Flex>
  )
}

export default Layout
