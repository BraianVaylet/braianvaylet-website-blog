import { Button, Flex, Text } from '@chakra-ui/react'
import AlterLink from 'components/AlterLink'
import Layout from 'components/Layout'
import NextHead from 'components/NextHead'

const NotFound = () => {
  return (
    <Layout
      head={
        <NextHead
          title={'Braian Vaylet - 404'}
          description={'Blog personal sobre desarrollo web y blockchain'}
        />
      }
    >
      <Flex
        align={'center'}
        justify={'center'}
        direction={'column'}
        w={'100%'}
        p={10}
        minH={'60vh'}
      >
        <Text
          as={'h1'}
          fontSize={['3xl', '6xl', '6xl', '6xl']}
          fontWeight={'extrabold'}
          bgGradient={'linear(to-l, brand.secondary, brand.primary)'}
          bgClip={'text'}
        >
          404
        </Text>
        <Text
          fontSize={'2xl'}
        >
          Page Not Found
        </Text>
        <Button
          variant={'outline'}
          as={AlterLink}
          mt={20}
          fontSize={'lg'}
          letterSpacing={0.5}
          href={'/'}
        >
          Volver
        </Button>
      </Flex>
    </Layout>
  )
}

export default NotFound
