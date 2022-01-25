import { Flex, Text } from '@chakra-ui/react'
import AlterLink from 'components/atoms/AlterLink'

interface BodyExperienceTypes {
  content: string,
  website: string
}

const BodyExperience = ({ content, website }: BodyExperienceTypes) => {
  return (
    <Flex
      direction={'column'}
      align={'flex-start'}
      justify={'flex-start'}
      w={'100%'}
    >
      <Text>
        {content}
      </Text>
      <AlterLink
        mt={5}
        bg={'brand.100'}
        href={website}
        color={'green.400'}
      >
        {website}
      </AlterLink>
    </Flex>
  )
}

export default BodyExperience
