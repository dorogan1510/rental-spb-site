import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../globalComponents/Footer'
import Header from '../globalComponents/Header'
import createEmotionCache from '../src/createEmotionCache'
import '../styles/globals.scss'
import theme from '../styles/theme'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name='viewport'
                    content='initial-scale=1, width=device-width'
                />
                <title>
                    Квартиры посуточно в центре города Санкт-Петербург
                </title>
                <meta
                    name='description'
                    content='Квартиры посуточно в центре города Санкт-Петербург —
                        выгоднее и комфортнее, чем номер в гостинице.'
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}
