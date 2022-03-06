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
        bg: props.colorMode === 'dark' ? 'black' : 'white',
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
        lineHeight: 'tall',
        scrollBehavior: 'smooth'
      }
    })
  },
  colors: {
    brand: {
      primary: '#66FFC4',
      secondary: '#B33BF9'
    }
  }
})

export default customTheme
