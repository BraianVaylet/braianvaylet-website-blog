import type { NextPage } from 'next'
import { Avatar, Flex, Text } from '@chakra-ui/react'
import Layout from 'components/templates/Layout'
import NextHead from 'components/atoms/NextHead'
import Card from 'components/atoms/Card'
import Stepper from 'components/atoms/Stepper'
import AccordionList from 'components/molecules/AccordionList'
import ImgPerfil from 'public/perfil1.jpg'

const items = [
  {
    title: 'Estudiante en tecnologias blockchain',
    content: 'Formandome como desarrollador blockchain en tecnologias Web3 y Solidity.'
  },
  {
    title: 'Tutor en Coderhouse',
    content: 'Tutor en los cursos de React.js dictados en la plataforma Coderhouse, donde capacito a otros estudiantes y hago un seguimiento de su avance en el transcurso del cursado.'
  },
  {
    title: 'Dev y referente en Telecom',
    content: 'Desarrollador y referente front-end en Telecom ARG.'
  },
  {
    title: 'Web UI developer en Globant',
    content: 'Web UI developer en Globant para la cuenta Telecom.'
  }
]

const Home: NextPage = () => {
  return (
    <Layout
      head={<NextHead title={'BraianVaylet'} description={'website & blog'}/>}
    >
      {/* Section1: Presentation */}
      <Flex
        justify={'space-between'}
        align={'center'}
        w={'100%'}
      >
        <Flex
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
          w={'60%'}
        >
          <Text
            as={'h1'}
            fontSize={'5xl'}
            lineHeight={1.2}
            fontWeight={'bold'}
          >
            Braian D. Vaylet
          </Text>
          <Text
            as={'h3'}
            fontSize={'xl'}
          >
            {'Web UI developer | Tutor'}
          </Text>
          <Text
            as={'p'}
            mt={5}
            fontSize={'md'}
          >
            Soy un desarrollador web localizado en la ciudad de Bahía Blanca, ARG.
            Ocupo el puesto de Web UI developer en <b>Globant</b> y de Tutor en los cursos de React de <b>Coderhouse</b>.
            Actualmente me encuentro formandome como Blockchain developer.
          </Text>
        </Flex>
        <Flex
          direction={'column'}
          align={'flex-end'}
          justify={'center'}
          w={'40%'}
        >
          <Avatar size={'2xl'} name={'Braian Vaylet'} src={ImgPerfil.src} />
        </Flex>
      </Flex>

      <Stepper />

      {/* Section2: Que estoy haciendo */}
      <Flex
        direction={'column'}
        align={'flex-start'}
        justify={'flex-start'}
        w={'100%'}
      >
        <Text
          as={'h3'}
          fontSize={'3xl'}
          fontWeight={'bold'}
        >
          Que estoy haciendo
        </Text>
        <Text
          as='p'
          my={5}
        >
          Soy de esas personas a la que le gusta estar haciendo un poco de todo, desde el 2021 me encuentro cubriendo varios roles en paralelo.
        </Text>
        <AccordionList items={items}/>
      </Flex>

      <Stepper />
      <Card>
        Hola!
      </Card>
    </Layout>
  )
}

export default Home
