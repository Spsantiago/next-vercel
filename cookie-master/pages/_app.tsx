import '@/styles/globals.css';
import { darkTheme, customTheme, lightTheme } from '@/themes';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface Props extends AppProps {
    theme: string;
}

export default function App({ Component, pageProps, theme = 'dark' }: Props) {
    const [currenteThme, setcurrenteThme] = useState(lightTheme);

    useEffect(() => {
        const cookieTheme = Cookies.get('theme') || 'light';
        const selectedTheme: Theme =
            cookieTheme === 'light'
                ? lightTheme
                : cookieTheme === 'dark'
                ? darkTheme
                : customTheme;
        setcurrenteThme(selectedTheme);
    }, []);

    return (
        <ThemeProvider theme={currenteThme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
