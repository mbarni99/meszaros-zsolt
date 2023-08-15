import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

export default function Index() {
    const { t } = useTranslation();

    return (
        <Grow in={true}>
            <Grid p={2} xs={12}>
                <Typography variant={'h4'}>{t('home_title')}</Typography>
                <Typography color={'text.secondary'} variant={'h6'}>
                    {t('service_1_description')}
                </Typography>
                <Typography color={'text.secondary'} variant={'h6'}>
                    {t('service_2_description')}
                </Typography>
                <Typography color={'text.secondary'} variant={'h6'}>
                    {t('service_10_description')}
                </Typography>
                <Typography variant={'h6'}>{t('home_description')}</Typography>
            </Grid>
        </Grow>
    );
}
