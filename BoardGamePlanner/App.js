import React, {useState, useEffect} from 'react'
import AppLoading from 'expo-app-loading';

// navigation
import { NavigationContainer, StackActions } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ProfileNavigator,EventsNavigator, ToolsNavigator, SplashNavigator} from './Navigation'
import { createStackNavigator } from '@react-navigation/stack';

// fonts and icons
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// splash screen
import Splash from './screens/Splash';

// language
import Localize from './Constants/Localize'
import { useTranslation } from 'react-i18next';


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


export default function App() {

  	// get the translation instance
	const { t } = useTranslation();
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
		},5200)
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
		
			<Tab.Screen name={t('common:eventTabLabel')} component={EventsNavigator}   options={{
						tabBarIcon: ({size, color, focused}) => (<FontAwesome  focused={focused} name={"map"} color={color} size={20}/>)
					}}
				/>
			<Tab.Screen name={t('common:profileTabLabel')} component={ProfileNavigator}  options={{
				tabBarIcon: ({size, color, focused}) => (<FontAwesome focused={focused} name={"user"} color={color} size={20} />)
			}}
				/>
			<Tab.Screen name={t('common:toolsTabLabel')} component={ToolsNavigator}  options={{
			tabBarIcon: ({size, color, focused}) => (<FontAwesome5 focused={focused} name={"dice-four"} color={color} size={20} />)
		}}
				/>
			
		</Tab.Navigator>
		</NavigationContainer>
	);
}