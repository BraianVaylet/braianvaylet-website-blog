import { Text, TextProps } from '@chakra-ui/react'

interface RenderHtmlPropsTypes extends TextProps {
  html: string
}

const RenderHTML = ({ html, ...props }: RenderHtmlPropsTypes) => (
  <Text
    {...props}
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export default RenderHTML
