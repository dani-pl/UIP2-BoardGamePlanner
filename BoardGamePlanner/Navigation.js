import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './screens/Settings'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Tools from './screens/Tools'
import CoinFlip from './screens/CoinFlip'
import Events from './screens/Events'
import EventsResults from './screens/EventsResults'



const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
<Stack.Navigator >
<Stack.Screen
    name ="Login"
    component ={Login}
    options={{
        title: 'Login',
        headerStyle: {
          backgroundColor: '#1EA596',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    />
      <Stack.Screen
    name ="Profile"
    component ={Profile}
    options={{
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#1EA596',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    />
       <Stack.Screen
    name ="Settings"
    component ={Settings}
    options={{
      title: 'Settings',
      headerStyle: {
        backgroundColor: '#1EA596',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
      },
    }}
    />

</Stack.Navigator>
    );
}

export {ProfileNavigator}


const ToolsNavigator = () => {
    return (
<Stack.Navigator   initialRouteName={Tools}>
    <Stack.Screen
    name ="Tools"
    component ={Tools}
    options={{
        title: 'Tools',
        headerStyle: {
          backgroundColor: '#1EA596',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    />
       <Stack.Screen
    name ="CoinFlip"
    component ={CoinFlip}
    options={{
        title: 'Coin Flip',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#1EA596',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    />
    

</Stack.Navigator>
    );
}

export {ToolsNavigator}


const EventsNavigator = () => {
    return (
<Stack.Navigator>
    <Stack.Screen
    name ="Events"
    component ={Events}
    options={{
        title: 'Events',
        headerStyle: {
          backgroundColor: '#1EA596',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    />
       <Stack.Screen
    name ="EventsResults"
    component ={EventsResults}
    />

</Stack.Navigator>
    );
}

export {EventsNavigator}