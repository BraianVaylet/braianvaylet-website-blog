import type { NextPage } from 'next'

import { Avatar, Badge, Flex, Text } from '@chakra-ui/react'
import Layout from 'components/Layout'
import NextHead from 'components/NextHead'
import Stepper from 'components/Stepper'
import AccordionList from 'components/AccordionList'
import RenderHTML from 'components/RenderHTML'
import Card from 'components/Card'

import { Perfil } from 'utils/images'

import section1 from 'data/content/presentation'
import section2 from 'data/content/about'
import section3 from 'data/content/experience'
import section4 from 'data/content/projects'
import section5 from 'data/content/skills'
import section6 from 'data/content/trainings'

const Home: NextPage = () => {
  return (
    <Layout
      head={
        <NextHead
          title={'Braian Vaylet - Home'}
          description={'Web personal'}
        />
      }
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
            fontSize={['3xl', '5xl', '5xl', '5xl']}
            fontWeight={'extrabold'}
            bgGradient={'linear(to-l, brand.secondary, brand.primary)'}
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
            src={Perfil.src}
            loading={'lazy'}
          />
        </Flex>
      </Flex>

      <Stepper />

      {/* Section2: Que estoy haciendo */}
      <Flex
        id={'section2'}
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
        {/* <AccordionList
          items={section2.content}
          withContent={false}
        /> */}
        <Flex
          align={'center'}
          justify={'space-between'}
          direction={'row'}
          flexWrap={'wrap'}
          w={'100%'}
        >
          {section2.content.map((item: any, idx: number) => (
            <Card
              key={item.title}
              borderGradient={true}
              w={['100%', '100%', '45%', '45%']}
              h={20}
              my={2}
              mr={(idx % 2 === 0) ? [0, 0, '5%', '5%'] : 0}
              textAlign={'center'}
            >
              {item.title}
            </Card>
          ))}
        </Flex>
      </Flex>

      <Stepper />

      {/* Section3: Experiencia */}
      <Flex
        id={'section3'}
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
        id={'section4'}
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

      {/* Section5: skills */}
      <Flex
        id={'section5'}
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
        <Flex
          w={'100%'}
          direction={'row'}
          align={'center'}
          justify={'flex-start'}
          wrap={'wrap'}
        >
          {section5.content && section5.content.map((skill: string) => {
            const colorSchemeArr = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
            const rand = Math.random() * colorSchemeArr.length | 0
            const color = colorSchemeArr[rand]
            return (
              <Badge
                m={0.25}
                key={skill}
                variant='outline'
                colorScheme={color}
              >
                {skill}
              </Badge>
            )
          })}
        </Flex>
      </Flex>

      <Stepper />

      {/* Section6: Capacitaciones */}
      <Flex
        id={'section6'}
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
          {section6.title}
        </Text>
        <Text
          as='p'
          my={5}
        >
          {section6.introduction}
        </Text>
        <AccordionList
          items={section6.content}
        />
      </Flex>
    </Layout>
  )
}

export default Home
