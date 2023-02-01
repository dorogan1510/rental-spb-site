import { Cormorant } from '@next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { bodyFont } from './fonts'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a2d4d', //button
        },
        secondary: {
            main: '#6b7a8d', // bg-devider
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 800,
            md: 1024,
            lg: 1200,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: bodyFont.style.fontFamily,
        h1: {
            fontSize: '46px',
            color: 'white',
            fontWeight: '700',
            fontFamily: 'Cormorant',

            '@media (max-width:1024px)': {
                fontSize: '40px',
            },
        },
        h2: {
            fontSize: '30px',
            color: 'white',
            fontWeight: '700',

            '@media (max-width:1024px)': {
                fontSize: '26px',
            },
        },
        h4: {
            color: '#1a2d4d',
            fontSize: '20px',
            fontWeight: '700',
        },
        h5: {
            color: '#1a2d4d',
            fontSize: '18px',
            fontWeight: '500',
        },
        body1: {
            fontSize: '16px',
        },
        body2: {
            fontSize: '14px',
        },
        subtitle1: {
            fontSize: '20px',
            color: 'white',
            '@media (max-width:1024px)': {
                fontSize: '16px',
            },
        },
        subtitle2: {
            fontSize: '16px',
            fontWeight: 300,
        },
    },
})

export default theme
