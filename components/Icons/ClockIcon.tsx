import { Icon, IconProps } from '@chakra-ui/react'

const ClockIcon = (props: IconProps) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
      <defs/>
      <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="matrix(-1 0 0 1 19 2)">
        <circle cx="8.5" cy="8.5" r="8"/>
        <path d="M8.5 5.5v4H5"/>
      </g>
    </svg>
  </Icon>
)

export default ClockIcon
