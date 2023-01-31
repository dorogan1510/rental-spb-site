import { Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { rooms } from '../src/dataListRooms'
import style from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <div style={{ padding: '0 0 2rem' }}>
            <Stack
                sx={{
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: { xs: '1rem 2rem', md: '1rem 6rem' },
                }}
            >
                <IconButton
                    href='/'
                    sx={{ p: 2, color: '#1a2d4d', margin: '0 auto' }}
                >
                    {/* <Image
                                src={}
                                alt={'logo'}
                                width={40}
                                height={40}
                                style={{ borderRadius: '50%' }}
                            /> */}
                    LOGO
                </IconButton>
                <Grid container spacing={3}>
                    <Grid item container xs={12} md={6} spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant='h5' gutterBottom>
                                Контакты
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                href={'https://vk.com/club218325301'}
                                target='_blank'
                                sx={{
                                    textTransform: 'none',
                                    padding: '0.5rem',
                                }}
                            >
                                <Stack
                                    sx={{
                                        flexDirection: 'row',
                                        gap: '1rem',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        version='1.0'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='40'
                                        height='40'
                                        viewBox='0 0 900.000000 900.000000'
                                        preserveAspectRatio='xMidYMid meet'
                                    >
                                        <g
                                            transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)'
                                            fill='#1a2d4d'
                                            stroke='none'
                                        >
                                            <path
                                                d='M1315 8686 c-450 -94 -818 -423 -964 -862 -65 -196 -61 40 -61 -3324
0 -3359 -4 -3124 60 -3321 146 -447 526 -779 992 -870 96 -18 191 -19 3156
-19 3366 0 3130 -4 3326 61 388 129 699 441 826 828 64 197 60 -38 60 3321 0
3356 4 3124 -60 3319 -128 391 -434 699 -826 830 -196 65 42 61 -3334 60
l-3065 0 -110 -23z m3372 -2611 c171 -30 229 -62 271 -154 34 -74 37 -158 24
-691 -11 -443 -6 -549 29 -629 29 -66 75 -111 114 -111 90 0 236 152 428 446
162 249 260 433 383 722 42 97 86 193 99 213 44 68 28 67 655 71 l565 3 48
-24 c82 -40 96 -105 51 -239 -64 -192 -217 -430 -589 -917 -289 -377 -325
-436 -325 -533 0 -98 48 -161 303 -400 295 -276 498 -510 592 -684 34 -64 40
-81 40 -138 0 -85 -23 -118 -111 -161 -65 -32 -68 -33 -262 -40 -335 -13 -761
-12 -817 2 -178 44 -286 128 -568 442 -239 267 -331 333 -427 307 -46 -12
-109 -79 -140 -146 -30 -68 -58 -206 -65 -332 -4 -59 -11 -122 -17 -140 -15
-51 -54 -89 -114 -111 -50 -19 -77 -21 -307 -21 -272 0 -369 10 -549 55 -272
69 -547 208 -783 395 -404 320 -875 1000 -1344 1938 -180 360 -262 545 -268
608 -5 49 -3 55 24 83 54 54 75 56 578 56 l460 0 54 -30 c64 -36 85 -65 146
-210 191 -449 473 -924 664 -1116 101 -102 144 -122 208 -98 76 29 115 154
134 429 14 207 -1 545 -29 661 -36 147 -106 220 -247 256 -38 10 -73 22 -77
27 -10 14 15 56 59 98 77 75 202 112 422 128 176 12 579 3 688 -15z'
                                            />
                                        </g>
                                    </svg>
                                    <Typography
                                        variant='body1'
                                        sx={{ color: 'black' }}
                                    >
                                        Наша группа Вконтакте
                                    </Typography>
                                </Stack>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                Адрес нашего офиса (если есть)
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                +7 (777) 77-77
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                email@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} md={6}>
                        <Grid item xs={12}>
                            <Typography variant='h5' gutterBottom>
                                Наши квартиры
                            </Typography>
                        </Grid>
                        {rooms.map((data: any) => (
                            <Grid item xs={12} md={6}>
                                <Link
                                    href={data.href}
                                    target='_blank'
                                    className={style.link}
                                >
                                    <Typography>{data.title}</Typography>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Stack>

            <Typography
                variant='body1'
                sx={{ textAlign: 'center', marginTop: '3rem' }}
            >
                All rights reserved. Copyright © 2023.
            </Typography>
        </div>
    )
}

export default Footer
