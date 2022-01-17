import { memo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FlexProps } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from 'lib/mdx'
import MDXComponents from 'components/MDXComponents'
import Layout from 'components/templates/Layout'
import PostTemplate from 'components/templates/PostTemplate'
import NextHead from 'components/atoms/NextHead'

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

interface PostBySlugTypes {
  source: {
    compiledSource: string,
    scope: any
  },
  frontMatter: PostTypes
}

const PostBySlug = ({ source, frontMatter }: PostBySlugTypes) => {
  return (
    <Layout
      head={<NextHead title={'BraianVaylet'} description={'website & blog'}/>}
    >
      <PostTemplate {...frontMatter}>
        <MDXRemote
          {...source}
          components={{ ...MDXComponents }}
        />
      </PostTemplate>
  </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const { source, frontMatter } = await getFileBySlug('posts', params.slug)
    return {
      props: {
        source,
        frontMatter
      }
    }
  }
  return {
    props: {}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('posts')
  const paths = posts.map(post => ({
    params: {
      slug: post.replace(/\.mdx/, '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export default memo(PostBySlug)
