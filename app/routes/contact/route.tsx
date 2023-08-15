import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, useNavigation } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import ClassIcon from '@mui/icons-material/Class';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import HomeIcon from '@mui/icons-material/Home';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => [
    { name: 'description', content: 'Keressen minket bizalommal!' },
    { title: 'Kapcsolat - Mészáros Zsolt egyéni vállalkozó' },
];

const lengths = { message: 1000, sender: 50, subject: 100 };

export default function Contact() {
    const { t } = useTranslation();

    const { state } = useNavigation();

    const [message, setMessage] = useState('');
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');

    return (
        <Grow in={true}>
            <Grid alignItems={'stretch'} container justifyContent={'center'} p={1} xs={12}>
                <Grid xs={12} md={6} p={1} xl={4}>
                    <Paper elevation={8} sx={{ padding: 1, height: '100%' }}>
                        <Grid xs={12}>
                            <Typography align={'center'} variant={'h4'}>
                                {t('contact_data_title')}
                            </Typography>
                        </Grid>
                        <Grid py={1} xs={12}>
                            <Typography align={'justify'} color={'text.secondary'}>
                                {t('contact_data_description')}
                            </Typography>
                        </Grid>
                        <Grid py={1} xs={12}>
                            <Chip icon={<PhoneIcon />} label={t('contact_data_phone_number')} />
                        </Grid>
                        <Grid py={1} xs={12}>
                            <Chip icon={<EmailIcon />} label={t('contact_data_email_address')} />
                        </Grid>
                        <Grid py={1} xs={12}>
                            <Chip icon={<HomeIcon />} label={t('contact_data_address')} />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6} p={1} xl={4}>
                    <Paper elevation={8} sx={{ padding: 1, height: '100%' }}>
                        <Form method={'post'}>
                            <TextField
                                autoFocus
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
                                onChange={(e) => setSender(e.target.value)}
                                value={sender}
                            />
                            <TextField
                                inputProps={{ maxLength: lengths.subject }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position={'end'}>{`${subject?.length}/${lengths.subject}`}</InputAdornment>
                                    ),
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
                                    endAdornment: (
                                        <InputAdornment position={'end'}>{`${message?.length}/${lengths.message}`}</InputAdornment>
                                    ),
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
                            <Grid xs={12}>
                                <LoadingButton endIcon={<SendIcon />} loading={state === 'submitting'}>
                                    {t('contact_form_submit')}
                                </LoadingButton>
                            </Grid>
                        </Form>
                    </Paper>
                </Grid>
            </Grid>
        </Grow>
    );
}
