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


import Logo from './images/vcf_logo.svg';
import NIUALogo from './images/niua.svg';
import Link from 'next/link';
import styles from '@/styles/Header.module.scss';

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
        link: 'sustainability'
    }
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {

    const router = useRouter();

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
                                    Value Capture Finance
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
                
            </AppBar>

        </header>
    )
}