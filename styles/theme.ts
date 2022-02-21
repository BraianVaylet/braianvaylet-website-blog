import { theme, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  ...theme,
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    global: (props: any) => ({
      'html, body': {
        width: '100%',
        fontSize: 'md',
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
