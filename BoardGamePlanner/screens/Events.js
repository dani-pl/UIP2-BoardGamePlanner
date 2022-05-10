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
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




export default function Events() {
  return (
    <View style={globalStyles.container}>
<<<<<<< HEAD:BoardGamePlanner/Home.js
      <Text style={globalStyles.h1}>Heading 1</Text>
=======
 <Text style={globalStyles.h1}>Heading 1</Text>
>>>>>>> 6cbf1be050b6a5d3f2e923a6f7796875959b08c7:BoardGamePlanner/screens/Events.js
      <Text style={globalStyles.h2}>Heading 2</Text>
      <Text style={globalStyles.h3}>Heading 3</Text>
      <Text style={globalStyles.h4}>Heading 4</Text>
      <Text style={globalStyles.h5}>Heading 5</Text>
      <Text style={globalStyles.h6}>Heading 6</Text>
      <Text style={globalStyles.subtitle1}>Subtitle1</Text>
      <Text style={globalStyles.subtitle2}>Subtitle2</Text>
      <Text style={globalStyles.subtitle3}>Subtitle3</Text>
      <Text style={globalStyles.allCaps}>All Caps Small</Text>
      <StatusBar style="auto" />
      <Pressable style={globalStyles.btnPrimary}>
        <Text style={globalStyles.btnTextWhite}>Click me</Text>
      </Pressable>
      <Pressable style={globalStyles.btnIconPrimary}>
      <FontAwesome name={'map'} color='#fff'/>
      </Pressable>
      <Pressable style={globalStyles.btnIconSecondary}>
      <FontAwesome name={'map'} color='#2F3C3B'/>
      </Pressable>
    </View>
  )
}

