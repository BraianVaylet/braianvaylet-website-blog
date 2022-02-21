import { Flex, Text, FlexProps, Badge } from '@chakra-ui/react'

export interface PostPropsTypes extends FlexProps{
  category: string,
  tags: string[],
  date: string,
  slug: string,
  title: string
  description: string,
  showDescription?: boolean
  readingTime: {
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
  readingTime,
  description,
  showDescription = true,
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
            fontSize={['2xl', '2xl', '3xl', '3xl']}
            fontWeight={'bold'}
            mb={3}
          >
            {title}
          </Text>
          <Flex
            align={'flex-start'}
            justify={'flex-start'}
            direction={'column'}
            w={'100%'}
          >
            <Text mb={2}>
              {showDescription && description}
            </Text>
            {category && (
              <Badge
                variant='outline'
                colorScheme={'teal'}
              >
                {category}
              </Badge>
            )}
          </Flex>
          <Text
            as={Flex}
            justify={'flex-start'}
            w={'100%'}
            fontSize={'md'}
            fontStyle={'italic'}
            color={'gray.300'}
            mt={3}
          >
            {readingTime && Math.round(readingTime.minutes) + ' minutos de lectura - '}{date}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Post
