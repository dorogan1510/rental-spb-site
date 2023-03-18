import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { titleFont } from '../styles/fonts'
import ListRooms from '../components/index/ListRooms'
import style from '../components/index/Index.module.scss'

import Header from '../globalComponents/Header'
import Footer from '../globalComponents/Footer'
import { useRouter } from 'next/router'
import { cn } from '../src/translation/cn'
import { ru } from '../src/translation/ru'

const index = () => {
    const router = useRouter()
    const { locale } = router

    const translate: any = (() => {
        switch (locale) {
            case 'ru':
                return ru
            case 'cn':
                return cn
            default:
                ru
        }
    })()

    return (
        <>
            <Box className={style.index}>
                <Header />

                <Box sx={{ textAlign: 'center', padding: '1rem' }}>
                    <Typography
                        variant='h1'
                        gutterBottom
                        className={titleFont.className}
                    >
                        {translate.indexH1}
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        sx={{
                            maxWidth: '1110px',
                            margin: '0 auto',
                        }}
                    >
                        Квартиры посуточно в центре города Санкт-Петербург —
                        выгоднее и комфортнее, чем номер в гостинице. Вы можете
                        снять квартиру напрямую у владельца без посредников и
                        переплаты. Отличные варианты жилья на любой бюджет.
                    </Typography>
                </Box>
            </Box>
            <Container maxWidth='xl'>
                <Box sx={{ mb: '5rem' }}>
                    <ListRooms />
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default index
