import { FlexProps } from '@chakra-ui/react'
import NextHead from 'componentsNextHead'
import Layout from 'componentsLayout'
import PostsList from 'componentsPostsList'
import { getAllFilesMetadata } from 'lib/mdx'
import { orderByDate } from 'lib/order-by-date'

export interface PostTypes extends FlexProps {
  category: string,
  tags: string[],
  date: string,
  slug: string,
  title: string
  description: string,
  readingtime: {
    minutes: number,
    text: string,
    time: number,
    words: number
  }
}

export interface PostsPageTypes {
  posts: PostTypes[]
}

export default function Post ({ posts }: PostsPageTypes) {
  return (
    <Layout head={
      <NextHead title={'BraianVaylet'} description={'website & blog'}/>
    }>
      <PostsList posts={posts} path={'posts'} />
    </Layout>

  )
}

export async function getStaticProps () {
  const unorderedPosts = await getAllFilesMetadata('posts')
  const posts = unorderedPosts.sort(orderByDate)
  return {
    props: {
      posts
    }
  }
}
