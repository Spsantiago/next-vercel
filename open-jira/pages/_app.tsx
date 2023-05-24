import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { darkTheme, ligththeme } from '@/themes';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { UiProvider } from '@/context/ui';
import { EntriesProvider } from '@/context/entries';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <EntriesProvider>
            <UiProvider>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />

                    <Component {...pageProps} />
                </ThemeProvider>
            </UiProvider>
        </EntriesProvider>
    );
}
