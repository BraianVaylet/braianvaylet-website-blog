import { ReactNode } from 'react'

import { Button, Flex, Icon, Text } from '@chakra-ui/react'
import Navbar from 'components/Navbar'
import AlterLink from 'components/AlterLink'
import Footer from 'components/Footer'
import IconTheme from 'components/IconTheme'
import CustomImage from 'components/Image/CustomImage'

import { Pages, ProjectPages, Sections } from 'utils/routes'
import { Social } from 'data/content/social'

import { Logo } from 'utils/images'

interface LayoutPropsTypes {
  children: ReactNode,
  head: ReactNode,
  className: string
}

const Layout = ({ children, head, className }: LayoutPropsTypes) => {
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
        width={{
          base: '90%',
          sm: '90%',
          md: '80%',
          lg: '60%',
          xl: '40%'
        }}
      >
        <Navbar
          childrenWeb={(
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
                    mr={2.5}
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
          )}
          childrenDrawer={(
            <Flex
              direction={'column'}
              justify={'flex-start'}
              align={'flex-start'}
            >
              {[...Pages, ...Social].map((link: {title: string, path: string, icon?: any}) => (
                <Button
                  variant={'outline'}
                  key={link.title}
                  as={AlterLink}
                  leftIcon={link.icon && <Icon as={link.icon} />}
                  mb={10}
                  w={'100%'}
                  fontSize={'lg'}
                  letterSpacing={0.5}
                  href={link.path}
                >
                  {link.title}
                </Button>
              ))}
              <IconTheme
                variant={'outline'}
                mb={10}
                w={'100%'}
                fontSize={'lg'}
              />
            </Flex>
          )}
        />

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
            align={'flex-start'}
            justify={'space-between'}
            w={'100%'}
          >
            <Flex
              w={'100%'}
              wrap={'wrap'}
            >
              <Flex
                direction={'column'}
                justify={'flex-start'}
                align={'flex-start'}
                mb={5}
              >
                {Pages.map(link => (
                  <AlterLink
                    key={link.title}
                    fontSize={'lg'}
                    mr={10}
                    letterSpacing={0.5}
                    href={link.path}
                  >
                      {link.title}
                  </AlterLink>
                ))}
              </Flex>

              <Flex
                direction={'column'}
                justify={'flex-start'}
                align={'flex-start'}
                mb={5}
              >
                {Social.map(link => (
                  <AlterLink
                    key={link.title}
                    fontSize={'lg'}
                    mr={10}
                    href={link.path}>
                      {link.title}
                    </AlterLink>
                ))}
              </Flex>

              <Flex
                direction={'column'}
                justify={'flex-start'}
                align={'flex-start'}
                mb={5}
              >
                {Sections.map(link => (
                  <AlterLink
                    key={link.title}
                    fontSize={'lg'}
                    mr={10}
                    href={link.path}>
                      {link.title}
                    </AlterLink>
                ))}
              </Flex>

              <Flex
                direction={'column'}
                justify={'flex-start'}
                align={'flex-start'}
                mb={5}
              >
                {ProjectPages.map(link => (
                  <AlterLink
                    key={link.title}
                    fontSize={'lg'}
                    mr={10}
                    href={link.path}>
                      {link.title}
                    </AlterLink>
                ))}
              </Flex>
            </Flex>

            <Flex>
              <CustomImage src={Logo.src} w={10} h={10} alt={'logo BDeV'} />
            </Flex>
          </Flex>
        </Footer>
        <Text mb={5}>
          {'Con mucho 💚 y '}
          <AlterLink _hover={{ color: 'brand.primary' }} href='https://nextjs.org/'>Next.js</AlterLink>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Layout
