import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react'
import styles from './Card.styles.module.css'

interface CardPropsTypes extends FlexProps {
  children: ReactNode,
  borderGradient: boolean
}

const CardGradient = ({ children, borderGradient = false, ...props }: CardPropsTypes) => {
  return (
    <Flex
      w={'100%'}
      h={'100%'}
      align={'center'}
      justify={'center'}
      p={5}
      className={borderGradient ? styles['card__border-gradient'] : ''}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default CardGradient
