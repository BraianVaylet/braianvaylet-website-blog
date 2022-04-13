import { Flex, FlexProps } from '@chakra-ui/react'
import Image from 'next/image'

export interface CustomImagePropsTypes extends FlexProps {
  src: string,
  alt: string
}

const CustomImage = ({ src, alt, ...props }: CustomImagePropsTypes) => (
  <Flex
    direction={'column'}
    align='center'
    justify={'center'}
    {...props}
  >
    <Image
      src={src}
      alt={alt}
      width={'100%'}
      height={'100%'}
      layout={'intrinsic'}
      priority={false}
    />
  </Flex>
)

export default CustomImage
