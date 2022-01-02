import { Icon, IconProps } from '@chakra-ui/react'

const CommentsIcon = (props: IconProps) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
      <defs/>
      <g fill="none" fillRule="evenodd">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2 2 0 012 2v10a2 2 0 01-2 2l-2.999-.001-2.294 2.294a1 1 0 01-1.32.083l-.094-.083-2.294-2.294L4.5 17.5a2 2 0 01-2-2v-10a2 2 0 012-2zM15.5 8.5h-6"/>
        <path fill="currentColor" d="M6.499 9.5c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1z"/>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.5 12.5h-6"/>
      </g>
    </svg>
  </Icon>
)

export default CommentsIcon
