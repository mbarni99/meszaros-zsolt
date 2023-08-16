import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import Typography from '@mui/material/Typography';

export default function Index() {
    const { t } = useTranslation();

    return (
        <Grow in={true}>
            <Grid container justifyContent={'center'} p={2} xs={12}>
                <Grid md={6} sm={10} xs={12}>
                    <section id={'section-main'}>
                        <Typography align={'center'} variant={'h4'}>
                            {t('home_title')}
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <SolarPowerIcon />
                                </ListItemIcon>
                                <ListItemText primary={t('service_1_description')} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MapsHomeWorkIcon />
                                </ListItemIcon>
                                <ListItemText primary={t('service_2_description')} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ElectricCarIcon />
                                </ListItemIcon>
                                <ListItemText primary={t('service_10_description')} />
                            </ListItem>
                        </List>
                        <Typography align={'center'} variant={'h6'}>
                            {t('home_description')}
                        </Typography>
                    </section>
                    <section id={'section-faq'}>
                        <Typography align={'center'} variant={'h4'}>
                            {t('home_title_faq')}
                        </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{t('home_faq_1_title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>{t('home_faq_1_description')}</AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{t('home_faq_2_title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>{t('home_faq_2_description')}</AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{t('home_faq_3_title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>{t('home_faq_3_description')}</AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{t('home_faq_4_title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>{t('home_faq_4_description')}</AccordionDetails>
                        </Accordion>
                    </section>
                </Grid>
            </Grid>
        </Grow>
    );
}
