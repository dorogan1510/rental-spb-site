import {
    Backdrop,
    Box,
    Button,
    Fade,
    Grid,
    Modal,
    Paper,
    Stack,
    Typography,
} from '@mui/material/'
import { Container } from '@mui/system'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import Header from '../../components/Header'
import { featuresIcons, ImetroData, IFeatures } from '../../public/api/dataAPI'
import style from '../../styles/RoomPage.module.scss'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import BedIcon from '@mui/icons-material/Bed'
import StairsIcon from '@mui/icons-material/Stairs'
import ApartmentIcon from '@mui/icons-material/Apartment'
import { rooms } from '../../src/dataListRooms'
import dynamic from 'next/dynamic'
import ky from 'ky'
import { InferGetServerSidePropsType } from 'next'

import { dataExport } from '../../public/api/dataAPI'

// export async function getServerSideProps() {
//     // const url = 'http://localhost:3000/api/dataAPI'
//     // const res = await fetch(url)
//     // const dataExport = await res.json()

//     const dataExport = await ky.get(api).json()
//     return { props: { dataExport } }
// }

const YandexMapRoomPage = dynamic(
    () => import('../../components/YandexMapRoomPage')
)

const roomPage = () => {
    const router = useRouter()
    const { number } = router.query

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '1000px',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '0.5rem',
        p: '1rem',
    }

    return (
        <>
            {dataExport.map((data: any) => {
                if (data.id === number) {
                    return (
                        <div key={data.id}>
                            <Header />
                            <div className={style.room}>
                                <Container
                                    key={data.id}
                                    maxWidth='xl'
                                    sx={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '1rem',
                                        padding: '0 1rem 3rem ',
                                    }}
                                >
                                    {/* Images above */}
                                    <Grid
                                        container
                                        rowSpacing={{ xs: 1, md: 2 }}
                                        columnSpacing={{ xs: 1, md: 2 }}
                                        columns={12}
                                        sx={{
                                            mb: '3rem',
                                            paddingTop: '1rem',
                                        }}
                                    >
                                        <Grid item xs={12} md={6}>
                                            <Button
                                                onClick={handleOpen}
                                                sx={{
                                                    padding: '0',
                                                    '&:hover': {
                                                        opacity: 0.8,
                                                    },
                                                    transition: '0.3s',
                                                }}
                                            >
                                                <Image
                                                    src={data.img[0]}
                                                    alt={'img'}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        borderRadius: '0.5rem',
                                                        boxShadow:
                                                            'rgb(0 0 0 / 15%) 0rem 0.45rem 0.775rem -0.0625rem, rgb(0 0 0 / 10%) 0rem 0.125rem 1.25rem -0.0625rem',
                                                    }}
                                                    priority
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid
                                            container
                                            item
                                            xs={12}
                                            md={6}
                                            rowSpacing={1}
                                            columnSpacing={1}
                                            columns={12}
                                            sx={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Grid
                                                item
                                                xs={6}
                                                sx={{
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <Button
                                                    onClick={handleOpen}
                                                    sx={{
                                                        padding: '0',
                                                        '&:hover': {
                                                            opacity: 0.8,
                                                        },
                                                        transition: '0.3s',
                                                    }}
                                                >
                                                    <Image
                                                        src={data.img[1]}
                                                        alt={'img'}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            borderRadius:
                                                                '0.5rem',
                                                            boxShadow:
                                                                'rgb(0 0 0 / 15%) 0rem 0.45rem 0.775rem -0.0625rem, rgb(0 0 0 / 10%) 0rem 0.125rem 1.25rem -0.0625rem',
                                                        }}
                                                        priority
                                                    />
                                                </Button>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={6}
                                                sx={{
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <Button
                                                    onClick={handleOpen}
                                                    sx={{
                                                        padding: '0',
                                                        '&:hover': {
                                                            opacity: 0.8,
                                                        },
                                                        transition: '0.3s',
                                                    }}
                                                >
                                                    <Image
                                                        src={data.img[2]}
                                                        alt={'img'}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            borderRadius:
                                                                '0.5rem',
                                                            boxShadow:
                                                                'rgb(0 0 0 / 15%) 0rem 0.45rem 0.775rem -0.0625rem, rgb(0 0 0 / 10%) 0rem 0.125rem 1.25rem -0.0625rem',
                                                        }}
                                                        priority
                                                    />
                                                </Button>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={6}
                                                sx={{
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <Button
                                                    onClick={handleOpen}
                                                    sx={{
                                                        padding: '0',
                                                        '&:hover': {
                                                            opacity: 0.8,
                                                        },
                                                        transition: '0.3s',
                                                    }}
                                                >
                                                    <Image
                                                        src={data.img[3]}
                                                        alt={'img'}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            borderRadius:
                                                                '0.5rem',
                                                            boxShadow:
                                                                'rgb(0 0 0 / 15%) 0rem 0.45rem 0.775rem -0.0625rem, rgb(0 0 0 / 10%) 0rem 0.125rem 1.25rem -0.0625rem',
                                                        }}
                                                        priority
                                                    />
                                                </Button>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={6}
                                                sx={{
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                <Button
                                                    onClick={handleOpen}
                                                    sx={{
                                                        padding: '0',
                                                        '&:hover': {
                                                            opacity: 0.8,
                                                        },
                                                        transition: '0.3s',
                                                    }}
                                                >
                                                    <Image
                                                        src={data.img[4]}
                                                        alt={'img'}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            borderRadius:
                                                                '0.5rem',
                                                            boxShadow:
                                                                'rgb(0 0 0 / 15%) 0rem 0.45rem 0.775rem -0.0625rem, rgb(0 0 0 / 10%) 0rem 0.125rem 1.25rem -0.0625rem',
                                                        }}
                                                        priority
                                                    />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {/* Images above */}
                                    <Grid
                                        container
                                        columnSpacing={{
                                            xs: '1rem',
                                            md: '2rem',
                                        }}
                                        rowSpacing={'3rem'}
                                    >
                                        {/* Left side of room page */}
                                        <Grid
                                            item
                                            xs={12}
                                            md={8}
                                            sx={{
                                                order: { xs: 2, md: 1 },
                                            }}
                                        >
                                            <Typography
                                                variant='h1'
                                                sx={{
                                                    color: 'primary.main',
                                                }}
                                                gutterBottom
                                            >
                                                {data.title}
                                            </Typography>
                                            <Typography
                                                variant='body2'
                                                sx={{ mb: '1rem' }}
                                            >
                                                {data.address}
                                            </Typography>

                                            {/* MetroStations */}
                                            <Stack
                                                sx={{
                                                    flexDirection: 'row',
                                                    gap: '1rem',
                                                    flexWrap: 'wrap',
                                                    mb: '2rem',
                                                }}
                                            >
                                                {data.metroStations.map(
                                                    (
                                                        nestedData: ImetroData
                                                    ) => (
                                                        <Stack
                                                            key={nestedData.id}
                                                            sx={{
                                                                flexDirection:
                                                                    'row',
                                                                gap: '0.5rem',
                                                            }}
                                                        >
                                                            <svg
                                                                version='1.0'
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='20'
                                                                height='20'
                                                                viewBox='0 0 937.000000 768.000000'
                                                                preserveAspectRatio='xMidYMid meet'
                                                            >
                                                                <g
                                                                    transform='translate(0.000000,768.000000) scale(0.100000,-0.100000)'
                                                                    fill={
                                                                        nestedData.iconFill
                                                                    }
                                                                    stroke='none'
                                                                >
                                                                    <path
                                                                        d='M3015 7541 c-788 -300 -1582 -924 -2092 -1644 -297 -419 -524 -910
-647 -1403 -106 -424 -149 -782 -149 -1254 0 -467 35 -761 134 -1127 166 -620
541 -1347 983 -1910 l81 -103 1053 0 c578 0 1052 2 1052 4 0 2 -37 26 -82 52
-237 135 -596 390 -858 609 -173 145 -497 463 -611 600 -457 548 -672 997
-793 1655 -150 819 -27 1627 356 2324 195 356 547 794 744 925 128 86 254 121
359 101 124 -24 217 -102 279 -234 28 -59 446 -1401 1719 -5529 97 -313 144
-452 149 -440 4 10 231 742 504 1628 1079 3503 1311 4249 1350 4332 99 209
277 291 483 224 109 -36 201 -103 342 -249 756 -780 1093 -1822 943 -2917
-112 -818 -421 -1426 -1048 -2063 -309 -314 -641 -582 -1052 -849 -78 -51
-172 -109 -210 -130 l-69 -38 1055 -3 1055 -3 28 33 c57 65 226 296 314 428
395 594 671 1228 787 1810 87 436 96 1006 25 1550 -121 935 -510 1766 -1137
2430 -424 450 -898 802 -1417 1055 -141 68 -350 156 -405 170 l-25 6 -509
-1733 c-280 -953 -621 -2115 -758 -2583 -289 -987 -256 -881 -268 -869 -4 5
-344 1143 -755 2529 -410 1386 -755 2550 -767 2588 -11 37 -25 67 -31 67 -7
-1 -57 -18 -112 -39z'
                                                                    />
                                                                </g>
                                                            </svg>
                                                            <Typography
                                                                variant='body2'
                                                                gutterBottom
                                                            >
                                                                {
                                                                    nestedData.title
                                                                }
                                                            </Typography>
                                                            <Typography
                                                                variant='body2'
                                                                sx={{
                                                                    fontWeight: 700,
                                                                }}
                                                                gutterBottom
                                                            >
                                                                {
                                                                    nestedData.minutesToMetro
                                                                }
                                                            </Typography>
                                                        </Stack>
                                                    )
                                                )}
                                            </Stack>
                                            {/* MetroStations */}
                                            {/* Info section */}
                                            <Stack
                                                sx={{
                                                    flexDirection: {
                                                        xs: 'column',
                                                        md: 'row',
                                                    },
                                                    gap: '2rem',
                                                    mb: '3rem',
                                                }}
                                            >
                                                <Stack
                                                    sx={{
                                                        flexDirection: 'row',
                                                        gap: '1rem',
                                                    }}
                                                >
                                                    <AspectRatioIcon
                                                        color='primary'
                                                        sx={{
                                                            width: 40,
                                                            height: 40,
                                                        }}
                                                    />
                                                    <Stack
                                                        sx={{
                                                            textAlign: 'center',
                                                            flexDirection: {
                                                                xs: 'row',
                                                                md: 'column',
                                                            },
                                                            gap: {
                                                                xs: '1rem',
                                                                md: '0.5rem',
                                                            },
                                                        }}
                                                    >
                                                        <Typography variant='body1'>
                                                            Площадь
                                                        </Typography>
                                                        <Typography variant='h5'>
                                                            {data.totalArea}
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack
                                                    sx={{
                                                        flexDirection: 'row',
                                                        gap: '1rem',
                                                    }}
                                                >
                                                    <BedIcon
                                                        color='primary'
                                                        sx={{
                                                            width: 40,
                                                            height: 40,
                                                        }}
                                                    />
                                                    <Stack
                                                        sx={{
                                                            textAlign: 'center',
                                                            flexDirection: {
                                                                xs: 'row',
                                                                md: 'column',
                                                            },
                                                            gap: {
                                                                xs: '1rem',
                                                                md: '0.5rem',
                                                            },
                                                        }}
                                                    >
                                                        <Typography variant='body1'>
                                                            Спальные места
                                                        </Typography>
                                                        <Typography variant='h5'>
                                                            {data.bedCount}
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack
                                                    sx={{
                                                        flexDirection: 'row',
                                                        gap: '1rem',
                                                    }}
                                                >
                                                    <StairsIcon
                                                        color='primary'
                                                        sx={{
                                                            width: 40,
                                                            height: 40,
                                                        }}
                                                    />
                                                    <Stack
                                                        sx={{
                                                            textAlign: 'center',
                                                            flexDirection: {
                                                                xs: 'row',
                                                                md: 'column',
                                                            },
                                                            gap: {
                                                                xs: '1rem',
                                                                md: '0.5rem',
                                                            },
                                                        }}
                                                    >
                                                        <Typography variant='body1'>
                                                            Этаж
                                                        </Typography>
                                                        <Typography variant='h5'>
                                                            {data.floor}
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack
                                                    sx={{
                                                        flexDirection: 'row',
                                                        gap: '1rem',
                                                    }}
                                                >
                                                    <ApartmentIcon
                                                        color='primary'
                                                        sx={{
                                                            width: 40,
                                                            height: 40,
                                                        }}
                                                    />
                                                    <Stack
                                                        sx={{
                                                            textAlign: 'center',
                                                            flexDirection: {
                                                                xs: 'row',
                                                                md: 'column',
                                                            },
                                                            gap: {
                                                                xs: '1rem',
                                                                md: '0.5rem',
                                                            },
                                                        }}
                                                    >
                                                        <Typography variant='body1'>
                                                            Год постройки
                                                        </Typography>
                                                        <Typography variant='h5'>
                                                            {
                                                                data.yearOfСonstruction
                                                            }
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            {/* Info section */}

                                            {/* Features */}
                                            <Box sx={{ mb: '3rem' }}>
                                                <Typography
                                                    variant='h4'
                                                    sx={{ mb: '1rem' }}
                                                >
                                                    Удобства и услуги
                                                </Typography>
                                                <Grid
                                                    container
                                                    rowSpacing={1}
                                                    columnSpacing={2}
                                                >
                                                    {data.features.map(
                                                        (
                                                            nestedData: IFeatures
                                                        ) => {
                                                            const IconMaterial =
                                                                featuresIcons[
                                                                    nestedData
                                                                        .icon
                                                                ]
                                                            return (
                                                                <Grid
                                                                    xs={6}
                                                                    item
                                                                    key={
                                                                        nestedData.id
                                                                    }
                                                                >
                                                                    <Stack
                                                                        sx={{
                                                                            flexDirection:
                                                                                'row',
                                                                            gap: '1rem',
                                                                        }}
                                                                    >
                                                                        <IconMaterial color='primary' />
                                                                        <Typography variant='body1'>
                                                                            {
                                                                                nestedData.item
                                                                            }
                                                                        </Typography>
                                                                    </Stack>
                                                                </Grid>
                                                            )
                                                        }
                                                    )}
                                                </Grid>
                                            </Box>
                                            {/* Features */}
                                        </Grid>
                                        {/* Left side of room page */}

                                        {/* Right side of room page */}
                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                order: { xs: 1, md: 2 },
                                            }}
                                        >
                                            <Paper
                                                elevation={6}
                                                sx={{
                                                    boxShadow:
                                                        'rgb(145 158 171 / 16%) -16px 16px 56px -8px',
                                                    padding: '2rem',
                                                    border: '1px solid #e2e2e2',
                                                    borderRadius: '0.5rem',
                                                }}
                                            >
                                                <Typography
                                                    variant='h2'
                                                    sx={{
                                                        mb: '2rem',
                                                        color: 'primary.main',
                                                    }}
                                                >
                                                    {data.price}
                                                </Typography>
                                                <Grid
                                                    container
                                                    columnSpacing={2}
                                                    sx={{ mb: '2rem' }}
                                                >
                                                    <Grid item xs={6}>
                                                        <Typography
                                                            variant='body1'
                                                            sx={{
                                                                mb: '1rem',
                                                            }}
                                                        >
                                                            Тип аренды
                                                        </Typography>
                                                        <Typography
                                                            variant='body1'
                                                            sx={{
                                                                mb: '1rem',
                                                            }}
                                                        >
                                                            Залог
                                                        </Typography>
                                                        <Typography
                                                            variant='body1'
                                                            sx={{
                                                                mb: '1rem',
                                                            }}
                                                        >
                                                            Коммунальные платежи
                                                        </Typography>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={6}
                                                        sx={{
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Typography
                                                            variant='h5'
                                                            sx={{
                                                                mb: '1rem',
                                                            }}
                                                        >
                                                            {data.typeOfRent}
                                                        </Typography>

                                                        <Typography
                                                            variant='h5'
                                                            sx={{
                                                                mb: '1rem',
                                                            }}
                                                        >
                                                            {data.deposit}
                                                        </Typography>

                                                        <Typography
                                                            variant='h5'
                                                            sx={{
                                                                mb: '1rem',
                                                            }}
                                                        >
                                                            {
                                                                data.communalPayments
                                                            }
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Button
                                                    size='large'
                                                    variant='contained'
                                                >
                                                    Забронировать
                                                </Button>
                                            </Paper>
                                        </Grid>
                                        {/* Right side of room page */}
                                    </Grid>
                                    {/* Description */}
                                    <Box sx={{ mb: '3rem' }}>
                                        <Typography
                                            variant='h4'
                                            sx={{ mb: '1rem' }}
                                        >
                                            Описание
                                        </Typography>

                                        <Typography variant='body1'>
                                            {data.description}
                                        </Typography>
                                    </Box>
                                    {/* Description */}

                                    {/* Yandex map */}
                                    <Typography
                                        variant='h4'
                                        sx={{ mb: '2rem' }}
                                    >
                                        Где вы будете
                                    </Typography>
                                    <YandexMapRoomPage data={data} />
                                </Container>
                            </div>
                        </div>
                    )
                }
            })}

            {/* Modal window separate */}
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={modalStyle}>
                        {dataExport.map((data: any) => {
                            if (data.id === number) {
                                return (
                                    <Carousel
                                        navButtonsAlwaysVisible
                                        autoPlay={false}
                                        key={data.id}
                                    >
                                        {data.img.map(
                                            (nestedData: StaticImageData) => (
                                                <Image
                                                    key={nestedData.toString()}
                                                    src={nestedData}
                                                    alt={'img'}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        borderRadius: '0.5rem',
                                                    }}
                                                    priority
                                                />
                                            )
                                        )}
                                    </Carousel>
                                )
                            }
                        })}
                    </Box>
                </Fade>
            </Modal>
            {/* Modal window separate */}
        </>
    )
}

export default roomPage
