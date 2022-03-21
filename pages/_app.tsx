import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react'
import customTheme from 'styles/theme'
import 'styles/prism-night-owl.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <ColorModeScript initialColorMode={customTheme.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
