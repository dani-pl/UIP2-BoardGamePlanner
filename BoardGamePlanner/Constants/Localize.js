import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

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
    // default is english
    lng: 'en',
    // fallback is english (e.g., when a key doesn't exist in another language)
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    // default language namespace
    defaultNS: 'common'
})