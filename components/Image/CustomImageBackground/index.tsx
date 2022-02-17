import { Box, BoxProps } from '@chakra-ui/react'

export interface CustomImageBackgroundPropsTypes extends BoxProps {
  src: string,
  alt: string
}

const CustomImage = ({
  src,
  alt,
  ...props
}: CustomImageBackgroundPropsTypes) => (
  <Box
    {...props}
    bgImage={`url(${src})`}
    bgAttachment='initial'
    bgPosition='center'
    bgRepeat='no-repeat'
    bgSize='contain'
  />
)

export default CustomImage
