import { Button, Flex, Text } from '@chakra-ui/react'
import AlterLink from 'components/AlterLink'
import Layout from 'components/Layout'
import NextHead from 'components/NextHead'
import { GetServerSideProps } from 'next'
import NotFound from './404'
import ServerError from './500'

interface ErrorPagePropsTypes {
  statusCode?: number
  message?: string
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  res
}) => {
  const statusCode = res ? res.statusCode : 404

  return {
    props: {
      statusCode
    }
  }
}

const ErrorPage = ({ statusCode, message }: ErrorPagePropsTypes) => {
  if (statusCode === 404) {
    return <NotFound />
  }

  if (typeof statusCode === 'number' && statusCode > 500) {
    return <ServerError statusCode={statusCode} />
  }

  let errorMessage = message
  if (!message) {
    errorMessage = statusCode ? 'server Error' : 'client Error'
  }
  return (
    <Layout
    head={
      <NextHead
        title={'Braian Vaylet'}
        description={'website & Blog personal sobre desarrollo web y blockchain'}
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
        {errorMessage}
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

export default ErrorPage
