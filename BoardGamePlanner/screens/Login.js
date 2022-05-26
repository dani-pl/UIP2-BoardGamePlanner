import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

import { StatusBar, setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
  Text, View} from 'react-native';
import {globalStyles} from "../styles";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { auth } from '../firebase';



export default function Login() {

        const[email,setEmail] = useState('')
        const [password, setPassword] = useState('')


     
      

        //adding a listener that checks if a user is logged in
        const navigation =useNavigation()
        useEffect(() => {
const unsubscribe = auth.onAuthStateChanged(user => {
  if(user) {
    navigation.navigate('Profile_')
  }
})
return unsubscribe
        },[])

        const handleSignUp = () => {
            auth
                .createUserWithEmailAndPassword(email,password)
                .then(userCredentials => {
                    const user =userCredentials.user;
                    console.log(user.email);
                })
             .catch(error => alert('Registered with',error.message))
    }


    const handleLogIn = () =>{
      auth
      .signInWithEmailAndPassword(email,password)
                .then(userCredentials => {
                    const user =userCredentials.user;
                    console.log(user.uid);
                })
             .catch(error => alert('Logged in with', error.message))
            
            
            }

  


  return (
    <KeyboardAvoidingView behaviour="padding" style={globalStyles.container}>
        <View >

        <TextInput
        style={globalStyles.input}
        placeholder="Email"
        onChangeText= {text => setEmail(text)}
        // value='Sofia, Bulgaria'
      />

<TextInput
        style={globalStyles.input}
        placeholder="Password"
        onChangeText= {text => setPassword(text)}
        // value='Sofia, Bulgaria'
        secureTextEntry
      />
        </View>
        <View    style={globalStyles.centered}>

            <TouchableHighlight   
            style={globalStyles.btnPrimary}
            onPress={handleLogIn}>
                <Text style={globalStyles.btnTextWhite}>Login</Text>
            </TouchableHighlight>
            
            <TouchableHighlight  
             style={globalStyles.btnSecondary}
            onPress={handleSignUp}>
                        <Text   style={globalStyles.btnTextNeutral}>Register</Text>
            </TouchableHighlight>


        </View>
        
    </KeyboardAvoidingView>
  )
}
