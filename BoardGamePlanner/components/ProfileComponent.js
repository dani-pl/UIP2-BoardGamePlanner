import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React, {useState, useEffect} from 'react'
import { backgroundColor, globalStyles, purple10 } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";
import {Followers} from './Followers';
import {auth} from '../firebase';
import { firebase } from '../firebase';



/**
 * returns the top of the profile page
 */
export class ProfileComponent extends React.Component {
  render(){
    return (
      <View >
        <View style={globalStyles.flexRow }>
          <Image
            style={[globalStyles.avatar, {backgroundColor: purple10}]}
            source={{uri: this.props.image}}
          />
          <Text  style={globalStyles.h6} >@{this.props.username}</Text>
          <Followers 
            following={this.props.following}
            followers={this.props.followers}
          />
        </View>
        <Text  style={globalStyles.subtitle2} >{this.props.description}</Text>
      </View>

);
  }
  }
  