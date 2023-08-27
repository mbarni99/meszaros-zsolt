import { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import ClassIcon from '@mui/icons-material/Class';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Unstable_Grid2';
import Grow from '@mui/material/Grow';
import HomeIcon from '@mui/icons-material/Home';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import sgMail from '@sendgrid/mail';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { z } from 'zod';
import type { ActionArgs, ActionFunction, V2_MetaFunction } from '@remix-run/node';
import type { SendGridError } from '~/types/SendGridError';

const lengths = { message: 1000, sender: 50, subject: 100 };

const ContactSchema = z.object({
    message: z.string({ required_error: 'contactschema_message_required' }).max(lengths.message, 'contactschema_message_max_length'),
    sender: z
        .string({ required_error: 'contactschema_sender_required' })
        .max(lengths.sender, 'contactschema_sender_max_length')
        .email('contactschema_sender_email'),
    subject: z.string({ required_error: 'contactschema_subject_required' }).max(lengths.subject, 'contactschema_subject_max_length'),
});

type ContactSchema = z.infer<typeof ContactSchema>;

export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();

    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const contactInput = {
        message: formData.get('message') as string,
        sender: formData.get('sender') as string,
        subject: formData.get('subject') as string,
    };

    const validatedContactInput: ContactSchema = ContactSchema.parse(contactInput);

    const messageToSender = {
        to: validatedContactInput.sender,
        from: 'zsoltm340@gmail.com',
        subject: validatedContactInput.subject,
        text: validatedContactInput.message,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    const messageToOwner = {
        to: 'zsoltm340@gmail.com',
        from: 'zsoltm340@gmail.com',
        subject: validatedContactInput.subject,
        text: validatedContactInput.message,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    try {
        await sgMail.send(messageToOwner);
        return await sgMail.send(messageToSender);
    } catch (error: any) {
        error?.response?.body.errors?.map((error: SendGridError) => console.error(error.message));
        return error;
    }
};

export const meta: V2_MetaFunction = () => [
    { name: 'description', content: 'Keressen minket bizalommal!' },
    { title: 'Kapcsolat - Mészáros Zsolt egyéni vállalkozó' },
];

export default function Contact() {
    const { t } = useTranslation();

    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

    const actionData = useActionData();
    const { state } = useNavigation();

    const [message, setMessage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [sender, setSender] = useState<string>('');
    const [subject, setSubject] = useState<string>('');

    useEffect(() => setOpen(actionData?.[0]?.statusCode === 202), [JSON.stringify(actionData)]);

    return (
        <Fragment>
            <Snackbar
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                autoHideDuration={5000}
                open={open}
                onClose={() => setOpen(false)}
            >
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
                                <Chip icon={<PhoneIcon />} label={t('contact_data_phone_number')} />
                            </Grid>
                            <Grid py={1} xs={12}>
                                <Chip icon={<EmailIcon />} label={t('contact_data_email_address')} />
                            </Grid>
                            <Grid py={1} xs={12}>
                                <Chip icon={<HomeIcon />} label={t('contact_data_address')} />
                            </Grid>
                        </section>
                    </Grid>
                </Grow>
                <Grow in>
                    <Grid md={5} p={1} sm={6} xl={4} xs={12}>
                        <section id={'section-contact-form'}>
                            <Grid pb={2} xs={12}>
                                <Typography variant={'h6'}>{t('contact_form_title')}</Typography>
                            </Grid>
                            <Form method={'post'}>
                                <TextField
                                    inputProps={{ maxLength: lengths.sender }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position={'end'}>{`${sender?.length}/${lengths.sender}`}</InputAdornment>
                                        ),
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
                                <Grid pt={2} xs={12}>
                                    <LoadingButton endIcon={<SendIcon />} loading={state === 'submitting'} type={'submit'}>
                                        {t('contact_form_submit')}
                                    </LoadingButton>
                                </Grid>
                            </Form>
                        </section>
                    </Grid>
                </Grow>
            </Grid>
        </Fragment>
    );
}
