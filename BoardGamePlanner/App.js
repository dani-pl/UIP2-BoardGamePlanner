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
import { LogBox } from 'react-native';

// Interactive Walkthrough
import {enableExperimentalLayoutAnimation} from "react-native-interactive-walkthrough"
import { WalkthroughProvider } from 'react-native-interactive-walkthrough';

enableExperimentalLayoutAnimation();

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


export default function App() {

	// ignore any yellow warnings => used during demo
	// LogBox.ignoreAllLogs()

  	// get the translation instance
	const { t } = useTranslation();

	  let [splash, setSplash] = useState(true);
	  
	  //loading the fonts used on the front end
  	let [fontsLoaded] = useFonts({
          'Montserrat-Semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
          'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
          'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
          'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
          'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf')
  	});

 
  

	useEffect(() => {
		// if the splash screen is exists
		if(Splash){
			// set a timeout of 5.2 seconds after which the splash should be set to false again
			setTimeout(()=>{
				setSplash(false);
		},5200)}
	},[])
	
	
	if (!fontsLoaded) {
		return <AppLoading />;
	}


	return (
		// if splash is true show it otherwise show main contain of the app
		splash ? <Splash /> :
		<WalkthroughProvider
			
		>
			<NavigationContainer>
			{/* we need the tab navigator to show the tabs in the main navigation */}
			<Tab.Navigator screenOptions={{ 
				headerShown: false,
				tabBarActiveTintColor: "#1EA596",
				tabBarInactiveTintColor: "#5A6867",
				tabBarLabelStyle: {
					fontSize: 14
					},
				tabBarStyle: [
					{
						display: "flex"
					},
					null
					]
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
		</WalkthroughProvider>
	);
}