import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React from 'react'
import { globalStyles } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";
import { useTranslation } from 'react-i18next';

const Followers = ({tool, icon}) =>  {
   	// get the translation instance
	const { t } = useTranslation();
	
	return (
	<View style={globalStyles.flexRow }>
		<View style={globalStyles.flexColumn }>
			<Text style={globalStyles.h6 } >350</Text>
			<Text style={globalStyles.subtitle2 } >{t('common:following')}</Text>
		</View>
		<View style={globalStyles.flexColumn }>
			<Text style={globalStyles.h6 } >345</Text>
			<Text style={globalStyles.subtitle2 } >{t('common:followers')}</Text>
		</View>
	</View>
  )
}

export default Followers;