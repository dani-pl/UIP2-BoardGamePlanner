import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React from 'react'
import { globalStyles } from '../styles'
import { FontAwesome } from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";


export class GameListItem extends React.Component {

    render(){
      console.log(this.props);
      return (
        <View style={globalStyles.mainCardView}>
        <View style={globalStyles.subCardView}>
            <Image 
                source={{uri: this.props.image}}
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
            >{this.props.name}</Text>
        </View>
        <Pressable style={globalStyles.btnIconSecondary} onPress={()=>console.log("pressed remove")}>
            <FontAwesome name="remove" />
        </Pressable>
    </View>
      );
    
    
    }
    
    
     
    }
    