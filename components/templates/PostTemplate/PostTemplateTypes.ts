import { ReactNode, ReactNodeArray } from 'react'
import { PostTypes } from 'components/organisms/Post/PostTypes'

export interface PostTemplateTypes extends PostTypes {
  children: ReactNode | ReactNodeArray,
}
