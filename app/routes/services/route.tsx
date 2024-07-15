import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import type { V2_MetaFunction } from '@remix-run/node';

import ServiceCard from '~/components/ServiceCard';

import antennaImage from '~/assets/services/antenna-image.png';
import distributionBoxImage from '~/assets/services/distribution-box-image.jpg';
import electricalInstallationImage from '~/assets/services/electrical-installation-image.jpg';
import electricalRenovationImage from '~/assets/services/electrical-renovation-image.jpg';
import electricVehicleImage from '~/assets/services/electric-vehicle-image.jpg';
import heatingImage from '~/assets/services/heating-image.jpg';
import householdApplianceImage from '~/assets/services/household-appliance-image.jpg';
import lightingImage from '~/assets/services/lighting-image.jpg';
import powerOutletImage from '~/assets/services/power-outlet-image.jpg';
import solarPanelImage from '~/assets/services/solar-panel-image.jpg';

export const meta: V2_MetaFunction = () => [
    { name: 'description', content: 'Tekintse meg szolgáltatásaink széles kínálatát!' },
    { title: 'Szolgáltatásaink - Mészáros Zsolt egyéni vállalkozó' },
];

export default function OurServices() {
    const { t } = useTranslation();

    return (
        <Grow in={true}>
            <Grid container xs={12}>
                <Grid py={1} xs={12}>
                    <Typography align={'center'} variant={'h4'}>
                        {t('services_title')}
                    </Typography>
                </Grid>
                <ServiceCard description={t('service_1_description')} image={solarPanelImage} title={t('service_1_title')} />
                <ServiceCard description={t('service_2_description')} image={electricalInstallationImage} title={t('service_2_title')} />
                <ServiceCard description={t('service_3_description')} image={electricalRenovationImage} title={t('service_3_title')} />
                <ServiceCard description={t('service_4_description')} image={distributionBoxImage} title={t('service_4_title')} />
                <ServiceCard description={t('service_5_description')} image={lightingImage} title={t('service_5_title')} />
                <ServiceCard description={t('service_6_description')} image={heatingImage} title={t('service_6_title')} />
                <ServiceCard description={t('service_7_description')} image={powerOutletImage} title={t('service_7_title')} />
                <ServiceCard description={t('service_8_description')} image={householdApplianceImage} title={t('service_9_title')} />
                <ServiceCard description={t('service_9_description')} image={electricVehicleImage} title={t('service_10_title')} />
                <ServiceCard description={t('service_10_description')} image={antennaImage} title={t('service_11_title')} />
            </Grid>
        </Grow>
    );
}
