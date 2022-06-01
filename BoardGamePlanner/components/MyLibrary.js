import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React, {useState, useEffect} from 'react'
import { globalStyles } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import DropShadow from "react-native-drop-shadow";
import {GameListItem} from './GameListItem';
import {FlatList} from 'react-native-gesture-handler'
import { firebase } from '../firebase';
// import { GameLibrary } from './GameLibrary';
import { GAMES } from '../database/games';
import { getGameById } from '../database/Model/GameModel';


export default class MyLibrary extends React.Component {

    constructor(props){
        super(props);
    }


    _loadGames() {
        var gameLibrary = this.props.gameLibraryOftheUser.map((game, idx) => {
            var game = getGameById(game);
            return(
                <GameListItem 
                    name={game.name} 
                    image={game.image}
                    key={idx}
                ></GameListItem>
            )
        })
        return gameLibrary;
    }

    render(){
        return (
            <View>
                {/* {this.props.gameLibraryOftheUser.map((game, i) => (

                    (<GameListItem 
                        name={game.name} 
                        image={game.image}
                        key={i}
                    ></GameListItem>)
                ))} */}
                { this._loadGames() }
            </View>
        )      
    };
}
export {MyLibrary}