"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '@/assests/logo.png'
import Image from 'next/image';
// icon 
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const navItems = [
    {
        route: "Home",
        pathname: "/"
    },
    {
        route: "Artist Profiles",
        pathname: "/artists"
    },
    {
        route: "Contact Us ",
        pathname: "/contact"
    }
];


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" className=' bg-transparent max-w-6xl mx-auto' elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem key={item} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{item.route}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                        <Image src={logo} width={100} height={100} alt="logo" />
                   
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', }}>
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block' }}>
                                    {item.route}
                                </Button>
                            </Link>

                        ))}
                    </Box>

                    <Box>
                        <IconButton>
                            <SearchIcon></SearchIcon>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
