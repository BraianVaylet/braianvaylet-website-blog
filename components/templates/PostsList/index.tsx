import { Flex } from '@chakra-ui/layout'
import AlterLink from 'components/atoms/AlterLink'
import Post, { PostTypes } from 'components/organisms/Post'

export interface PostsListTypes {
  posts: PostTypes[] | any,
  path: string
}

const PostsList = ({ posts, path }: PostsListTypes) => {
  return (
    posts
      ? posts.map((post: PostTypes) => {
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
