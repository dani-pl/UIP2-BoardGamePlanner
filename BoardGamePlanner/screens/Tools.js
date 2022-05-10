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


const Tools = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
 <Text style={globalStyles.h1}>Tools</Text>
 <Pressable style={globalStyles.btnSecondary} onPress={()=>navigation.navigate("CoinFlip", {msg: "I came from Tools"})}>
 <Text style={globalStyles.btnTextNeutral}>Coin Flip</Text>
      </Pressable>
 
    </View>
  );

}
export default Tools
