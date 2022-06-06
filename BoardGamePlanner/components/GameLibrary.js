import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable, FlatList} from 'react-native'
import React , {useEffect, useState}from 'react'
import { globalStyles } from '../styles'
import { FontAwesome } from '@expo/vector-icons';
import { getBGGLibrary } from '../database/Model/GameModel';
import { GAMES } from '../database/games'
import axios from 'axios';

/**
 * Returns a game item 
 * @param {Object} game 
 * @param {Number} index 
 * @returns {JSX} 
 */
const gameListItem = (game, index) => {
    return (
      <SafeAreaView>
          <View style={cardStyles.mainCardView}>
              <View style={cardStyles.subCardView}>
                  
                  <Image 
                      source={{uri: game.image}}
                      style={{
                          width: 50,
                          height: 50,
                          borderRadius:10}}
                      resizeMode="cover"
                  />
                  <Text 
                      style={[globalStyles.h6, cardStyles.textStyle]} 
                      numberOfLines={2}
                      ellipsizeMode="tail"
                  >{game.name}</Text>
              </View>
              <Pressable style={globalStyles.btnIconSecondary} onPress={()=>console.log("pressed remove")}>
                  <FontAwesome name="remove" />
              </Pressable>
          </View>
      </SafeAreaView>
    )
  };
  
  const cardStyles = StyleSheet.create({
      mainCardView: {
          height: 85,
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 16,
          backgroundColor: '#ffffff',
          shadowColor: "#869392",
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 5,
          paddingTop: 5,
          paddingBottom: 5,
          paddingRight: 15,
          paddingLeft: 15,
          marginTop: 6,
          marginBottom: 6,
          marginLeft: 16,
          marginRight: 16,
      },
      subCardView: {
          display: "flex",
          flexDirection: "row",
          justifyContent:'flex-start',
          alignItems: "center",
          
      },
      textStyle: {
          marginLeft: 20,
          width:'57%',
          flexShrink: 1,
      }
  
  })

/**
 * Get the Board Game Geek Game Library with the user's BGG username 
 * @param {*} props 
 * @returns 
 */
const GameLibrary = (props) => {

    var [bggData, setBggData] = useState([]);

    const BGGid = props.username;

  // axios setup
    const source = axios.CancelToken.source();
    const BGGURL = `https://bgg-json.azurewebsites.net/collection/${BGGid}?grouped=true`;
    
    useEffect(()=>{
        try {
            axios.get(BGGURL).then((res) => {
            // if the status is OK
            if( res.status === 200) {
                // get the response data and for each game object push it to the the 'gameLibrary' array
                setBggData(res.data)
                console.log(bggData)
                }
                else {
                    // in all other cases throw an error
                    throw new Error("Failed to fetch games from BGG: ");
                }
            }).catch((error) => {
                console.log(error)
            });
            
        } catch (error) { 
            if(axios.isCancel(error)){
                console.log('data fetching was cancelled');
            } else {
                console.log(error)
            }
        }
    },[])


    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.h1}>BGG Library {BGGid} </Text>
            <Text style={globalStyles.subtitle1}>{bggData.length} Games </Text>
            <FlatList 
                data={bggData}
                keyExtractor={(game, index) => index}
                renderItem={({item, index}) => 
                    gameListItem(item,index)}
            />
        </SafeAreaView>
    );
}

export {GameLibrary}