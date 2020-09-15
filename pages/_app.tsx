import CSSReset from '@chakra-ui/core/dist/CSSReset'
import ThemeProvider from '@chakra-ui/core/dist/ThemeProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
