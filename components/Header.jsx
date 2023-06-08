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
import { useRouter } from 'next/router';

import styles from '@/styles/Header.module.scss';

import Logo from './images/logo.svg';
import NIUALogo from './images/niua.svg';
import Link from 'next/link';

const pages = [
    {
        name: 'About',
        link: 'about'
    }, {
        name: 'States',
        link: 'states'
    }, {
        name: 'Tool',
        link: 'tool'
    }, {
        name: 'Knowledge Platform',
        link: 'knowledge-platform'
    }, {
        name: 'Suitability of the tool',
        link: 'knowledge-platform'
    }
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {

    const router = useRouter();

    console.log(router)

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    function renderLinks() {
        let res = []

        pages.forEach((page, idx) => {
            let t = router.pathname.replace(/\[.*?\]/, '').replaceAll('/', '')

            let highlightClass = ''
            console.log(t, page.link, t == page.link)
            if(t == page.link) {
                highlightClass = styles.highlight
            }
            res.push(
                <Link key={idx} href={'/' + page.link}>
                    <Button
                        key={page}
                        className={styles.nav_text + ' ' + highlightClass}
                    >
                        {page.name}
                    </Button>
                </Link>
            )
        })
        
        return res
    }

    return (
        <header className={styles.header}>
            <AppBar className={styles.app_bar} position="static" >
                <Container className={styles.container}>
                    <div className={styles.logo_nav_container}>
                        <Link href="/">
                            <div className={styles.logo_container}>
                                <Logo/>

                                <Typography
                                    className={styles.brand_text}
                                    variant="h6"
                                    noWrap
                                    
                                >
                                    Value Capture Financing
                                </Typography>
                            </div>
                        </Link>
                        <Box className={styles.nav_container} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {renderLinks()}
                        </Box>
                    </div>
                    <div className={styles.niua_brand}>
                        <NIUALogo/>
                    </div>
                </Container>
                {/* <Container>
                    <Toolbar disableGutters> */}

                        

                        

                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            
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
                                    // marginRight: 'auto',
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ml:10}}>
                                        <Typography textAlign="center">{page} </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> */}

                        {/* <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color:'black',
                                textDecoration: 'none',
                            }}
                           
                        >
                            Value Capture Financing
                        </Typography> */}
                        
                        {/* Medium size */}
                        {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    className={styles.nav_text}
                                    onClick={handleCloseNavMenu}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box> */}

                        {/* <Box sx={{ flexGrow: 0 }}>
                           
                            <Menu
                                sx={{ mt: '45px'}}
                               

                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> */}
                    {/* </Toolbar>
                </Container> */}
            </AppBar>

        </header>
    )
}