import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// import the languages
import en from './Languages/en'
import bg from './Languages/bg'
import nl from './Languages/nl'

// create a collection resource of all the different languages
const LANGUAGES = {
    en, bg, nl
}

// initiate the language switch
i18n.use(initReactI18next).init({
    resources: LANGUAGES,
    react: {
        useSuspense: false
    },
    // we set the default language to the user's locale setting 
    // (we split by - since some locales are in following format nl-NL or en-US and we only require the first
    lng: Localization.locale.split('-')[0],
    // fallback is english (e.g., when users local is not available or when a key doesn't exist in another language)
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    // default language namespace
    defaultNS: 'common'
})

// console.log(Localization.locale.split('-')[0])
