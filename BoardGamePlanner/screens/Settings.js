//this is a nested screen
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  TextInput,
  SafeAreaView,
  Pressable,
  Text, View} from 'react-native';
import {globalStyles} from "../styles";
import { FontAwesome } from '@expo/vector-icons';
import LanguageSelect from '../components/LanguageSelect';

import { useTranslation } from 'react-i18next';

const Settings = ({route}) => {
	// get the translation instance
    const { t } = useTranslation();

    return (  
		<View style={globalStyles.container}>
       		
			{/* add the language select component to the view*/}
            <LanguageSelect />
    
			<Text style={globalStyles.h5}>{t('common:locationSelectLabel')}</Text>
			
			<TextInput
				style={globalStyles.input}
				// onChangeText='Location'
				value='Sofia, Bulgaria'
			/>
        </View>

    )
}

export default Settings;
