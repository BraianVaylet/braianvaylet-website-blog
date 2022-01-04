import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CardTypes {
  children: ReactNode
}

const Card = ({ children }: CardTypes) => {
  return (
    <Flex
      w={'100%'}
      h={'100%'}
      align={'center'}
      justify={'center'}
      borderWidth={5}
      borderRadius={5}
      borderColor={'pink'}
    >
      {children}
    </Flex>
  )
}

export default Card
