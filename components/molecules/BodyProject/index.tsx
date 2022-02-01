import { Flex, Text, Button, Icon } from '@chakra-ui/react'
import AlterLink from 'components/atoms/AlterLink'
import CustomImage from 'components/atoms/Image/CustomImage'
import { ReactNode } from 'react'

interface linkTypes {
  name: ReactNode,
  url: string,
  icon?: any
}

interface BodyProjectTypes {
  image?: {
    src: string,
    alt: string
  },
  content: string,
  links: linkTypes[]
}

const BodyProject = ({ image, content, links }: BodyProjectTypes) => {
  return (
    <Flex
      direction={'column'}
      align='center'
      justify={'center'}
      w={'100%'}
    >
      <Flex
        align={'flex-start'}
        justify={'space-between'}
        direction={['column', 'column', 'row', 'row']}
        w={'100%'}
      >
        {image && <Flex
          p={5}
          w={['100%', '100%', '25%', '25%']}
          align={'center'}
          justify={'center'}
          direction={'column'}
        >
          <CustomImage
            src={image.src}
            alt={image.alt}
            w={['30%', '30%', '80%', '80%']}
            h={['30%', '30%', '80%', '80%']}
          />
        </Flex>}
        <Flex
          p={5}
          w={['100%', '100%', image ? '75%' : '100%', image ? '75%' : '100%']}
          direction={'column'}
          align={'flex-start'}
          justify={'space-between'}
        >
          <Text w={'100%'}>
            {content}
          </Text>
        </Flex>
      </Flex>
      <Flex
        align={'center'}
        justify={'flex-end'}
        w={'100%'}
        mt={5}
      >
        {links.map((link: linkTypes) => (
          <Button
            key={link.url}
            mr={5}
            leftIcon={link.icon && <Icon as={link.icon} />}
            as={AlterLink}
            href={link.url}>
              {link.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}

export default BodyProject
