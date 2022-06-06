import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  Text, View} from 'react-native';
import {globalStyles, neutral30} from "../../styles";
import { FontAwesome } from '@expo/vector-icons';
import Svg, {Polygon, Rect, Path} from 'react-native-svg'
import { Dice4, Dice6, Dice8 , Dice10, Dice12, Dice20} from './DiceBase';
import { useTranslation } from 'react-i18next';

const DiceRoll = ({navigation}) => {
    
    // initialize translation
    const { t } = useTranslation()

    return (  
        <View style={[globalStyles.container]}>
            <Text style={[globalStyles.h4, {textAlign:'center'}]}>{t('tools:chooseDice')}</Text>
            <View style={{ 
                flex:1, 
                justifyContent:'space-evenly', 
                marginTop: 8, 
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                flexDirection: 'row'}} 
            >
                {/* on navigate we pass the dice component and the nubmber of sides */}
                <Pressable onPress={()=>navigation.navigate("RollDice", {dice: Dice6,sides:6})}>
                    <Dice6 number={6} color={neutral30}/>
                </Pressable>

                <Pressable onPress={()=>navigation.navigate("RollDice", {dice: Dice8,sides:8})}>
                    <Dice8 number={8} color={neutral30}/>
                </Pressable>
                
                <Pressable onPress={()=>navigation.navigate("RollDice", {dice: Dice12,sides:12})}>
                    <Dice12 number={12} color={neutral30}/>
                </Pressable>
                
                <Pressable onPress={()=>navigation.navigate("RollDice", {dice: Dice20,sides:20})}>
                    <Dice20 number={20} color={neutral30}/>
                </Pressable>
                
                <Pressable onPress={()=>navigation.navigate("RollDice", {dice: Dice10,sides:10})}>
                    <Dice10 number={10} color={neutral30}/>
                </Pressable>
                
                <Pressable onPress={()=>navigation.navigate("RollDice", {dice: Dice4,sides:4})}>
                    <Dice4 number={4} color={neutral30}/>
                </Pressable>
                   
            </View>
        </View>

    )
}

export default DiceRoll ;
