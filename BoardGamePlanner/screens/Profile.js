import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,TextInput,
  SafeAreaView,
  Pressable,
  Modal,TouchableHighlight,
  Text, View, ScrollView} from 'react-native';
import {globalStyles} from "../styles";
import { FontAwesome } from '@expo/vector-icons';

import {ProfileComponent} from '../components/ProfileComponent';
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../firebase';
import {MyLibrary} from '../components/MyLibrary';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { PLAYERS } from '../database/players';
import { GAMES } from '../database/games';



export default function Profile() {

  // get the translation instance
  const { t } = useTranslation()

  // get navigation instance
  const navigation =useNavigation()

  // Write Login in header when singing out
  const handleSignOut = () => {
    auth
    .signOut()
              .then(()=> {navigation.replace("Login")
              })
          .catch(error => alert(error.message))
  }

  const [currentUser,setCurrentUser] =useState({
    "playerId": "tFzAIoqOIXMu1uVXpLGvYXRrs8w2",
    "name": "Danica Beekman",
    "username": "dbeekman",
    "email": "dbeekman@abv.bg",
    "password": "123456",
    "image": "https://robohash.org/sintreiciendismagnam.png",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "bggUserName": "dbeekman2",
  "location": {
            "general": "Sofia, Bulgaria",
            "latitude": 42.698334,
            "longitude": 23.319941
          },
    "language": "en",
    "gameLibrary" : [296912, 220308,316554,156129 ],
    "following" : [8],
    "followers" : [5820,8],
    "events" : { 
        "hosting" : [{
            "eventId": 1234,
            "current" : true,
            "coHost" : true
        }],
        "joining" : [{
            "eventId" : 1244,
            "invited" : true,
            "pending" : true
        }]}
  })
  const playersRef = firebase.firestore().collection('players');
  const [modalOpen, setModalOpen] = useState(false);


  // // Set users to the data of the users in firebase
  // const fillUsersData = () =>{
  //   // const something = auth.currentUser.uid
  //   // set currentUser to the data of the current Use
  //   // setCurrentUser(await playersRef.where('doc.id','==', auth.currentUser.uid))
  //   setCurrentUser(PLAYERS.map((player, i)=>{
  //       if(player.playerId == auth.currentUser.uid){
  //         // console.log(player)
  //         return player
  //       }})) 
  //   // const user = await setCurrentUser(playersRef.get(auth.currentUser.uid))
  //   console.log("HERER" + currentUser)
  // }
 
  // useEffect(() => {
    
  //       fillUsersData()
  //       // console.log(currentUser)
  // }, [])
  

  
  return (
  <ScrollView style={globalStyles.container}>
    <View>
      <ProfileComponent 
        username ={currentUser.username}
        followers= {currentUser.followers}  
        following= {currentUser.following} 
        description = {currentUser.description}
        image = {currentUser.image}>
      </ProfileComponent>
      
      <View style={globalStyles.flexRowEnd}>
        <Pressable style={globalStyles.btnSecondary}>
          <Text style={globalStyles.btnTextNeutral}>{t('common:editBtn')}</Text>
        </Pressable>
        <Pressable style={globalStyles.btnIconSecondary} onPress={()=>navigation.navigate("Settings", {msg: "I came from Profile"})}>
          <FontAwesome name={'cog'} color='#2F3C3B'/>
        </Pressable>
        <Pressable style={globalStyles.btnSecondary} onPress={handleSignOut}>
          <Text style={globalStyles.btnTextNeutral}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  
  
    <Text style={globalStyles.h4}>{t('common:libraryLabel')}</Text>
    <MyLibrary style={globalStyles.behind} gameLibraryOftheUser={currentUser.gameLibrary}/>
    <View style={[globalStyles.centered, {marginBottom:50}]}>
      <TouchableHighlight style={globalStyles.btnPrimary}  onPress={()=>setModalOpen(true)}>
        <Text style={globalStyles.btnTextWhite}>Add Games</Text>
      </TouchableHighlight>
    </View>

    <Modal visible={modalOpen} animationType='slide' style={globalStyles.modal}>
      <View style={globalStyles.container}>
        <FontAwesome5 name="times" size={24} style={globalStyles.modalIcon} onPress={()=> setModalOpen(false)}></FontAwesome5>
        <Text style={globalStyles.h5}>Search for a game</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Search game"
          // onChangeText='Location'
          // value='Sofia, Bulgaria'
        />
        <TouchableHighlight style={globalStyles.btnPrimary}  >
          <Text style={globalStyles.btnTextWhite}>Add Game</Text>
        </TouchableHighlight>
      </View>
    </Modal>
    {/* <GameLibrary></GameLibrary> */}
  </ScrollView>
)
};
