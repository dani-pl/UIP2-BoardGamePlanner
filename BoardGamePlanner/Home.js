import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  Text, View} from 'react-native';
import {globalStyles} from "./styles";
// import App from './App';
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Feather } from '@expo/vector-icons';




export default function Home() {
  return (
    <View style={globalStyles.container}>
 <Text style={globalStyles.h1}>Heading 1</Text>

      <Text style={globalStyles.h2}>Heading 2</Text>
      <Text style={globalStyles.h3}>Heading 3</Text>
      <Text style={globalStyles.h4}>Heading 4</Text>
      <Text style={globalStyles.h5}>Heading 5</Text>
      <Text style={globalStyles.h6}>Heading 6</Text>
      <Text style={globalStyles.subtitle1}>Subtitle1</Text>
      <Text style={globalStyles.subtitle2}>Subtitle2</Text>
      <Text style={globalStyles.subtitle3}>Subtitle3</Text>
      <Text style={globalStyles.allCaps}>All Caps Small</Text>
      <Pressable style={globalStyles.btnPrimary}>
        <Text style={globalStyles.btnText}>Click me</Text>
      </Pressable>
      <Pressable style={globalStyles.btnIconPrimary}>
      <FontAwesome name={'user'} />
      <FontAwesome5 name={'map'} />
      <Feather name={'user'} />
      <Feather name={'user'} />
      </Pressable>
    </View>
  )
}

