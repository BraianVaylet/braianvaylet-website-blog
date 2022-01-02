import { Avatar, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'
import ImgPerfil from 'public/perfil1.jpg'

const Presentation = () => {
  return (
    <Flex
      justify={'space-between'}
      align={'center'}
      w={'100%'}
    >
      <Flex
        direction={'column'}
        align={'flex-start'}
        justify={'flex-start'}
      >
        <Text
          as={'h1'}
          fontSize={'5xl'}
          lineHeight={1.2}
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
          Desarrollador FrontEnd en Globant y Telecom, Tutor en programacion en Coderhouse...
        </Text>
      </Flex>
      <Wrap>
        <WrapItem>
          <Avatar size={'2xl'} name={'Braian Vaylet'} src={ImgPerfil.src} />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}

export default Presentation
