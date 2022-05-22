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




const Tools = ({navigation}) => {
  return (
    <View style={globalStyles.container}>

      <TouchableOpacity onPress={()=>navigation.navigate("FirsPlayerView")}>
        <ToolItem icon={"users"} tool={"First Player"} ></ToolItem>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>navigation.navigate("CoinFlip", {msg: "I came from Profile"})}>
        <ToolItem icon={"coins"} tool={"Coin Flip"}></ToolItem>
      </TouchableOpacity >

      <TouchableOpacity >
        <ToolItem icon={"dice"} tool={"Dice roll"}></ToolItem>
      </TouchableOpacity >

    </View>
  );

}
export default Tools;
