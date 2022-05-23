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
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ToolItem from '../components/ToolItem';
import { useTranslation } from 'react-i18next';



const Tools = ({navigation}) => {

	// get the translation instance
	const { t } = useTranslation();
  	
	return (
		<View style={globalStyles.container}>

		<TouchableOpacity onPress={()=>navigation.navigate("FirsPlayerView")}>
			<ToolItem icon={"users"} tool={t('tools:firstPlayer')} ></ToolItem>
		</TouchableOpacity>

		<TouchableOpacity  onPress={()=>navigation.navigate("CoinFlip", {msg: "I came from Tools"})}>
			<ToolItem icon={"coins"} tool={t('tools:coinFlip')}></ToolItem>
		</TouchableOpacity >

		<TouchableOpacity  onPress={()=>navigation.navigate("DiceRoll", {msg: "I came from Tools"})}>
			<ToolItem icon={"dice"} tool={t('tools:diceRoll')}></ToolItem>
		</TouchableOpacity >

		</View>
  );

}
export default Tools;
