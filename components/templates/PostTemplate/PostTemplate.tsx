import { Box, Flex } from '@chakra-ui/layout'
import Post from 'components/organisms/Post'

import { PostTemplateTypes } from './PostTemplateTypes'

const PostTemplate = ({ children, ...props }: PostTemplateTypes | any) => {
  return (
    <Flex direction='column' align='flex-start' justify='flex-start' w='100%' {...props}>
      <Flex p='10px' direction='column' align='flex-start' justify='flex-start' w='100%' {...props}>
        <Flex align='center' justify='space-between' w='100%'>
          <Post {...props} bg='transparent' />
        </Flex>
        <Box w='100%'>{children}</Box>
      </Flex>
    </Flex>
  )
}

export default PostTemplate
