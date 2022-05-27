import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  Text, View} from 'react-native';
import {globalStyles} from "../styles";
import { FontAwesome } from '@expo/vector-icons';

import {ProfileComponent} from '../components/ProfileComponent';
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../firebase';
import {MyLibrary} from '../components/MyLibrary';

import { useTranslation } from 'react-i18next';

export default function Profile() {

	// get the translation instance
	const { t } = useTranslation()

const navigation =useNavigation()

const handleSignOut = () => {
  auth
  .signOut()
            .then(()=> {navigation.replace("Login")
            })
         .catch(error => alert(error.message))
}

const [playerLibrary,setLibrary]=useState([])
const [users,setUsers] =useState([])
const [currentUser,setCurrentUser] =useState('')
const playersRef = firebase.firestore().collection('players');


useEffect(async ()=>{
  playersRef
  .onSnapshot(
  querySnapshot => {
        const users =[]
        querySnapshot.forEach((doc) => {
            const {name,username,email,description, image,bggUserName,gameLibrary,
              events,language,location,followers,following} = doc.data()
            users.push({
                id:doc.id,
                name,
                username,
                email,
                description,
                image,
                bggUserName,
                gameLibrary,
                events,
                language,
                location,
                followers,
                following
            })
        })
    setUsers(users)
    console.log(currentUser.gameLibrary)
    global.gameLibrary = currentUser.gameLibrary;
  
  }
)
},[])

useEffect(() => {
for (var i = 0, len = users.length; i < len; i++) {
if(auth.currentUser.uid == users[i].id){
  setCurrentUser(users[i])
  // console.log(users[i].image)
  global.currentUser = currentUser;
  
 
}
else{
// console.log("its not")
};
}
});




    return (
      <View style={globalStyles.container}>
        <View>
   <ProfileComponent 
 username ={currentUser.username}
followers= {currentUser.followers}  
following= {currentUser.following} 
description = {currentUser.description}
 image = {currentUser.image}
   ></ProfileComponent>
   <View style={globalStyles.flexRowEnd}>


  

               <Pressable style={globalStyles.btnSecondary}>
          <Text style={globalStyles.btnTextNeutral}>{t('common:editBtn')}</Text>
        </Pressable>
   <Pressable style={globalStyles.btnIconSecondary} onPress={()=>navigation.navigate("Settings", {msg: "I came from Profile"})}>
        <FontAwesome name={'cog'} color='#2F3C3B'/>
        </Pressable>
        <Pressable style={globalStyles.btnPrimary} onPress={handleSignOut}>
          <Text style={globalStyles.btnTextWhite}>Sign Out</Text>
        </Pressable>
          </View>
        </View>
  
  
        <Text style={globalStyles.h4}>{t('common:libraryLabel')}</Text>
  
<MyLibrary index={currentUser.gameLibrary}></MyLibrary>

{/* <GameLibrary></GameLibrary> */}
      </View>
    )
  }

