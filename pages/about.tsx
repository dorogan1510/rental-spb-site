import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Footer from '../globalComponents/Footer'
import Header from '../globalComponents/Header'
import img1 from '../public/static/img/rooms/Blohina33_65m2/Blohina33_65m2(1).jpg'
import img2 from '../public/static/img/rooms/BolshayaPushkarskaya60_17m2_1/BolshayaPushkarskaya60_17m2_1(12).jpg'
import img3 from '../public/static/img/rooms/Fontanka108_18m2/Fontanka108_18m2(1).jpg'

const about = () => (
    <>
        <Header />

        <Box sx={{ mb: '3rem', padding: { xs: '0 1rem', md: '0 7.5rem' } }}>
            <Grid container columnSpacing={10} rowSpacing={2}>
                <Grid item container xs={12} md={4} rowSpacing={1}>
                    <Grid item xs={12}>
                        <Image
                            src={img1}
                            alt={'image'}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                            }}
                        />
                    </Grid>
                    <Grid item container xs={12} columnSpacing={1}>
                        <Grid item xs={6}>
                            <Image
                                src={img2}
                                alt={'image'}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '10px',
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Image
                                src={img3}
                                alt={'image'}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '10px',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography
                        variant='h1'
                        sx={{ color: '#1a2d4d', mb: '1rem' }}
                    >
                        О нас
                    </Typography>
                    <Typography variant='body1'>
                        Наша команда работает на рынке недвижимости более 11
                        лет. Такой многолетний опыт позволил сотрудникам
                        компании приобрести бесценный практический опыт в работе
                        с арендой недвижимости. <br />
                        Мы сами создаем наши апартаменты, старясь учесть все
                        нюансы для комфортного проживания и отдыха наших гостей.
                        В наших апартаментах вы получаете больше дополнительных
                        опций в отличии от гостиниц города. Например: в одних из
                        наших апартаментов, мы можем разместить 4-5 человек,
                        чего нельзя сделать в номерах гостиниц. Также, для
                        комфортного сна наших гостей в наших апартаментах
                        удобные и качественные матрасы.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
        <Footer />
    </>
)

export default about
