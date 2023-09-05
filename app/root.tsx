import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { ReactNode, useContext } from 'react';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material';
import { useChangeLanguage } from 'remix-i18next';
import { useTranslation } from 'react-i18next';
import { withEmotionCache } from '@emotion/react';
import type { LoaderArgs, LoaderFunction, V2_MetaFunction } from '@remix-run/node';

import ClientStyleContext from './utilities/ClientStyleContext';
import i18next from '~/i18next.server';
import Navbar from './components/Navbar';
import theme from './utilities/theme';

interface DocumentProps {
    children: ReactNode;
    locale?: string;
    i18n?: any;
    title?: string;
}

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => ({ locale: await i18next.getLocale(request) });

export const meta: V2_MetaFunction = () => [
    { name: 'author', content: 'Mészáros Barnabás' },
    { name: 'description', content: 'Mészáros Zsolt egyéni vállakozó - villanyszerelés, napelem telepítés.' },
    { name: 'keywords', content: 'Mészáros Zsolt,villanyszerelés,napelem,elektromos autó,Mészáros Barnabás' },
    { title: 'Mészáros Zsolt egyéni vállalkozó' },
];

const Document = withEmotionCache(({ children, i18n, locale, title }: DocumentProps, emotionCache) => {
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEnhancedEffect(() => {
        // re-link sheet container
        emotionCache.sheet.container = document.head;
        // re-inject tags
        const tags = emotionCache.sheet.tags;
        emotionCache.sheet.flush();
        tags.forEach((tag) => {
            // eslint-disable-next-line no-underscore-dangle
            (emotionCache.sheet as any)._insertTag(tag);
        });
        // reset cache to reapply global styles
        clientStyleData.reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <html dir={i18n?.dir()} lang={locale || 'en'}>
            <head>
                <meta charSet={'utf-8'} />
                <meta name={'viewport'} content={'width=device-width,initial-scale=1'} />
                <meta name={'theme-color'} content={theme.palette.primary.main} />
                {title ? <title>{title}</title> : null}
                <Meta />
                <Links />
                <link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
                <link rel={'preconnect'} href={'https://fonts.gstatic.com'} crossOrigin="" />
                <link rel={'stylesheet'} href={'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap'} />
                <meta name={'emotion-insertion-point'} content={'emotion-insertion-point'} />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
});

export default function App() {
    const { i18n } = useTranslation();

    const { locale } = useLoaderData<{ locale: string }>();

    useChangeLanguage(locale);

    return (
        <Document i18n={i18n} locale={locale}>
            <Navbar />
            <Outlet />
        </Document>
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);

    return (
        <Document title={'Error!'}>
            <div>
                <h1>There was an error</h1>
                {/* <p>{error.message}</p> */}
                <hr />
                <p>Hey, developer, you should replace this with what you want your users to see.</p>
            </div>
        </Document>
    );
}
