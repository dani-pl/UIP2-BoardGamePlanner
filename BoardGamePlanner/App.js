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
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {ProfileNavigator,EventsNavigator, ToolsNavigator} from './Navigation'
import {getBGGLibrary} from './database/Model/GameModel'
// import GameListItem from './components/GameListItem';
import {GameLibrary} from './components/GameLibrary';


const Tab = createBottomTabNavigator()


export default function App() {

  // var games = getBGGLibrary('trisroyal');
  // console.log(games[0])
  // games.forEach(game => {
  //   console.log(game)
  // });

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
    <Tab.Navigator screenOptions={{ headerShown: false }}
    tabBarOptions={{
      labelStyle:{fontSize:14},
      activeTintColor: '#1EA596',
      inactiveTintColor: '#5A6867',
    }}
    >
      <Tab.Screen name="Events." component={EventsNavigator}   options={{
                    tabBarIcon: ({size, color, focused}) => (<FontAwesome  focused={focused} name={"map"} color={color} size={20}/>)
                }}
            />
      <Tab.Screen name="Profile." component={ProfileNavigator}  options={{
          tabBarIcon: ({size, color, focused}) => (<FontAwesome focused={focused} name={"user"} color={color} size={20} />)
      }}
            />
      <Tab.Screen name="Tools." component={ToolsNavigator}  options={{
        tabBarIcon: ({size, color, focused}) => (<FontAwesome5 focused={focused} name={"dice-four"} color={color} size={20} />)
    }}
            />
      
    </Tab.Navigator>
  </NavigationContainer>
);
}