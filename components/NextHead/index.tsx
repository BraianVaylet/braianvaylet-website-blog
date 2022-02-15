import Head from 'next/head'
import { ReactChild } from 'react'

interface NextHeadTypes {
  title: string,
  description: string,
  children?: ReactChild
}

const NextHead = ({
  title,
  description,
  children
}: NextHeadTypes) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
    {children}
  </Head>
)

export default NextHead
