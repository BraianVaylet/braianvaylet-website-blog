import type { NextPage } from 'next'
import { Avatar, Flex, Text } from '@chakra-ui/react'
import Layout from 'components/templates/Layout'
import NextHead from 'components/atoms/NextHead'
import Stepper from 'components/atoms/Stepper'
import AccordionList from 'components/molecules/AccordionList'
import ImgPerfil from 'public/images/perfil.jpg'

const dataSection2 = [
  {
    title: 'Estudiante en tecnologias blockchain',
    content: 'Como fanatico y creyente del mundo crypto y defi me encuentro formandome como desarrollador blockchain en tecnologias Web3 y Solidity con esperanzas de un futuro cambio de carrera.'
  },
  {
    title: 'Tutor en Coderhouse',
    content: 'Formo parte del plantel de tutores de Coderhouse, actualmente me encuentro en los cursos de React.js donde ayudo a los estudiantes del mismo haciendo un seguimiento y dandoles feedback de sus avances, respondiendo sus consultas, corrigiendo los desafios del curso y dictando los After-class de la plataforma.'
  },
  {
    title: 'Dev y referente en Telecom-Globant',
    content: 'Como Web UI developer en Globant, me encuentro trabajando para la cuenta de Telecom como desarrollador y referente front-end usando tecnologias como Next.js, React.js, Stencil.js, Storybook, TypeScript, Node.js, AEM, Strapi y muchas mas...'
  }
]

const dataSection3 = [
  {
    title: 'Telecom',
    content: 'Como desarrollador de Globant arranque a formar parte de la cuenta de Telecom en Febrero del 2021, donde me uni al equipo de frontenders del proyecto TIENDA. Luego pase a formar parte del proyecto LANDINGS donde estoy actualmente. Con el paso del tiempo fui tomando nuevas responsabilidades dentro del proyecto, pase a convertirme en referente FE dentro del pod y luego a ser referente a nivel Cross entre todos los pods y proyectos.'
  },
  {
    title: 'Globant',
    content: 'Ingrese a Globant oficialmente en Diciembre del 2020 tras adquirir la empresa Parablot donde me encontraba trabajando. Ingrese como Web UI developer Ssr. advance y pase rapidamente a formar parte de la cuenta TELECOM, una de sus cuentas mas grandes en latam.'
  },
  {
    title: 'Parabolt',
    content: 'Parabolt es una unidad de negocios de la empresa grupo ASSA y arranque a trabajar de forma remota a finales de Noviembre del 2020, poco antes de ser adquirida por Globant. Durante unos meses forme parte de un proyecto internacional como desarrollador front-end y cubri el puesto de referente en React dentro del equipo.'
  },
  {
    title: 'Eycon SA',
    content: 'Arranque a trabajar en Eycon en Marzo del 2020, poco antes de que iniciara la pandemia. Eycon es una empresa de la ciudad de Bahia Blanca la cual desarrolla software como hardware. Forme parte del equipo de desarrollo de software como FullStack developer tanto web como mobile, forme parte de gran parte de los proyectos de la empresa utilizando React-Native, React.js, Node.js, Laravel y mas...'
  },
  {
    title: 'Freelancer',
    content: 'Durante el 2020 forme parte de un proyecto internacional como freelancer junto a un grupo de desarrolladores situados en Venezuela, España y Mexico.'
  },
  {
    title: 'NexoSmart',
    content: 'A mediados de Marzo del 2018 me inicie en el mundo IT trabajando como desarrollador FullStack para la empresa NexoSmart. NexoSmart es una pequeña PyMES de Bahia Blanca que funciona principalmente como una Software Factory. Durante los 2 años que trabaje en ella desarrolle varios roles como desarrollador, PM y TL. Tambien me encargaba de varias de las tareas administrativas de la empresa y me encargaba de hacer seguimiento a los clientes. El stack que usabamos se limitaba a jquery y PHP. Durante mi paso por NexoSmart trabaje en mas de 60 proyectos web y mobiles.'
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
        <AccordionList
          items={dataSection2}
          withIndex
        />
      </Flex>

      <Stepper />

      {/* Section3: Experiencia */}
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
          Experiencia
        </Text>
        <Text
          as='p'
          my={5}
        >
          En los ultimos años pude trabajar y colaborar con gente de muchas empresas y en muchos proyectos tanto web como mobile, usando varias tecnologias y metodologias de trabajo.
        </Text>
        <AccordionList
          items={dataSection3}
        />
      </Flex>

    </Layout>
  )
}

export default Home
