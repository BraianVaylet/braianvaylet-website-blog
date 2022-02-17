import { Flex, useColorModeValue } from '@chakra-ui/react'
import AlterLink from 'components/AlterLink'
import RenderHTML from 'components/RenderHTML'

interface BodyExperiencePropsTypes {
  content: string,
  website?: string
}

const BodyExperience = ({ content, website }: BodyExperiencePropsTypes) => {
  const color = useColorModeValue('brand.secundary', 'brand.primary')
  return (
    <Flex
      direction={'column'}
      align={'flex-start'}
      justify={'flex-start'}
      w={'100%'}
    >
      <RenderHTML html={content} />
      {website && (
        <AlterLink
          mt={5}
          href={website}
          color={color}
        >
          {website}
        </AlterLink>
      )}
    </Flex>
  )
}

export default BodyExperience
