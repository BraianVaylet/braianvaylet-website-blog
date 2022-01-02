import type { NextPage } from 'next'
import Layout from 'components/templates/Layout'
import NextHead from 'components/atoms/NextHead'

const Home: NextPage = () => {
  return (
    <Layout
      head={<NextHead title={'BraianVaylet'} description={'website & blog'}/>}
    >
      Hola!
    </Layout>
  )
}

export default Home
