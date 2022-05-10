import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './screens/Settings'
import Profile from './screens/Profile'
import Tools from './screens/Tools'
import CoinFlip from './screens/CoinFlip'
import Events from './screens/Events'
import EventsResults from './screens/EventsResults'

const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
<Stack.Navigator >
    <Stack.Screen
    name ="Profile"
    component ={Profile}
    />
       <Stack.Screen
    name ="Settings"
    component ={Settings}
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
    />
       <Stack.Screen
    name ="CoinFlip"
    component ={CoinFlip}
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
    />
       <Stack.Screen
    name ="EventsResults"
    component ={EventsResults}
    />

</Stack.Navigator>
    );
}

export {EventsNavigator}