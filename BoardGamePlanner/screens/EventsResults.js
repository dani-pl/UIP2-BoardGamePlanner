import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,Image,
  Text, View} from 'react-native';
import {globalStyles, eventCardStyles, neutral60, neutral50} from "../styles";
import { FontAwesome, Feather, Ionicons} from '@expo/vector-icons';
import { EventDetails } from '../components/EventCard';
import { EventDB } from '../database/events';
import { stopLocationUpdatesAsync } from 'expo-location';
import { getGameById } from '../database/Model/GameModel';

export default function EventsResults({route}) {

	const [event, setEvent] = useState({})
	const [eventDay, setEventDay] = useState('')
	const [games, setGames] = useState([])

	useEffect(()=>{
		_getEvent(route.params.eventId)
	},[])


	/**
	 * get the event object from the model
	 * @param {int} eventId 
	 */
	const _getEvent =  (eventId) => {
        EventDB.forEach(e => {
            if(e.eventId == eventId){
                setEvent(e)
				// e.games.forEach((game)=>{
				// 	console.log('here')
				// 	setGames(prevGames => [...prevGames,getGameById(game)])
				// })
            }
        });
		console.log(games)
	}

	const getGames = () => {
		var tempGames=[]
		event.games.forEach((game, i) => tempGames.push(getGameById(game)))
		console.log(tempGames)
	}

	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.h1}>{event.title}</Text>
			<Text style={globalStyles.allCaps}>{event.startDate}</Text>
				<View style={eventCardStyles.LeftDetails}> 
					<View style={eventCardStyles.EventOwnerLocationIcon}>
						<FontAwesome 
							name={"user"} 
							size={22} 
							color={neutral60} 
							style={{marginBottom:5}}
						/>
						<Ionicons 
							name={"ios-home-outline"} 
							size={22} 
							color={neutral60}
						/>
					</View>
					<View style={eventCardStyles.EventOwnerLocation}>
						<Text style={[{
							padding:0,
							marginTop:5, 
							marginBottom:5, 
							marginLeft:5,
						}]}
						numberOfLines={1}
						ellipsizeMode={"tail"} 
						>2 Spots Left</Text>
						{/* <Text style={[{
							padding:0, 
							marginTop:5, 
							marginBottom:5, 
							marginLeft:5}]}
						>{event.location.general}</Text> */}
					</View>
				</View>
				<View>
					<Text>Organised by</Text>
					<View>
						<Image source={{uri: '../assets/person.jpeg'}} style={{width:50, height:50}}/>
						<Text>: @UserName</Text>
					</View>
				</View>
				{/* GAMES */}
				
				<Text>
					{JSON.stringify(event)}
				</Text>
				<View>
						
				</View>

				
		</View>
	)
}
