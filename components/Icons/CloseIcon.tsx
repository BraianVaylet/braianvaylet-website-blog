import { Icon, IconProps } from '@chakra-ui/react'

const CloseIcon = (props: IconProps) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
      <defs/>
      <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 7.5l6 6M13.5 7.5l-6 6"/>
      </g>
    </svg>
  </Icon>
)

export default CloseIcon
