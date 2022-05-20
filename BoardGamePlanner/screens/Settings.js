//this is a nested screen
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  TextInput,
  SafeAreaView,
  Pressable,
  Text, View} from 'react-native';
import {globalStyles} from "../styles";
import { FontAwesome } from '@expo/vector-icons';


const Settings = ({route}) => {
    return(  <View style={globalStyles.container}>
       <Text style={globalStyles.h5}>Language</Text>
       <View style={globalStyles.flexRow}>
             <Pressable style={globalStyles.btnSecondarySelected}>
        <Text style={globalStyles.btnTextNeutral}>EN</Text>
      </Pressable>

      <Pressable style={globalStyles.btnSecondary}>
        <Text style={globalStyles.btnTextNeutral}>BG</Text>
      </Pressable>

      <Pressable style={globalStyles.btnSecondary}>
        <Text style={globalStyles.btnTextNeutral}>SE</Text>
      </Pressable>
        </View>

        <View style={globalStyles.spacing}>  
</View>

       <Text style={globalStyles.h5}>Location</Text>
       <TextInput
        style={globalStyles.input}
        onChangeText='Location'
        value='Sofia, Bulgaria'
      />
           </View>

    )
}

export default Settings;
