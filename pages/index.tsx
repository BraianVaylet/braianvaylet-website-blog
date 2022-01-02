import type { NextPage } from 'next'
import Layout from 'components/templates/Layout'
import NextHead from 'components/atoms/NextHead'
import Presentation from 'components/molecules/Presentation'

const Home: NextPage = () => {
  return (
    <Layout
      head={<NextHead title={'BraianVaylet'} description={'website & blog'}/>}
    >
      <Presentation />
    </Layout>
  )
}

export default Home
