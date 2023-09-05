import Backend from 'i18next-http-backend';
import { RemixI18Next } from 'remix-i18next';
import { resolve } from 'node:path';

import i18n from './i18n';

let i18next = new RemixI18Next({
    detection: { fallbackLanguage: i18n.fallbackLng, supportedLanguages: i18n.supportedLngs },
    i18next: { ...i18n, backend: { loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json') } },
    plugins: [Backend],
});

export default i18next;
