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



const Profile = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
 
 <Pressable style={globalStyles.btnSecondary}>
        <Text style={globalStyles.btnTextNeutral}>Edit</Text>
      </Pressable>
 <Pressable style={globalStyles.btnIconSecondary} onPress={()=>navigation.navigate("Settings", {msg: "I came from Profile"})}>
      <FontAwesome name={'cog'} color='#2F3C3B'/>
      </Pressable>

      <Text style={globalStyles.h4}>Library</Text>
 <GameListItem/>
    </View>
  )
}

export default Profile;