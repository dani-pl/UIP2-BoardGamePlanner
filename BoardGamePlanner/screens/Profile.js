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
  Text, View} from 'react-native';
import {globalStyles} from "../styles";
import { FontAwesome } from '@expo/vector-icons';

import {ProfileComponent} from '../components/ProfileComponent';
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../firebase';
import {MyLibrary} from '../components/MyLibrary';
import { FontAwesome5 } from '@expo/vector-icons';
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

const [gameLibrary,setLibrary]=useState([])
const [users,setUsers] =useState([])
const [currentUser,setCurrentUser] =useState('')
const playersRef = firebase.firestore().collection('players');
const [modalOpen, setModalOpen] = useState(false);


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
   
    global.gameLibrary = currentUser.gameLibrary;
 
  }
)
},[])

useEffect(() => {
  console.log(auth)
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
        <Pressable style={globalStyles.btnSecondary} onPress={handleSignOut}>
          <Text style={globalStyles.btnTextNeutral}>Sign Out</Text>
        </Pressable>
          </View>
        </View>
  
  
        <Text style={globalStyles.h4}>{t('common:libraryLabel')}</Text>
        

<MyLibrary style={globalStyles.behind} index={currentUser.gameLibrary}></MyLibrary>
<View style={globalStyles.centered}>
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
      </View>
    )
  }

