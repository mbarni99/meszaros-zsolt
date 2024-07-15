import { Fragment, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => [
    { name: 'description', content: 'Keressen minket bizalommal!' },
    { title: 'Kapcsolat - Mészáros Zsolt egyéni vállalkozó' },
];

export default function Contact() {
    const { t } = useTranslation();

    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

    const [open, setOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} autoHideDuration={5000} open={open} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity={'success'} sx={{ width: '100%' }}>
                    {t('contact_form_submit_success')}
                </Alert>
            </Snackbar>

            <Grid alignItems={'stretch'} container justifyContent={'center'} p={1} xs={12}>
                <Grow in>
                    <Grid md={5} p={1} sm={6} xl={4} xs={12}>
                        <section id={'section-contact-data'}>
                            <Grid xs={12}>
                                <Typography variant={isMobile ? 'h5' : 'h4'}>{t('contact_data_title')}</Typography>
                            </Grid>
                            <Grid py={1} xs={12}>
                                <Chip icon={<PhoneIcon />} label={t('contact_data_phone_number')} sx={{ fontSize: 18 }} />
                            </Grid>
                            <Grid py={1} xs={12}>
                                <Chip icon={<EmailIcon />} label={t('contact_data_email_address')} sx={{ fontSize: 18 }} />
                            </Grid>
                            <Grid py={1} xs={12}>
                                <Chip icon={<HomeIcon />} label={t('contact_data_address')} sx={{ fontSize: 18 }} />
                            </Grid>
                        </section>
                    </Grid>
                </Grow>
                {/* <Grow in>
                    <Grid md={5} p={1} sm={6} xl={4} xs={12}>
                        <section id={'section-contact-form'}>
                            <Grid pb={2} xs={12}>
                                <Typography variant={'h6'}>{t('contact_form_title')}</Typography>
                            </Grid>
                            <Form method={'post'}>
                                <TextField
                                    inputProps={{ maxLength: lengths.sender }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position={'end'}>{`${sender?.length}/${lengths.sender}`}</InputAdornment>,
                                        startAdornment: (
                                            <InputAdornment position={'start'}>
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                        sx: { borderRadius: '20px' },
                                    }}
                                    label={t('contact_form_sender')}
                                    name={'sender'}
                                    type={'email'}
                                    onChange={(e) => setSender(e.target.value)}
                                    value={sender}
                                />
                                <TextField
                                    inputProps={{ maxLength: lengths.subject }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position={'end'}>{`${subject?.length}/${lengths.subject}`}</InputAdornment>,
                                        startAdornment: (
                                            <InputAdornment position={'start'}>
                                                <ClassIcon />
                                            </InputAdornment>
                                        ),
                                        sx: { borderRadius: '20px' },
                                    }}
                                    label={t('contact_form_subject')}
                                    name={'subject'}
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                />
                                <TextField
                                    inputProps={{ maxLength: lengths.message }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position={'end'}>{`${message?.length}/${lengths.message}`}</InputAdornment>,
                                        sx: { borderRadius: '20px' },
                                    }}
                                    label={t('contact_form_message')}
                                    maxRows={12}
                                    minRows={8}
                                    multiline
                                    name={'message'}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                />
                                <Grid pt={2} xs={12}>
                                    <LoadingButton endIcon={<SendIcon />} loading={state === 'submitting'} type={'submit'}>
                                        {t('contact_form_submit')}
                                    </LoadingButton>
                                </Grid>
                            </Form>
                        </section>
                    </Grid>
                </Grow> */}
            </Grid>
        </Fragment>
    );
}
