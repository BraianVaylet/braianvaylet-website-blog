import Head from 'next/head'
import { ReactChild } from 'react'

interface NextHeadPropsTypes {
  title: string,
  description?: string,
  canonical?: string,
  children?: ReactChild
}

const NextHead = ({
  title,
  description,
  canonical,
  children
}: NextHeadPropsTypes) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    {description && <meta name="description" content={description} />}
    {canonical && <link rel="canonical" href={canonical} />}
    {children}
  </Head>
)

export default NextHead
