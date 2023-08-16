import { cssBundleHref } from '@remix-run/css-bundle';
import Fab from '@mui/material/Fab';
import { json } from '@remix-run/node';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { ThemeProvider } from '@mui/material/styles';
import { useChangeLanguage } from 'remix-i18next';
import { useTranslation } from 'react-i18next';
import type { LinksFunction, LoaderArgs, LoaderFunction, V2_MetaFunction } from '@remix-run/node';

import Footer from './components/Footer';
import i18next from '~/i18next.server';
import Navbar from './components/Navbar';
import ScrollTopButton from './components/ScrollTopButton';
import theme from './utilities/theme';

export const links: LinksFunction = () => [...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])];

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
    let locale = await i18next.getLocale(request);
    return json({ locale });
};

export const meta: V2_MetaFunction = () => [
    { name: 'author', content: 'Mészáros Barnabás' },
    { name: 'description', content: 'Mészáros Zsolt egyéni vállakozó - villanyszerelés, napelem telepítés.' },
    { name: 'keywords', content: 'Mészáros Zsolt, villanyszerelés, napelem, elektromos autó' },
    { title: 'Mészáros Zsolt egyéni vállalkozó' },
];

export default function App() {
    const { i18n } = useTranslation();

    const { locale } = useLoaderData<{ locale: string }>();

    useChangeLanguage(locale);

    return (
        <html lang={locale} dir={i18n.dir()}>
            <head>
                <meta charSet={'utf-8'} />
                <meta name={'viewport'} content={'width=device-width,initial-scale=1'} />
                <Meta />
                <Links />
            </head>
            <body style={{ margin: 0 }}>
                <ThemeProvider theme={theme}>
                    <Navbar />
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                    <ScrollTopButton>
                        <Fab aria-label={'scroll back to top'} color={'primary'}>
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTopButton>
                </ThemeProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
