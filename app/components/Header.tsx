import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Unstable_Grid2';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

const flagHu = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/HU.svg';
const flagUs = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg';

export default function Header() {
    const { i18n, t } = useTranslation();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <Grid alignItems={'center'} container justifyContent={'center'} sx={{ bgcolor: 'ternary.main' }}>
            <Grid paddingX={1} xs={12}>
                <Grid alignItems={'center'} container p={1} xs={12}>
                    <Grid xs>
                        <Fab
                            aria-label={'contact name'}
                            color={'primary'}
                            size={'small'}
                            sx={{ mb: { xs: 1, sm: 0 }, mr: { xs: 0, sm: 1 } }}
                            variant={'extended'}
                        >
                            <PersonIcon color={'secondary'} sx={{ mr: 1 }} />
                            <Typography color={'secondary.main'} sx={{ mr: { xs: 0, md: 1 } }}>
                                Mészáros Zsolt
                            </Typography>
                        </Fab>
                        <Fab
                            aria-label={'phone number'}
                            color={'primary'}
                            size={'small'}
                            sx={{ mb: { xs: 1, sm: 0 }, mr: { xs: 0, sm: 1 } }}
                            variant={'extended'}
                        >
                            <PhoneIcon color={'secondary'} sx={{ mr: 1 }} />
                            <Typography color={'secondary.main'} sx={{ mr: { xs: 0, md: 1 } }}>
                                +36 30/411-97-85
                            </Typography>
                        </Fab>
                        <Fab
                            aria-label={'email address'}
                            color={'primary'}
                            size={'small'}
                            sx={{ mb: { xs: 1, sm: 0 }, mr: { xs: 0, sm: 1 } }}
                            variant={'extended'}
                        >
                            <EmailIcon color={'secondary'} sx={{ mr: 1 }} />
                            <Typography color={'secondary'} sx={{ mr: { xs: 0, md: 1 } }}>
                                zsoltm340@gmail.com
                            </Typography>
                        </Fab>
                    </Grid>
                    <Grid container justifyContent={'flex-end'} xs={'auto'}>
                        <RadioGroup onChange={handleChange} row value={i18n.language}>
                            <Radio
                                checkedIcon={<img alt={t('language_english')} src={flagUs} style={{ height: '24px', width: 'auto' }} />}
                                icon={<img alt={t('language_english')} src={flagUs} style={{ height: '16px', width: 'auto' }} />}
                                value={'en'}
                            />
                            <Radio
                                checkedIcon={<img alt={t('language_hungarian')} src={flagHu} style={{ height: '24px', width: 'auto' }} />}
                                icon={<img alt={t('language_hungarian')} src={flagHu} style={{ height: '16px', width: 'auto' }} />}
                                value={'hu'}
                            />
                        </RadioGroup>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
