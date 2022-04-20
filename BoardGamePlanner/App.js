import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  Text, View} from 'react-native';
import {globalStyles} from "./styles";
import * as Font from 'expo-font';
import Home from './Home';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';



export default function App() {
  let [fontsLoaded] = useFonts({
        'Montserrat-Semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf')
 });

 if (!fontsLoaded) {
  return <AppLoading />;
}

return <Home />;
}