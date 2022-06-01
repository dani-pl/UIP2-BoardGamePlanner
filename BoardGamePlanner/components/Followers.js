import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React from 'react'
import { globalStyles } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";
import { useTranslation } from 'react-i18next';

export const Followers = (props) => {
	
	const {t} = useTranslation()

	return (
		<View style={globalStyles.flexRow }>
				<View style={globalStyles.flexColumn }>
					<Text style={globalStyles.h6 } >{props.followers ? props.followers.length:0 }</Text>
					<Text style={globalStyles.subtitle2 } >{t('common:followers')}</Text>
				</View>
				<View style={globalStyles.flexColumn }>
					<Text style={globalStyles.h6 } >{props.following ? props.following.length:0 }</Text>
					<Text style={globalStyles.subtitle2 } >{t('common:following')}</Text>
				</View>
			</View>
  ) 
}

