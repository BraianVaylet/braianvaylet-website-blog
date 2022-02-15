import type { NextPage } from 'next'

import { Avatar, Flex, Text } from '@chakra-ui/react'
import Layout from 'components/Layout'
import NextHead from 'components/NextHead'
import Stepper from 'components/Stepper'
import AccordionList from 'components/AccordionList'
import RenderHTML from 'components/RenderHTML'

import ImgPerfil from 'public/images/perfil.jpg'

import section1 from 'data/content/section1'
import section2 from 'data/content/section2'
import section3 from 'data/content/section3'
import section4 from 'data/content/section4'
import section5 from 'data/content/section5'

const Home: NextPage = () => {
  return (
    <Layout
      head={<NextHead title={'BraianVaylet'} description={'website & blog'} />}
    >
      {/* Section1: Presentation */}
      <Flex
        direction={['column-reverse', 'column-reverse', 'row', 'row']}
        justify={'space-between'}
        align={'center'}
        w={'100%'}
      >
        <Flex
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
          w={['100%', '100%', '60%', '60%']}
        >
          <Text fontSize={'xl'}>{section1.title}</Text>
          <Text
            as={'h1'}
            fontSize={'6xl'}
            fontWeight={'extrabold'}
            bgGradient={'linear(to-l, brand.primary, brand.secundary)'}
            bgClip={'text'}
          >
            Braian D. Vaylet
          </Text>
          <Text
            as={'h3'}
            fontSize={'xl'}
            lineHeight={1.2}
          >
            {section1.introduction}
          </Text>
          <RenderHTML
            as={'p'}
            mt={5}
            fontSize={'md'}
            html={section1.content}
          />
        </Flex>
        <Flex
          direction={'column'}
          align={['center', 'center', 'flex-end', 'flex-end']}
          justify={'center'}
          mb={[10, 10, 0, 0]}
          w={['100%', '100%', '40%', '40%']}
        >
          <Avatar
            size={'2xl'}
            name={'Braian Vaylet'}
            src={ImgPerfil.src}
            loading={'lazy'}
          />
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
          {section2.title}
        </Text>
        <Text
          as='p'
          my={5}
        >
          {section2.introduction}
        </Text>
        <AccordionList
          items={section2.content}
          withIndex
          withContent={false}
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
          {section3.title}
        </Text>
        <Text
          as='p'
          my={5}
        >
          {section3.introduction}
        </Text>
        <AccordionList
          items={section3.content}
        />
      </Flex>

      <Stepper />

      {/* Section4: Proyectos */}
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
          {section4.title}
        </Text>
        <Text
          as='p'
          my={5}
        >
          {section4.introduction}
        </Text>
        <AccordionList
          items={section4.content}
        />
      </Flex>

      <Stepper />

      {/* Section5: Capacitaciones */}
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
          {section5.title}
        </Text>
        <Text
          as='p'
          my={5}
        >
          {section5.introduction}
        </Text>
        <AccordionList
          items={section5.content}
        />
      </Flex>
    </Layout>
  )
}

export default Home
