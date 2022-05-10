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




const Profile = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
 <Text style={globalStyles.h1}>Profile</Text>
 
 <Pressable style={globalStyles.btnSecondary}>
        <Text style={globalStyles.btnTextNeutral}>Edit</Text>
      </Pressable>
 <Pressable style={globalStyles.btnIconSecondary} onPress={()=>navigation.navigate("Settings", {msg: "I came from Profile"})}>
      <FontAwesome name={'cog'} color='#2F3C3B'/>
      </Pressable>

    </View>
  )
}

export default Profile;