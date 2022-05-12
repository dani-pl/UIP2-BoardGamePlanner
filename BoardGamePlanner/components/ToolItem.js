import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React from 'react'
import { globalStyles } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";



const ToolItem = ({tool, icon}) =>  {
  return (
        <View style={globalStyles.mainCardView } >
            <View style={globalStyles.subCardView}>
            <View style={globalStyles.btnIconSecondary}>
      <FontAwesome5 name={icon} color='#2F3C3B'/>
      </View>
                <Text 
                    style={[globalStyles.h6, globalStyles.textStyle]} 
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >{tool}</Text>
            </View>
        </View>
  )
}

export default ToolItem;