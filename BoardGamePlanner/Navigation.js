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
import DiceRoll from './components/Tools/DiceRoll'
import RollDice from './screens/RollDice';
import Credits from './screens/Credits';
import {Pressable, LogoTitle, Image, View, ColorPropType, Text} from 'react-native'
import { globalStyles, selected, unselected, primary } from './styles';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import StyleFile from './styles';
import SearchBox from './components/searchBox';
import { SearchBar } from 'react-native-elements';


const Stack = createStackNavigator();
import { useTranslation } from 'react-i18next';

const ProfileNavigator = () => {
	// get the translation instance
	const { t } = useTranslation();

    return (
		<Stack.Navigator >
			<Stack.Screen
			name ="Profile_"
			component ={Profile}
			options={{
				title: t('common:profileLabel'),
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
				name = "Settings"
				component ={Settings}
				options={{
					title: t('common:settingsLabel'),
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
				name = "Credits"
				component ={Credits}
				options={{
					title: t('common:creditsLabel'),
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
	// get the translation instance
	const { t } = useTranslation();

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
					title: t('tools:coinFlip'),
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
					title: t('tools:firstPlayer'),
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
				name ="DiceRoll"
				component ={DiceRoll}
				options={{
					title: t('tools:dice'),
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
				name ="RollDice"
				component ={RollDice}
				options={{
					title: t('tools:rollDice'),
					headerStyle: {
						backgroundColor: '#1EA596',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontSize: 20,
					},
					headerBackTitle: t('tools:backBtn')

				}}
				
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


