import { Text, TextProps } from '@chakra-ui/react'

interface RenderHtmlTypes extends TextProps {
  html: string
}

const RenderHTML = ({ html, ...props }: RenderHtmlTypes) => (
  <Text
    {...props}
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export default RenderHTML
