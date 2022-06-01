//this is a nested screen
import React, {useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  TextInput,
  SafeAreaView,
  Pressable,
  Text, View} from 'react-native';
import {globalStyles, neutral60} from "../styles";
import { FontAwesome5 } from '@expo/vector-icons';
import LanguageSelect from '../components/LanguageSelect';

import { useTranslation } from 'react-i18next';

// interatcive walkthrough 
import {useWalkthroughStep} from "react-native-interactive-walkthrough"
import { WalkthroughStart, WalkLanguage} from '../components/Walkthrough';

const Settings = ({navigation}) => {
	// get the translation instance
    const { t } = useTranslation();

	const {start, stop} = useWalkthroughStep({
		number: 1,
		OverlayComponent: WalkthroughStart,
		fullScreen: true,
		enableHardwareBack: true,
		onPressBackdrop: () => stop(),
		onFinish: () => navigation.navigate("Profile_")
	})		

	const {onLayout} = useWalkthroughStep({
		number: 3,
		OverlayComponent: WalkLanguage,
		fullScreen: true,
		enableHardwareBack: true,
		onPressBackdrop: () => stop(),
		onFinish: () => navigation.navigate("Tools")
	});
	
    return (  
		<View style={[
			globalStyles.container,{
			justifyContent:"space-between"
		}]}>
       		
			{/* adding language select component to the view */}
			<View>
				<LanguageSelect onLayout={onLayout} />
		
				<Text style={globalStyles.h5}>{t('common:locationSelectLabel')}</Text>
				
				<TextInput
					style={globalStyles.input}
					// onChangeText='Location'
					value='Sofia, Bulgaria'
				/>
				<View style={globalStyles.spacing} />  
				<Text style={globalStyles.h5}>{t('common:help')}</Text>
				<Pressable  
					style={[globalStyles.btnSecondary, {width:'100%', alignSelf:'center'}]}
					onPress={() => start()}
				>
					
					<Text style={globalStyles.btnTextNeutral}>
						<FontAwesome5 name="walking" size={20} color={neutral60} /> 	{t('common:walkthrough')}
					</Text>
				</Pressable>
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
