import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React from 'react'
import { globalStyles } from '../styles'
import { FontAwesome } from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";



const GameListItem = ({game}) =>  {
  return (
        <View style={globalStyles.mainCardView}>
            <View style={globalStyles.subCardView}>
                <Image 
                    source={{uri:"https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__original/img/ZzyzlO15ggCfkLg9ckeM4PWNePI=/0x0/filters:format(jpeg)/pic3033330.jpg"}}
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor:'#ddd',
                        borderRadius:10}}
                    resizeMode="cover"
                />
                <Text 
                    style={[globalStyles.h6, globalStyles.textStyle]} 
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >Deception: Murder in Hong Kong</Text>
            </View>
            <Pressable style={globalStyles.btnIconSecondary} onPress={()=>console.log("pressed remove")}>
                <FontAwesome name="remove" />
            </Pressable>
        </View>
  )
}

export default GameListItem;