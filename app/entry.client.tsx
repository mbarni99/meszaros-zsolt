import Backend from 'i18next-http-backend';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { getInitialNamespaces } from 'remix-i18next';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { RemixBrowser } from '@remix-run/react';
import { ReactNode, startTransition, StrictMode, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import ClientStyleContext from './utilities/ClientStyleContext';
import createEmotionCache from './utilities/createEmotionCache';
import i18n from './i18n';
import i18next from 'i18next';
import theme from './utilities/theme';

interface ClientCacheProviderProps {
    children: ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
    const [cache, setCache] = useState(createEmotionCache());

    const clientStyleContextValue = useMemo(
        () => ({
            reset() {
                setCache(createEmotionCache());
            },
        }),
        []
    );

    return (
        <ClientStyleContext.Provider value={clientStyleContextValue}>
            <CacheProvider value={cache}>{children}</CacheProvider>
        </ClientStyleContext.Provider>
    );
}

async function hydrate() {
    await i18next
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(Backend)
        .init({
            ...i18n,
            backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
            detection: { caches: [], order: ['htmlTag'] },
            ns: getInitialNamespaces(),
        });

    startTransition(() => {
        hydrateRoot(
            document,
            <ClientCacheProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <I18nextProvider i18n={i18next}>
                        <StrictMode>
                            <RemixBrowser />
                        </StrictMode>
                    </I18nextProvider>
                </ThemeProvider>
            </ClientCacheProvider>
        );
    });
}

if (window.requestIdleCallback) window.requestIdleCallback(hydrate);
else window.setTimeout(hydrate, 1);
