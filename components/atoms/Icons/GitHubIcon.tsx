import { Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const GitHubIcon = (props: any) => (
  <Icon as={FaGithub} viewBox="0 0 200 200" {...props} w={props.fontSize} h={props.fontSize} />
)

export default GitHubIcon
