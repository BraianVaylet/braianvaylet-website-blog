/* eslint-disable react/display-name */
import { Image, Divider, Heading, HeadingProps, TextProps, Code, ListIcon, ListItem, OrderedList, Table, Tbody, Td, Text, Th, Thead, Tr, UnorderedList, TableProps, TableHeadProps, TableBodyProps, ListItemProps } from '@chakra-ui/react'
import AlterLink from 'components/atoms/AlterLink'
import PostTemplate from 'components/templates/PostTemplate'

const MDXComponents = {
  a: AlterLink,
  hr: Divider,
  h1: (props: HeadingProps) => <Heading as="h1" m={8} size="3xl" {...props} />,
  h2: (props: HeadingProps) => <Heading as="h2" m={4} size="2xl" {...props} />,
  h3: (props: HeadingProps) => <Heading as="h3" m={4} size="xl" {...props} />,
  h4: (props: HeadingProps) => <Heading as="h4" m={2} size="lg" {...props} />,
  h5: (props: HeadingProps) => <Heading as="h5" m={2} size="md" {...props} />,
  h6: (props: HeadingProps) => <Heading as="h6" m={2} size="sm" {...props} />,
  p: (props: TextProps) => <Text fontSize="lg" lineHeight={6} my={8} mx={4} {...props} />,
  table: (props: TableProps) => <Table variant="striped" colorScheme="orange" {...props} />,
  thead: (props: TableHeadProps) => <Thead {...props} />,
  tbody: (props: TableBodyProps) => <Tbody {...props} />,
  th: (props: any) => <Th {...props} />,
  tr: (props: any) => <Tr {...props} />,
  td: (props: any) => <Td {...props} />,
  img: (props: any) => <Image {...props} />,
  ul: (props: any) => <UnorderedList styleType="none" {...props} />,
  ol: (props: any) => <OrderedList styleType="none" {...props} />,
  li: (props: ListItemProps) => (
    <ListItem>
      <ListIcon color="brand.900" />
      {props.children}
    </ListItem>
  ),
  Image,
  Heading,
  PostTemplate,
  Code
}

export default MDXComponents
