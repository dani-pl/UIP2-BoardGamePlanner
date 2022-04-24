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




export default function Profile() {
  return (
    <View style={globalStyles.container}>
 <Text style={globalStyles.h1}>Profile</Text>
 
    </View>
  )
}
