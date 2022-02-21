import { Button, Flex, Text } from '@chakra-ui/react'
import AlterLink from 'components/AlterLink'
import Layout from 'components/Layout'
import NextHead from 'components/NextHead'

interface ServerErrorPropsTypes {
  statusCode: number
}

const ServerError = ({ statusCode = 500 }: ServerErrorPropsTypes) => {
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
    >
      <Text
        as={'h1'}
        fontSize={['3xl', '6xl', '6xl', '6xl']}
        fontWeight={'extrabold'}
        bgGradient={'linear(to-l, brand.secondary, brand.primary)'}
        bgClip={'text'}
      >
        {statusCode}
      </Text>
      <Text
        fontSize={'2xl'}
      >
        Error Code
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

export default ServerError
