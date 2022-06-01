import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Text, View} from 'react-native';
import {globalStyles} from "../styles";
import ToolItem from '../components/ToolItem';
import { useTranslation } from 'react-i18next';

// interatcive walkthrough 
import {useWalkthroughStep} from "react-native-interactive-walkthrough"
import { WalkFinish, WalkTools} from '../components/Walkthrough';


const Tools = ({navigation}) => {

	// get the translation instance
	const { t } = useTranslation();
  	
	const {stop} = useWalkthroughStep({
		number: 4,
		OverlayComponent: WalkTools,
		fullScreen: true,
		enableHardwareBack: true,
		onPressBackdrop: () => stop(),
		// onFinish: () => navigation.navigate("CoinFlip")
	})	

	const {onLayout} = useWalkthroughStep({
		number: 5,
		OverlayComponent: WalkFinish,
		fullScreen: true,
		enableHardwareBack: true,
		onPressBackdrop: () => stop(),
		onFinish: () => navigation.navigate("Events_")
	})	
	

	return (
		<View style={globalStyles.container}>

		<TouchableOpacity onPress={()=>navigation.navigate("FirsPlayerView")}>
			<ToolItem icon={"users"} tool={t('tools:firstPlayer')} ></ToolItem>
		</TouchableOpacity>

		<TouchableOpacity  onPress={()=>navigation.navigate("CoinFlip")}>
			<ToolItem icon={"coins"} tool={t('tools:coinFlip')}></ToolItem>
		</TouchableOpacity >

		<TouchableOpacity  onPress={()=>navigation.navigate("DiceRoll", {msg: "I came from Tools"})}>
			<ToolItem icon={"dice"} tool={t('tools:diceRoll')}></ToolItem>
		</TouchableOpacity >

		</View>
  );

}
export default Tools;
