import { Icon } from '@chakra-ui/react'
import { ImLinkedin2 } from 'react-icons/im'

const LinkedinIcon = (props: any) => (
  <Icon as={ImLinkedin2} viewBox="0 0 200 200" {...props} w={props.fontSize} h={props.fontSize} />
)

export default LinkedinIcon
