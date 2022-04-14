import { Flex, useColorModeValue } from '@chakra-ui/react'
import AlterLink from 'components/AlterLink'
import RandomColorsBadges from 'components/RandomColorsBadges'
import RenderHTML from 'components/RenderHTML'

interface BodyExperiencePropsTypes {
  content: string,
  website?: string,
  stack?: string[],
}

const BodyExperience = ({ content, website, stack }: BodyExperiencePropsTypes) => {
  const color = useColorModeValue('brand.secondary', 'brand.primary')
  return (
    <Flex
      direction={'column'}
      align={'flex-start'}
      justify={'flex-start'}
      w={'100%'}
    >
      <RenderHTML html={content} />
      <Flex
        align={'flex-start'}
        justify={'flex-start'}
        wrap={'wrap'}
        my={2}
        w={'100%'}
      >
        <RandomColorsBadges list={stack}/>
      </Flex>
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
