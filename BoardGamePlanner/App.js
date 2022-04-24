import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  Text, View, NativeAppEventEmitter} from 'react-native';
import {globalStyles} from "./styles";
import * as Font from 'expo-font';
import Events from './screens/Events';
import Tools from './screens/Tools';
import Profile from './screens/Profile';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()


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

return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Tools" component={Tools} />
      
    </Tab.Navigator>
  </NavigationContainer>
);
}