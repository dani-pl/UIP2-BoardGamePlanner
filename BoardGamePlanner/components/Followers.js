import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React from 'react'
import { globalStyles } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";




export class Followers extends React.Component {

render(){
  // console.log(this.props);
  return (
    <View style={globalStyles.flexRow }>
            <View style={globalStyles.flexColumn }>
                <Text style={globalStyles.h6 } >{this.props.followers.length}</Text>
                <Text style={globalStyles.subtitle2 } >Followers</Text>
            </View>
            <View style={globalStyles.flexColumn }>
                <Text style={globalStyles.h6 } >{this.props.following.length}</Text>
                <Text style={globalStyles.subtitle2 } >Following</Text>
            </View>
        </View>
  );


}


 
}
