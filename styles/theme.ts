import { theme, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  ...theme,
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles: {
    global: (props: any) => ({
      'html, body': {
        width: '100%',
        fontSize: 'md',
        bg: props.colorMode === 'dark' ? '#08090c' : 'white',
        color: props.colorMode === 'dark' ? '#bfc8d9' : '#364259',
        lineHeight: 'tall',
        scrollBehavior: 'smooth'
      },
      // Gradient Scroll Bar width
      '::-webkit-scrollbar': {
        width: '10px'
      },
      // Gradient Scroll Bar track
      '::-webkit-scrollbar-track': {
        background: props.colorMode === 'dark' ? 'black' : 'white'
      },
      // Gradient Scroll Bar handle
      '::-webkit-scrollbar-thumb': {
        background: 'linear-gradient(#33FFB1, #B33BF9)'
      }
    })
  },
  colors: {
    brand: {
      primary: '#33FFB1',
      secondary: '#b33bf9'
    }
  }
})

export default customTheme
