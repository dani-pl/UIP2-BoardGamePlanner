import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './screens/Settings'
import Profile from './screens/Profile'
import Tools from './screens/Tools'
import CoinFlip from './screens/CoinFlip'
import Events from './screens/Events'
import EventsResults from './screens/EventsResults'
import {Pressable, LogoTitle, Image, View, ColorPropType, Text} from 'react-native'
import { globalStyles, selected, unselected, primary } from './styles';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import StyleFile from './styles';
import SearchBox from './components/searchBox';
import { SearchBar } from 'react-native-elements';


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
<Stack.Navigator
    screenOptions={{title:""}}>
    <Stack.Screen
    name ="Events"
    component ={Events}
    options={{
          headerStyle: { backgroundColor: '#1EA596' },
          headerRight: () => (
            <View style={{display:"flex", flexWrap: "wrap"}}>
                <View >
                    <Pressable
                    onPress={() => alert('This is a button!')}
                    style={[globalStyles.btnIconPrimary,{backgroundColor: unselected, width:40, height:40, justifyContent:"center", alignItems:"center"}]}
                    >
                        <Image style={{alignSelf:"center"}} source={require("./assets/map_unselected.png")}></Image>
                    </Pressable>
                    </View>
                <View>
                    <Pressable
                    onPress={() => alert('This is a button!')}
                    style={[globalStyles.btnIconPrimary,{backgroundColor: selected, width:40, height:40, justifyContent:"center", alignItems:"center"}]}
                    >
                        <Image source={require("./assets/list_selected.png")}></Image>
                    </Pressable>
                </View>
            </View>
          ),
          headerLeft: () =>(
            <View style={{display:"flex", flexWrap: "nowrap", backgroundColor:"transparent", justifyContent:"center", alignItems:"center"}}>
              <SearchBar inputContainerStyle={{backgroundColor:unselected}} style={{alignSelf:"center", flexBasis: 150, borderColor:"transparent", shadowColor:"transparent"}} inputStyle={{backgroundColor:unselected, color:selected}} containerStyle={{backgroundColor:"transparent",borderBottomColor:"transparent", borderTopColor:"transparent"}}>
              <Text style= {globalStyles.btnTextWhite}>Search Location</Text>
              </SearchBar>
            </View>
          )
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