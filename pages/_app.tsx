import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme, Fonts } from '../utils/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
