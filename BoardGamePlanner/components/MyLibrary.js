import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React, {useState, useEffect} from 'react'
import { globalStyles } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";
import {GameListItem} from './GameListItem';
import {FlatList} from 'react-native-gesture-handler'
import { firebase } from '../firebase';
import { GameLibrary } from './GameLibrary';



export default class MyLibrary extends React.Component {
    render(){
        return (
            <View>
                {this.props.gameLibraryOftheUser.map((game) => (
            <GameListItem name={game.name} image={game.image}></GameListItem>
                ))}
            </View>
        )      
    };
}
export {MyLibrary}