import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import type { V2_MetaFunction } from '@remix-run/node';

import reference1picture1 from '../../assets/references/reference1/picture1.jpg';
import reference1picture2 from '../../assets/references/reference1/picture2.jpg';
import reference1picture3 from '../../assets/references/reference1/picture3.jpg';
import reference1picture4 from '../../assets/references/reference1/picture4.jpg';
import reference2picture1 from '../../assets/references/reference2/picture1.jpg';
import reference2picture2 from '../../assets/references/reference2/picture2.jpg';
import reference2picture3 from '../../assets/references/reference2/picture3.jpg';
import reference2picture4 from '../../assets/references/reference2/picture4.jpg';
import reference2picture5 from '../../assets/references/reference2/picture5.jpg';
import reference3picture1 from '../../assets/references/reference3/picture1.jpg';
import reference3picture2 from '../../assets/references/reference3/picture2.jpg';
import reference3picture3 from '../../assets/references/reference3/picture3.jpg';
import reference4picture1 from '../../assets/references/reference4/picture1.jpg';
import reference4picture2 from '../../assets/references/reference4/picture2.jpg';
import reference4picture3 from '../../assets/references/reference4/picture3.jpg';
import reference4picture4 from '../../assets/references/reference4/picture4.jpg';
import reference5picture1 from '../../assets/references/reference5/picture1.jpg';
import reference5picture2 from '../../assets/references/reference5/picture2.jpg';
import reference5picture3 from '../../assets/references/reference5/picture3.jpg';
import reference5picture4 from '../../assets/references/reference5/picture4.jpg';
import reference5picture5 from '../../assets/references/reference5/picture5.jpg';
import RouteTitle from '~/components/RouteTitle';

export const meta: V2_MetaFunction = () => [
    { name: 'description', content: 'Tekintse meg korábbi megbízásaim eredményeit!' },
    { title: 'Referenciák - Mészáros Zsolt egyéni vállalkozó' },
];

export default function References() {
    const { t } = useTranslation();

    return (
        <Grid container justifyContent={'center'} p={1} xs={12}>
            <Grow in>
                <Grid md={5} p={1} sm={6} xl={4} xs={12}>
                    <RouteTitle title={t('references_title')} />
                    <Divider />
                    <Grid py={1} xs={12}>
                        <ImageList>
                            <ImageListItem>
                                <img alt={'reference1picture1'} src={reference1picture1} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference1picture2'} src={reference1picture2} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference1picture3'} src={reference1picture3} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference1picture4'} src={reference1picture4} />
                            </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Divider />
                    <Grid py={1} xs={12}>
                        <ImageList>
                            <ImageListItem>
                                <img alt={'reference2picture1'} src={reference2picture1} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference2picture2'} src={reference2picture2} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference2picture3'} src={reference2picture3} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference2picture4'} src={reference2picture4} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference2picture5'} src={reference2picture5} />
                            </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Divider />
                    <Grid py={1} xs={12}>
                        <ImageList>
                            <ImageListItem>
                                <img alt={'reference3picture1'} src={reference3picture1} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference3picture2'} src={reference3picture2} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference3picture3'} src={reference3picture3} />
                            </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Divider />
                    <Grid py={1} xs={12}>
                        <ImageList>
                            <ImageListItem>
                                <img alt={'reference4picture1'} src={reference4picture1} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference4picture2'} src={reference4picture2} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference4picture3'} src={reference4picture3} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference4picture4'} src={reference4picture4} />
                            </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Divider />
                    <Grid py={1} xs={12}>
                        <ImageList>
                            <ImageListItem>
                                <img alt={'reference5picture1'} src={reference5picture1} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference5picture2'} src={reference5picture2} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference5picture3'} src={reference5picture3} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference5picture4'} src={reference5picture4} />
                            </ImageListItem>
                            <ImageListItem>
                                <img alt={'reference5picture5'} src={reference5picture5} />
                            </ImageListItem>
                        </ImageList>
                    </Grid>
                </Grid>
            </Grow>
        </Grid>
    );
}
