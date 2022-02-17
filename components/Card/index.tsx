import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CardPropsTypes extends FlexProps {
  children: ReactNode
}

const Card = ({ children, ...props }: CardPropsTypes) => {
  return (
    <Flex
      {...props}
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
