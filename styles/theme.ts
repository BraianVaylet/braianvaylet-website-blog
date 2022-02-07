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
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        lineHeight: 'tall'
      }
    })
  },
  colors: {
    brand: {
      primary: '#4FD1C5',
      secundary: '#805AD5'
    }
  }
})

export default customTheme
