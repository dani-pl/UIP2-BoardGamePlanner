import React, {useState, useEffect} from 'react'
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
import { NavigationContainer, StackActions } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {ProfileNavigator,EventsNavigator, ToolsNavigator, SplashNavigator} from './Navigation'
import {getBGGLibrary} from './database/Model/GameModel'
// import GameListItem from './components/GameListItem';
import {GameLibrary} from './components/GameLibrary';
import FirsPlayerView from './components/Tools/FirsPlayerView';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


export default function App() {

    // var games = getBGGLibrary('trisroyal');
    // console.log(games[0])
    // games.forEach(game => {
    //   console.log(game)
    // });

  let [splash, setSplash] = useState(true);
  let [fontsLoaded] = useFonts({
          'Montserrat-Semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
          'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
          'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
          'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
          'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf')
  });

 
  

  useEffect(() => {
    splash && setTimeout(()=>{
      setSplash(false);
    },5000)
  },[])
  
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    splash ? <Splash /> :

    <NavigationContainer>
      
      <Tab.Navigator screenOptions={{ headerShown: false }}
      tabBarOptions={{
        labelStyle:{fontSize:14},
        activeTintColor: '#1EA596',
        inactiveTintColor: '#5A6867',
      }}
      >
      
        <Tab.Screen name="Events" component={EventsNavigator}   options={{
                      tabBarIcon: ({size, color, focused}) => (<FontAwesome  focused={focused} name={"map"} color={color} size={20}/>)
                  }}
              />
        <Tab.Screen name="Profile" component={ProfileNavigator}  options={{
            tabBarIcon: ({size, color, focused}) => (<FontAwesome focused={focused} name={"user"} color={color} size={20} />)
        }}
              />
        <Tab.Screen name="Tools" component={ToolsNavigator}  options={{
          tabBarIcon: ({size, color, focused}) => (<FontAwesome5 focused={focused} name={"dice-four"} color={color} size={20} />)
      }}
              />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}