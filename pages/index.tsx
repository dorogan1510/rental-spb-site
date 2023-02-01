import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { titleFont } from '../styles/fonts'
import ListRooms from '../modules/index/componentsIndex/ListRooms'
import style from '../modules/index/styleIndex/Index.module.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'

const index = () => {
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
                        "Добро пожаловать"
                    </Typography>
                    <Typography variant='subtitle1'>
                        Квартиры посуточно в центре города Санкт-Петербург -
                        выгоднее и комфортнее, чем номер в гостинице. Вы можете
                        снять квартиру напрямую у владельца без посредников и
                        переплаты. Отличные варианты жилья на любой бюджет.
                    </Typography>
                </Box>
            </Box>

            {/* </Paper> */}
            <Box sx={{ padding: '0 1rem', mb: '5rem' }}>
                <ListRooms />
            </Box>
            <Footer />
        </>
    )
}

export default index
