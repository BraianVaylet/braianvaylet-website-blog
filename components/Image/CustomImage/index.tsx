import { Image, ImageProps } from '@chakra-ui/react'

export interface CustomImageTypes extends ImageProps {
  src: string,
  alt: string
}

const CustomImage = ({ src, alt, ...props }: CustomImageTypes) => (
  <Image src={src} alt={alt} {...props}/>
)

export default CustomImage
