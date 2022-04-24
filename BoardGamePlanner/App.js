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
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ProfileNavigator,EventsNavigator, ToolsNavigator} from './Navigation'


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
    <Tab.Navigator
    tabBarOptions={{
      labelStyle:{fontSize:18},
      activeTintColor: '#1EA596'
    }}>
      <Tab.Screen name="Events." component={EventsNavigator}  options={{ headerShown: false }}/>
      <Tab.Screen name="Profile." component={ProfileNavigator}  options={{ headerShown: false }}/>
      <Tab.Screen name="Tools." component={ToolsNavigator}  options={{ headerShown: false }}/>
      
    </Tab.Navigator>
  </NavigationContainer>
);
}