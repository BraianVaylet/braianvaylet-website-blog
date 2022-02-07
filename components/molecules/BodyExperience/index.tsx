import { Flex, useColorModeValue } from '@chakra-ui/react'
import AlterLink from 'components/atoms/AlterLink'
import RenderHTML from 'components/atoms/RenderHTML'

interface BodyExperienceTypes {
  content: string,
  website: string
}

const BodyExperience = ({ content, website }: BodyExperienceTypes) => {
  const color = useColorModeValue('brand.secundary', 'brand.primary')
  return (
    <Flex
      direction={'column'}
      align={'flex-start'}
      justify={'flex-start'}
      w={'100%'}
    >
      <RenderHTML html={content} />
      <AlterLink
        mt={5}
        href={website}
        color={color}
      >
        {website}
      </AlterLink>
    </Flex>
  )
}

export default BodyExperience
