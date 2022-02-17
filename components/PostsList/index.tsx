import { Flex } from '@chakra-ui/layout'
import AlterLink from 'components/AlterLink'
import Post, { PostPropsTypes } from 'components/Post'

export interface PostsListPropsTypes {
  posts: PostPropsTypes[] | any,
  path: string
}

const PostsList = ({ posts, path }: PostsListPropsTypes) => {
  return (
    posts
      ? posts.map((post: PostPropsTypes) => {
        return (
          <AlterLink
            key={post.slug}
            href={`/${path}/${post.slug}`}
            w={'100%'}
            borderBottomWidth={1}
            mb={3}
            >
            {/* desktop */}
            <Flex
              display={['none', 'none', 'block', 'block']}
            >
              <Post {...post} />
            </Flex>
            {/* mobile */}
            <Flex
              display={['block', 'block', 'none', 'none']}
            >
              <Post {...post} />
            </Flex>
          </AlterLink>
        )
      })
      : <Flex />
  )
}

export default PostsList
