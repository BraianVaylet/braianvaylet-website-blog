import { Badge, BadgeProps } from '@chakra-ui/react'

export interface RandomColorsBadgesProps extends BadgeProps {
  list: string[] | undefined
}

const RandomColorsBadges = ({ list, ...props }: RandomColorsBadgesProps) => {
  return list
    ? (
        <>
          {list.map((item: string) => {
            const colorSchemeArr = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
            const rand = Math.random() * colorSchemeArr.length | 0
            const color = colorSchemeArr[rand]
            return (
          <Badge
            m={0.25}
            key={item}
            variant='outline'
            colorScheme={color}
            {...props}
          >
            {item}
          </Badge>
            )
          })}
        </>
      )
    : <div />
}

export default RandomColorsBadges
