import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  Text, View} from 'react-native';
import {globalStyles} from "../styles";
import { FontAwesome } from '@expo/vector-icons';
import GameListItem from '../components/GameListItem';
import ProfileComponent from '../components/ProfileComponent';

import { useTranslation } from 'react-i18next';

const Profile = ({navigation}) => {

	// get the translation instance
	const { t } = useTranslation()

	return (
		<View style={globalStyles.container}>
			<View>
				<ProfileComponent></ProfileComponent>
				<View style={globalStyles.flexRowEnd}>
					<Pressable style={globalStyles.btnSecondary}>
						<Text style={globalStyles.btnTextNeutral}>{t('common:editBtn')}</Text>
					</Pressable>
					<Pressable style={globalStyles.btnIconSecondary} onPress={()=>navigation.navigate("Settings", {msg: "I came from Profile"})}>
						<FontAwesome name={'cog'} color='#2F3C3B'/>
					</Pressable>
				</View>
			</View>
			
			<Text style={globalStyles.h4}>{t('common:libraryLabel')}</Text>
			<GameListItem/>
		</View>
	)
}

export default Profile;