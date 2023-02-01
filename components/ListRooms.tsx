import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Typography,
} from '@mui/material'

import Grid2 from '@mui/material/Unstable_Grid2'
import Image from 'next/image'
import style from '../styles/ListRooms.module.scss'

import dynamic from 'next/dynamic'
import { dataExport, Idata } from '../src/data'

const YandexMapMain = dynamic(() => import('./YandexMapMain'))

const ListRooms = () => {
    return (
        <div className={style.container}>
            <YandexMapMain />
            <Container maxWidth='xl'>
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
                                    href={data.href}
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
        </div>
    )
}

export default ListRooms
