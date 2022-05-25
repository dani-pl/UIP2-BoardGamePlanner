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

const Settings = ({navigation}) => {
	// get the translation instance
    const { t } = useTranslation();

    return (  
		<View style={[
			globalStyles.container,{
			justifyContent:"space-between"
		}]}>
       		
			{/* adding language select component to the view */}
			<View>
				<LanguageSelect />
		
				<Text style={globalStyles.h5}>{t('common:locationSelectLabel')}</Text>
				
				<TextInput
					style={globalStyles.input}
					// onChangeText='Location'
					value='Sofia, Bulgaria'
				/>
			</View>

			<Pressable  
				style={[globalStyles.btnSecondary, {width:'100%', alignSelf:'center'}]}
				onPress={() => navigation.navigate("Credits")}
			>
				<Text style={globalStyles.btnTextNeutral}>{t('common:creditsBtnLabel')}</Text>
			</Pressable>
    </View>

    )
}

export default Settings;
