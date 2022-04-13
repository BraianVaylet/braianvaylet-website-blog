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
        bg: props.colorMode === 'dark' ? '#101219' : 'white',
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
        background: 'linear-gradient(#19FDB5, #FF6AA3)'
      },
      pre: {
        '::-webkit-scrollbar': {
          height: '5px'
        },
        '::-webkit-scrollbar-thumb': {
          background: '#FF6AA3'
        }
      }
    })
  },
  colors: {
    brand: {
      primary: '#19FDB5',
      secondary: '#FF6AA3'
    }
  }
})

export default customTheme
