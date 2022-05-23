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
import Svg, {Polygon, Rect, Path} from 'react-native-svg'
import { Dice4 } from '../components/Tools/DiceBase';
const DiceRoll = ({route}) => {
    return (  
        <View style={globalStyles.container}>
            <Dice4 style={{position:'absolute'}} number={1}/>
            {/* <Dice12 />
            <Dice20 />
            <Dice10 />
            <Dice8 /> */}
        </View>

    )
}

export default DiceRoll ;
