import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

export default function Navbar() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const links = [
        { route: '/', translationKey: 'navbar_home' },
        { route: '/services', translationKey: 'navbar_services' },
        { route: '/contact', translationKey: 'navbar_contact' },
    ];

    return (
        <AppBar position={'static'}>
            <Toolbar>
                {links?.map((link, index) => (
                    <Button color={'secondary'} key={index} onClick={() => navigate(link?.route)}>
                        {t(link?.translationKey)}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}
