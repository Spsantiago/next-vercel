import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '@/themes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={ lightTheme }>
    <CssBaseline/>
    <Component {...pageProps} />
  </ThemeProvider>
  
  )
}
