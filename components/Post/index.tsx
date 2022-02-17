import { Flex, Text, FlexProps } from '@chakra-ui/react'

export interface PostPropsTypes extends FlexProps{
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

const Post = ({
  category,
  title,
  date,
  tags,
  readingtime,
  description,
  ...props
}: PostPropsTypes) => {
  return (
    <Flex
      direction={'row'}
      justify={'flex-start'}
      align={'center'}
      py={2}
      w={'100%'}
      {...props}
    >
      <Flex
        direction={'column'}
        justify={'space-between'}
        align={'flex-start'}
        w={['90%', '90%', '100%', '100%']}
      >
        <Flex
          align={'center'}
          justify={'flex-start'}
          flexWrap={'wrap'}
        >
          <Text
            fontSize={'1.2rem'}
            fontWeight={'bold'}
            mb={3}
          >
            {title}
          </Text>
          <Text>
            {description}
          </Text>
          <Text
            as={Flex}
            justify={'flex-end'}
            w={'100%'}
            fontSize={'xs'}
            color={'gray.300'}
            mt={3}
          >
            {date}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Post
