import { Image, ImageProps } from '@chakra-ui/react'

export interface CustomImagePropsTypes extends ImageProps {
  src: string,
  alt: string
}

const CustomImage = ({ src, alt, ...props }: CustomImagePropsTypes) => (
  <Image src={src} alt={alt} {...props}/>
)

export default CustomImage
