import React from 'react';
import { createStackNavigator, navigation } from '@react-navigation/stack';
import Settings from './screens/Settings'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Tools from './screens/Tools'
import CoinFlip from './screens/CoinFlip'
import Events from './screens/Events'
import EventsResults from './screens/EventsResults'
import Splash from './screens/Splash';
import FirsPlayerView from './components/Tools/FirsPlayerView'
import DiceRoll from './components/Tools/DiceRoll'
import RollDice from './screens/RollDice';
import Credits from './screens/Credits';
import MapSearchBar from './components/MapSearchBar';
import { EventDetails } from './components/EventCard';



const Stack = createStackNavigator();
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';


const ProfileNavigator = () => {
	// get the translation instance
	const { t } = useTranslation();

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
			name ="Profile_"
			component ={Profile}
			options={{
				title: t('common:profileLabel'),
        
				headerStyle: {
				  backgroundColor: '#1EA596',
          
				},
        // headerBackTitleVisible:false,
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
    name ="Events_"
    component ={Events}
    options ={{
		headerShown:false
	}}
	/*options={{
			headerStyle: { backgroundColor: '#1EA596' },

          header: ({navigation}) =>(
            <MapSearchBar navigation={navigation} />
          )
        }}*/
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


