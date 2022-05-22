import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './screens/Settings'
import Profile from './screens/Profile'
import Tools from './screens/Tools'
import CoinFlip from './screens/CoinFlip'
import Events from './screens/Events'
import EventsResults from './screens/EventsResults'
import Splash from './screens/Splash';
import FirsPlayerView from './components/Tools/FirsPlayerView'


const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
<Stack.Navigator >
    <Stack.Screen
    name ="Profile_"
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
<Stack.Navigator initialRouteName={Tools}>
    <Stack.Screen
      name ="Tools_"
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
        name ="FirsPlayerView"
        component ={FirsPlayerView}
        options={{
            title: 'First Player',
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
    name ="Events_"
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

const SplashNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen
          name ="Splash"
          component ={Splash}
          options={{
              title: 'Splash',
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
          name ="Splash-screen"
          component ={Splash}
          />

</Stack.Navigator>
    );
}

export {SplashNavigator}


