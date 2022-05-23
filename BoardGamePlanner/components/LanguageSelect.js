
import React from 'react'
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../styles';
import { useTranslation } from 'react-i18next';

const LANGUAGES =  [
    { code : 'en', label: 'English'},
    { code : 'nl', label: 'Nederlands'},
    { code : 'bg', label: 'Bulgarian'}
]

const LanguageSelect = () => {
    // get the translation instance
    const { t , i18n } = useTranslation();
    // get the current language code
    const selectedLanguageCode = i18n.language;

    /**
     * Updates the apps language to the selected language
     * @param {string} languageCode 
     * @returns 
     */
    const setLanguage = (languageCode) => {
        return i18n.changeLanguage(languageCode)
    }

    return (
        <>
            <Text style={globalStyles.h5}>{t('common:langSelectLabel')}</Text>
            <View style={globalStyles.flexRow}>
                    
                {
                    // for each language
                    LANGUAGES.map(language => {
                        // check if it is the current selected language
                        const selectedLanguage = language.code === selectedLanguageCode
                        // return language button
                        return (
                            <Pressable 
                                key={language.code}
                                // if the language is selected apply different style
                                style={selectedLanguage ? globalStyles.btnSecondarySelected : globalStyles.btnSecondary}
                                onPress={ () => setLanguage(language.code) }
                            >
                                <Text style={globalStyles.btnTextNeutral}>{language.code.toLocaleUpperCase()}</Text>
                            </Pressable>
                        )
                    })
                }
            </View>
            <View style={globalStyles.spacing} />  
        </>
    )
}

export default LanguageSelect;