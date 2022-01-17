import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import readingtime from 'reading-time'
import mdxPrism from 'mdx-prism'

const root = process.cwd()

export const getFiles = (type: string) => fs.readdirSync(path.join(root, 'data', type))

export const getFileBySlug = async (type: string, slug: string | string[] | undefined) => {
  const mdxSource = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')
  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism]
    }
  })
  return {
    source,
    frontMatter: {
      readingtime: readingtime(content),
      slug,
      ...data
    }
  }
}

export const getAllFilesMetadata = (type: string) => {
  const files = getFiles(type)
  return files.reduce((allPosts: any, postSlug: string) => {
    const mdxSource = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf-8')
    const { data } = matter(mdxSource)
    return [
      { ...data, slug: postSlug.replace('.mdx', '') },
      ...allPosts
    ]
  }, [])
}
