import { Fragment, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from '@remix-run/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Flag from 'react-world-flags';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PublicIcon from '@mui/icons-material/Public';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    const { i18n, t } = useTranslation();

    const { pathname } = useLocation();

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const links = [
        { route: '/', translationKey: 'navbar_home' },
        { route: '/services', translationKey: 'navbar_services' },
        { route: '/references', translationKey: 'navbar_references' },
        { route: '/contact', translationKey: 'navbar_contact' },
    ];

    return (
        <AppBar id={'appbar'} position={'sticky'}>
            <Container maxWidth={'xl'}>
                <Toolbar disableGutters>
                    <Typography
                        noWrap
                        sx={{
                            color: 'inherit',
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 'bold',
                            letterSpacing: '.3rem',
                            mr: 4,
                            textTransform: 'uppercase',
                        }}
                        variant={'h6'}
                    >
                        Mészáros Zsolt
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            color={'inherit'}
                            size={'large'}
                            aria-label={'account of current user'}
                            aria-controls={'menu-appbar'}
                            aria-haspopup={'true'}
                            onClick={(event) => setAnchorElNav(event.currentTarget)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                            id={'menu-appbar'}
                            keepMounted
                            onClick={() => setAnchorElNav(null)}
                            onClose={() => setAnchorElNav(null)}
                            open={Boolean(anchorElNav)}
                            sx={{ display: { md: 'none', xs: 'block' } }}
                            transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        >
                            {links.map((link, index) => (
                                <MenuItem component={Link} key={index} to={link.route}>
                                    <Typography textAlign={'center'}>{t(link.translationKey)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant={'h5'}
                        sx={{
                            color: 'inherit',
                            display: { md: 'none', xs: 'flex' },
                            flexGrow: 1,
                            fontWeight: 'bold',
                            mr: 2,
                            textTransform: 'uppercase',
                        }}
                        textAlign={'center'}
                    >
                        Mészáros Zsolt
                    </Typography>
                    <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
                        {links.map((link, index) => (
                            <Button
                                component={Link}
                                key={index}
                                sx={{
                                    color: 'inherit',
                                    display: 'block',
                                    fontWeight: 'bold',
                                    my: 2,
                                }}
                                to={link.route}
                                variant={pathname === link.route ? 'outlined' : 'text'}
                            >
                                {t(link.translationKey)}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {isTabletOrMobile ? (
                            <IconButton onClick={(event) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
                                <PublicIcon fontSize={'large'} />
                            </IconButton>
                        ) : (
                            <Fragment>
                                <Button onClick={() => i18n.changeLanguage('de')}>
                                    <Flag code={'de'} height={i18n.language === 'de' ? '32' : '24'} />
                                </Button>
                                <Button onClick={() => i18n.changeLanguage('en')}>
                                    <Flag code={'gb'} height={i18n.language === 'en' ? '32' : '24'} />
                                </Button>
                                <Button onClick={() => i18n.changeLanguage('hu')}>
                                    <Flag code={'hu'} height={i18n.language === 'hu' ? '32' : '24'} />
                                </Button>
                            </Fragment>
                        )}
                        <Menu
                            anchorEl={anchorElUser}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            id={'menu-appbar'}
                            keepMounted
                            onClick={() => setAnchorElUser(null)}
                            onClose={() => setAnchorElUser(null)}
                            open={Boolean(anchorElUser)}
                            sx={{ mt: '45px' }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                            <MenuItem onClick={() => i18n.changeLanguage('de')} selected={i18n.language === 'de'}>
                                <Typography textAlign={'center'}>Deutsch</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => i18n.changeLanguage('en')} selected={i18n.language === 'en'}>
                                <Typography textAlign={'center'}>English</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => i18n.changeLanguage('hu')} selected={i18n.language === 'hu'}>
                                <Typography textAlign={'center'}>Magyar</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
