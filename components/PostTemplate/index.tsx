import { Box, Flex } from '@chakra-ui/layout'
import Post, { PostPropsTypes } from 'components/Post'
import { ReactNode } from 'react'

export interface PostTemplatePropsTypes extends PostPropsTypes {
  children: ReactNode,
}

const PostTemplate = ({ children, ...props }: PostTemplatePropsTypes | any) => {
  return (
    <Flex
      direction='column'
      align='flex-start'
      justify='flex-start'
      w='100%'
      {...props}
    >
      <Flex
        p='10px'
        direction='column'
        align='flex-start'
        justify='flex-start'
        w='100%'
      >
        <Flex align='center' justify='space-between' w='100%'>
          <Post
            bg='transparent'
            showDescription={false}
            padding={5}
            w='100%'
            borderWidth={1}
            borderRadius={10}
            {...props}
          />
        </Flex>
        <Box w='100%'>{children}</Box>
      </Flex>
    </Flex>
  )
}

export default PostTemplate
