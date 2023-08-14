import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, useNavigation } from 'react-router-dom';
import ClassIcon from '@mui/icons-material/Class';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const lengths = { message: 1000, sender: 50, subject: 100 };

export default function Contact() {
    const { t } = useTranslation();

    const { state } = useNavigation();

    const [message, setMessage] = useState('');
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');

    return (
        <Grow in={true}>
            <Grid container justifyContent={'center'} p={1} xs={12}>
                <Grid xs={12} md={8} xl={6}>
                    <Form method={'post'}>
                        <Paper elevation={8} sx={{ padding: 1 }}>
                            <Typography align={'center'} gutterBottom variant={'h5'}>
                                {t('contact_title')}
                            </Typography>
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
                                }}
                                label={t('contact_sender_label')}
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
                                }}
                                label={t('contact_subject_label')}
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
                                }}
                                label={t('contact_message_label')}
                                maxRows={12}
                                minRows={8}
                                multiline
                                name={'message'}
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                            <Grid xs={12}>
                                <LoadingButton endIcon={<SendIcon />} loading={state === 'submitting'}>
                                    {t('contact_submit')}
                                </LoadingButton>
                            </Grid>
                        </Paper>
                    </Form>
                </Grid>
            </Grid>
        </Grow>
    );
}
