import { ReactNode } from 'react'
import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

interface AlterLinkTypes extends LinkProps {
  href: string,
  children: ReactNode | string,
}

interface LinkUITypes extends LinkProps {
  children: ReactNode
}

const LinkUI = ({ children, ...props }: LinkUITypes) => {
  return (
    <Link
      as='a'
      href={props.href}
      textDecoration={`${'none'}${' '}${'!important'}`}
      _hover={{ opacity: 0.9 }}
      {...props}
    >
      {children}
    </Link>
  )
}

const AlterLink = ({ href, children, ...props }: AlterLinkTypes) => {
  const isExternalLink = !href.startsWith('/' || '#')
  if (isExternalLink) {
    return <LinkUI href={href} isExternal {...props}>{children}</LinkUI>
  }
  return (
    <NextLink href={href}>
      <LinkUI {...props}>{children}</LinkUI>
    </NextLink>
  )
}

export default AlterLink
