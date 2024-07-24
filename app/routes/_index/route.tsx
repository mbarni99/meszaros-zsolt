import { useTranslation } from 'react-i18next';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

import RouteTitle from '~/components/RouteTitle';

export default function Index() {
    const { t } = useTranslation();

    return (
        <Grid container justifyContent={'center'} p={1} xs={12}>
            <Grow in>
                <Grid md={5} p={1} sm={6} xl={4} xs={12}>
                    <RouteTitle title={t('home_title')} />
                    <List disablePadding>
                        <ListItem>
                            <ListItemIcon>
                                <SolarPowerIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('home_activity_1')} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <MapsHomeWorkIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('home_activity_2')} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ElectricCarIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('home_activity_3')} />
                        </ListItem>
                    </List>
                </Grid>
            </Grow>
        </Grid>
    );
}
