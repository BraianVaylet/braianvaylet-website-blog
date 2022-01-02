import { Icon, IconProps } from '@chakra-ui/react'

const HomeIcon = (props: IconProps) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
      <defs/>
      <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1.5 10.5l9-9 9 9"/>
        <path d="M3.5 8.5v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
      </g>
    </svg>
  </Icon>
)

export default HomeIcon
