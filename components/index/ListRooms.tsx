import {
    Backdrop,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Fade,
    IconButton,
    Modal,
    Stack,
    Typography,
} from '@mui/material'
import MapIcon from '@mui/icons-material/Map'
import CloseIcon from '@mui/icons-material/Close'
import style from './ListRooms.module.scss'
import Grid2 from '@mui/material/Unstable_Grid2'
import Image, { StaticImageData } from 'next/image'
import SubwayIcon from '@mui/icons-material/Subway'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { dataExport, Idata } from '../../src/data'
import Carousel from 'react-material-ui-carousel'
import MetroImage from './MetroImage'
import { useRouter } from 'next/router'
import { cn } from '../../src/translation/cn'
import { ru } from '../../src/translation/ru'

const YandexMapMain = dynamic(() => import('./YandexMapMain'))

const ListRooms = () => {
    const router = useRouter()
    const { locale }: any = router
    const { pathname, asPath, query } = router

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

    const [mapVisible, setMapVisible] = useState<boolean>(false)
    const openMap = () => setMapVisible(true)
    const closeMap = () => setMapVisible(false)

    const [metroVisible, setMetroVisible] = useState<boolean>(false)
    const openMetro = () => setMetroVisible(true)
    const closeMetro = () => setMetroVisible(false)

    return (
        <div className={style.container}>
            <Box
                sx={{
                    padding: 0,
                    display: { xs: 'none', md: 'block' },
                }}
            >
                <YandexMapMain />
            </Box>
            <Stack
                direction='row'
                sx={{
                    padding: '2rem',
                    textAlign: 'center',
                    display: { xs: 'block', md: 'none' },
                }}
            >
                <IconButton aria-label='open-map' onClick={openMap}>
                    <MapIcon sx={{ height: 40, width: 40 }} color='primary' />
                </IconButton>
                <IconButton aria-label='open-metro' onClick={openMetro}>
                    <SubwayIcon
                        sx={{ height: 40, width: 40 }}
                        color='primary'
                    />
                </IconButton>
            </Stack>

            <Container maxWidth='xl' id='room-list'>
                <Grid2
                    container
                    rowSpacing={{ xs: 4, md: 3 }}
                    columnSpacing={{ xs: 3, md: 3 }}
                    columns={{ xs: 1, sm: 4, md: 12 }}
                    justifyContent='center'
                >
                    {dataExport.map((data: Idata) => (
                        <Grid2 key={data.id}>
                            <Card
                                sx={{
                                    maxWidth: { xs: 325, sm: 345, md: 355 },
                                    borderRadius: '0.75rem',
                                    boxShadow:
                                        'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
                                    overflow: 'visible',
                                }}
                            >
                                <CardActionArea
                                    sx={{
                                        '&:hover': {
                                            opacity: 0.8,
                                        },
                                        transition: '0.3s',
                                        padding: '1rem',
                                    }}
                                    onClick={() => {
                                        router.push({
                                            pathname: '/room/[number]',
                                            query: { number: data.id },
                                        })
                                    }}
                                >
                                    <CardMedia component='div'>
                                        <Image
                                            src={data.img[0]}
                                            alt={'image'}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '0.5rem',
                                                boxShadow:
                                                    'rgb(0 0 0 / 30%) 0rem 0.45rem 0.775rem -0.0625rem, rgb(0 0 0 / 10%) 0rem 0.125rem 1.25rem -0.0625rem',
                                            }}
                                            priority
                                            sizes='20vw'
                                            placeholder='blur'
                                        />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant='h4'
                                            component='div'
                                            color='primary.main'
                                        >
                                            {data.title}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            gutterBottom
                                        >
                                            {data.address}
                                        </Typography>
                                        <Typography
                                            variant='subtitle2'
                                            sx={{
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 3,
                                            }}
                                        >
                                            {data.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={mapVisible}
                onClose={closeMap}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={mapVisible}>
                    <Box className={style.modal}>
                        <YandexMapMain />
                    </Box>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={metroVisible}
                onClose={closeMetro}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={metroVisible}>
                    <Box className={style.modal}>
                        <MetroImage />
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default ListRooms
