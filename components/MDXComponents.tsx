/* eslint-disable react/display-name */
import { Image, Divider, Heading, HeadingProps, TextProps, Code, ListIcon, ListItem, OrderedList, Table, Tbody, Td, Text, Th, Thead, Tr, UnorderedList, TableProps, TableHeadProps, TableBodyProps, ListItemProps } from '@chakra-ui/react'
import AlterLink from 'components/AlterLink'
import PostTemplate from 'components/PostTemplate'

const MDXComponents = {
  a: AlterLink,
  hr: Divider,
  h1: (props: HeadingProps) => <Heading as="h1" my={8} {...props} />,
  h2: (props: HeadingProps) => <Heading as="h2" my={4} {...props} />,
  h3: (props: HeadingProps) => <Heading as="h3" my={4} {...props} />,
  h4: (props: HeadingProps) => <Heading as="h4" my={2} {...props} />,
  h5: (props: HeadingProps) => <Heading as="h5" my={2} {...props} />,
  h6: (props: HeadingProps) => <Heading as="h6" my={2} {...props} />,
  p: (props: TextProps) => <Text fontSize="lg" lineHeight={6} my={8} {...props} />,
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
