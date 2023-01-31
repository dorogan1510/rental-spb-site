import { Paper, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ListRooms from '../components/ListRooms'
import YMapsComponent from '../components/YandexMapMain'
import { titleFont } from '../styles/fonts'
import style from '../styles/Index.module.scss'

import React from 'react'
import Header from '../components/Header'
import HeaderMain from '../components/Header'
import Footer from '../components/Footer'

const index = () => {
    return (
        <>
            <Box className={style.index}>
                <Header />
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant='h1'
                        gutterBottom
                        className={titleFont.className}
                    >
                        Добро пожаловать!
                    </Typography>
                    <Typography variant='subtitle1'>
                        Сайт №1 посуточной аренды квартир Санкт-Петербурга
                    </Typography>
                </Box>
            </Box>

            {/* </Paper> */}
            <Box sx={{ padding: '0 1rem', mb: '5rem' }}>
                <ListRooms />
            </Box>
        </>
    )
}

export default index
