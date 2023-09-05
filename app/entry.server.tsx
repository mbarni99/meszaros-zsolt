import Backend from 'i18next-http-backend';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { createInstance } from 'i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { renderToString } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';
import { resolve } from 'node:path';
import { Response } from '@remix-run/node';
import { ThemeProvider } from '@mui/material/styles';
import type { EntryContext } from '@remix-run/node';

import createEmotionCache from './utilities/createEmotionCache';
import i18n from './i18n';
import i18next from './i18next.server';
import theme from './utilities/theme';

export default async function handleRequest(request: Request, responseStatusCode: number, responseHeaders: Headers, remixContext: EntryContext) {
    const instance = createInstance();
    const lng = await i18next.getLocale(request);
    const ns = i18next.getRouteNamespaces(remixContext);

    await instance
        .use(initReactI18next)
        .use(Backend)
        .init({ ...i18n, backend: { loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json') }, lng, ns });

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    function MuiRemixServer() {
        return (
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <I18nextProvider i18n={instance}>
                        <RemixServer context={remixContext} url={request.url} />
                    </I18nextProvider>
                </ThemeProvider>
            </CacheProvider>
        );
    }

    const html = renderToString(<MuiRemixServer />);

    const { styles } = extractCriticalToChunks(html);

    let stylesHTML = '';

    styles.forEach(({ key, ids, css }) => {
        const emotionKey = `${key} ${ids.join(' ')}`;
        const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
        stylesHTML = `${stylesHTML}${newStyleTag}`;
    });

    const markup = html.replace(
        /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
        `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`
    );

    responseHeaders.set('Content-Type', 'text/html');

    return new Response(`<!DOCTYPE html>${markup}`, { headers: responseHeaders, status: responseStatusCode });
}
