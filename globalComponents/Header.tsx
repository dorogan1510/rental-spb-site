import MenuIcon from '@mui/icons-material/Menu'
import { SelectChangeEvent } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { useRouter } from 'next/router'
import * as React from 'react'
import Link from '../src/Link'
import { cn } from '../src/translation/cn'
import { ru } from '../src/translation/ru'

const Header = () => {
    const router = useRouter()
    const { locale }: any = router
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

    const changeLanguage = (e: SelectChangeEvent<string>) => {
        const locale = e.target.value
        const { pathname, asPath, query } = router
        router.replace({ pathname, query }, asPath, { locale })
    }
    const [hrefRoomList, setHrefRoomList] = React.useState<string>('#room-list')

    React.useEffect(() => {
        if (router.pathname !== '/') {
            setHrefRoomList('/#room-list')
        }
    }, [])

    const pages = [
        {
            id: '#id1',
            link: 'Главная',
            href: `/${encodeURIComponent(locale)}`,
        },

        {
            id: '#id2',
            link: 'Наши квартиры',
            href: hrefRoomList,
        },
        {
            id: '#id3',
            link: 'О нас',
            href: '/about',
        },
    ]

    const dynamicHeaderStyle = {
        color: router.asPath === '/' ? 'white' : '#1a2d4d !important',
    }

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar
            position='relative'
            sx={{
                padding: { xs: '1rem 0.5rem', md: '1rem 6rem' },
                mb: '1rem',
                boxShadow: '0',
            }}
            color='transparent'
        >
            <Container maxWidth='xl'>
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: { xs: 'flex-start', md: 'center' } }}
                >
                    {/* <Box sx={{ flexGrow: 1 }}>
                        <IconButton
                            href={`/${encodeURIComponent(locale)}`}
                            sx={{ p: 0 }}
                            style={dynamicHeaderStyle}
                        >
                            LOGO
                        </IconButton>
                    </Box> */}
                    <nav>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            {pages.map(page => (
                                <Button
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                    href={page.href}
                                    style={dynamicHeaderStyle}
                                    sx={{
                                        my: 2,
                                        fontSize: '16px',
                                        display: 'block',
                                        textTransform: 'none',
                                    }}
                                >
                                    {page.link}
                                </Button>
                            ))}
                        </Box>
                    </nav>

                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            style={dynamicHeaderStyle}
                        >
                            <MenuIcon sx={{ width: '30px', height: '30px' }} />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none',
                                },
                            }}
                        >
                            {pages.map(page => (
                                <Link
                                    href={page.href}
                                    sx={{ textDecoration: 'none' }}
                                >
                                    <MenuItem
                                        key={page.id}
                                        onClick={handleCloseNavMenu}
                                        // style={dynamicHeaderStyle}
                                    >
                                        {page.link}
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    {/* <FormControl fullWidth sx={{ width: 'auto' }}>
                        {router.asPath === '/' ? (
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={locale}
                                onChange={changeLanguage}
                                variant='outlined'
                                sx={{
                                    width: 70,
                                    height: 40,
                                    border: '1px solid white',
                                    color: '#fff',
                                    '& .MuiSvgIcon-root': {
                                        color: 'white',
                                    },
                                }}
                            >
                                <MenuItem value={'ru'}>RU</MenuItem>
                                <MenuItem value={'cn'}>CN</MenuItem>
                            </Select>
                        ) : (
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={locale}
                                onChange={changeLanguage}
                                variant='outlined'
                                sx={{
                                    width: 70,
                                    height: 40,
                                    border: '1px solid #1a2d4d',
                                    color: 'primary.main',
                                    '& .MuiSvgIcon-root': {
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                <MenuItem value={'ru'}>RU</MenuItem>
                                <MenuItem value={'cn'}>CN</MenuItem>
                            </Select>
                        )}
                    </FormControl> */}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
