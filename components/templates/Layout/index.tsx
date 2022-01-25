import { ReactNode } from 'react'
import { Button, Flex, Icon } from '@chakra-ui/react'
import Navbar from 'components/atoms/Navbar'
import AlterLink from 'components/atoms/AlterLink'
import Footer from 'components/atoms/Footer'
import { Pages, Social } from 'data'
import IconTheme from 'components/molecules/IconTheme'

interface LayoutTypes {
  children: ReactNode,
  head: ReactNode
}

const Layout = ({ children, head }: LayoutTypes) => {
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
              {[...Pages, ...Social].map((link: {title: string, path: string, icon?: any}) => (
                <Button
                  variant={'outline'}
                  key={link.title}
                  as={AlterLink}
                  leftIcon={link.icon && <Icon as={link.icon} />}
                  mr={10}
                  fontSize={'lg'}
                  letterSpacing={0.5}
                  href={link.path}
                >
                  {link.title}
                </Button>
              ))}
            </Flex>
            <IconTheme variant={'outline'} />
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
