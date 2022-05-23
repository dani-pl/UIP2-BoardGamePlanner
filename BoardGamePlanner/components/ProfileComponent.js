import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React from 'react'
import { globalStyles } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";
import Followers from './Followers';


const ProfileComponent = ({navigation})  =>  {

  return (
        <View >
            <View style={globalStyles.flexRow }>
              <Image
                style={globalStyles.avatar}
                source={require('../assets/person.jpeg')}
              />
              <Text  style={globalStyles.h6} >@lilycole</Text>
              <Followers></Followers>
            </View>

            <Text  style={globalStyles.subtitle2} >I like playing social games with a larger group of friednly people. 
        My favorites are Carcassonneffff and Secret Hitlesd</Text>
     

        </View>

       

        
  )
}

export default ProfileComponent;