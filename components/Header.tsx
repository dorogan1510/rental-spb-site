import { Link } from '@mui/material'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
// import logo from '../src/img/logo.webp'
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home'
import { useRouter } from 'next/router'

const pages = [
    {
        id: '#id1',
        link: 'Главная',
        href: '/',
    },

    {
        id: '#id2',
        link: 'О нас',
        href: '/',
    },
]

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )
    const router = useRouter()
    const dynamicHeaderStyle = {
        color: router.asPath === '/' ? 'white' : '#1a2d4d',
    }
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
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton
                            href='/'
                            sx={{ p: 0 }}
                            style={dynamicHeaderStyle}
                        >
                            {/* <Image
                                src={}
                                alt={'logo'}
                                width={40}
                                height={40}
                                style={{ borderRadius: '50%' }}
                            /> */}
                            {/* <HomeIcon
                                style={dynamicHeaderStyle}
                                sx={{
                                    width: 50,
                                    height: 50,
                                }}
                            /> */}
                            LOGO
                        </IconButton>
                    </Box>
                    <nav>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'flex-end',
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
                                        fontSize: '14px',
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
                            <MenuIcon />
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
                                <MenuItem
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                    style={dynamicHeaderStyle}
                                >
                                    <Button href={page.href}>
                                        {page.link}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
