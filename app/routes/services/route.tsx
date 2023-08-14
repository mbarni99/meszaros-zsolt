import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import type { V2_MetaFunction } from '@remix-run/node';

import ServiceCard from '~/components/ServiceCard';

export const meta: V2_MetaFunction = () => [
    { name: 'description', content: 'Tekintse meg szolgáltatásaink széles kínálatát!' },
    { title: 'Szolgáltatásaink - Mészáros Zsolt egyéni vállalkozó' },
];

export default function OurServices() {
    const { t } = useTranslation();

    return (
        <Grow in={true}>
            <Grid container>
                <ServiceCard description={t('service_1_description')} title={t('service_1_title')} />
                <ServiceCard description={t('service_2_description')} title={t('service_2_title')} />
                <ServiceCard description={t('service_3_description')} title={t('service_3_title')} />
                <ServiceCard description={t('service_4_description')} title={t('service_4_title')} />
                <ServiceCard description={t('service_5_description')} title={t('service_5_title')} />
                <ServiceCard description={t('service_6_description')} title={t('service_6_title')} />
                <ServiceCard description={t('service_7_description')} title={t('service_7_title')} />
                <ServiceCard description={t('service_8_description')} title={t('service_8_title')} />
                <ServiceCard description={t('service_9_description')} title={t('service_9_title')} />
                <ServiceCard description={t('service_10_description')} title={t('service_10_title')} />
            </Grid>
        </Grow>
    );
}
