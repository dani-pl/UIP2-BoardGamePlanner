import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  Modal,
  Pressable,
  Image,
  Text, 
  View,
  ScrollView} from 'react-native';
import {globalStyles, eventCardStyles, neutral60, neutral40,purple10, purple50} from "../styles";
import { FontAwesome, Feather, Ionicons} from '@expo/vector-icons';
import { EventDetails } from '../components/EventCard';
import { EventDB } from '../database/events';
import { PLAYERS } from '../database/players';
import { GAMES } from '../database/games';
import { stopLocationUpdatesAsync } from 'expo-location';
import { getGameById } from '../database/Model/GameModel';
import SegmentControl from '../components/SegmentControl';
import JoinModal from '../components/JoinModal';
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import DetailedMap from '../components/DetailedMap'

export default function EventsResults({route}) {

	// we initiate with random event as fallback while loading data
	const [event, setEvent] = useState(EventDB[1])
	const [tabIndex, setTabIndex] = useState(0);
	const [joined, setJoined] = useState(true); 
	const [modalVisible, setModalVisible] = useState(false);
	const tabs = joined ? ['Spelers', 'Chat', 'Locatie'] : ['Spelers', 'Chat']

	const handleTabsChange = index => {
		setTabIndex(index);
	  };
	
	useEffect(()=>{
		// on component mount update the event with the data passed by the event card
		setEvent(route.params.event)
		// console.log(event.joined)
		// if(event.joined){
		// 	setJoined(true)
		// }else setJoined(false)
		return () => {
			setJoined(false)
		}
	},[])


	/**
	 * Get the games in the event
	 * @returns {JSX} game views
	 */
	const getGames = () => {
		// for each game get the game object and create a JSX element
		var games = event.games.map((EventGame, i) => {
			var game = getGameById(EventGame)
			return (
				<View 
					style={{marginRight:20, marginTop: 10, width:200}}
					key={i}	
				>
					<Image 
						source={{uri: game.image}}
						style={{
							width: 200,
							height: 100,
							backgroundColor:'#ddd',
							borderRadius:10}}
						resizeMode='cover'
					/>
					<Text style={[globalStyles.h6,{lineHeight:0}]}>{game.name}</Text>
				</View>
			)})
		// return list to view
		return games;
	}

	/**
	 * Get the attendees in the event
	 * @returns {JSX} attendees views
	 */
	const getAttendees = () => {
		
		var attendees = event.attendees.map((attendee, i)=>{
			var att;
			PLAYERS.forEach((player)=>{
				if(player.username == attendee ){
					att = player
				}
			})

			return(
				<View 
					key={i} 	
					style={[globalStyles.flexRow, {justifyContent:'flex-start', marginLeft:10, marginVertical:10}]}
				>
					<Image
						source={{uri:att.image}}
						style={{
							width: 30,
							height: 30,
							backgroundColor:purple10,
							borderRadius: 15}}
						resizeMode="cover"
					/>
					<Text style={[globalStyles.bodyText, {marginLeft:10}]}>{att.name}</Text>
				</View>
			)
		})

		return attendees
	}

	/**
	 * Get the open spots in the event
	 * @returns {JSX} open spots views
	 */
	const getOpenSpots = () =>{
		var open = event.playerLimit-event.attendees.length
		if(open != 0){
			// create an array of the length of open spots and map for each spot a open spot component
			var openSpots = Array.from({length:open}).map((spot, i) => {
				return (
					<View 
						key={"spot_" + i}
						style={[globalStyles.flexRow, {justifyContent:'flex-start', marginLeft:10, marginVertical:10}]}>
					
							<View style={[globalStyles.justifyAndAlignCenter,{
								width: 30,
								height: 30,
								backgroundColor:purple10,
								borderRadius: 15}]}
								>
								<Text style={globalStyles.bodyText}>?</Text>
							</View>
							<Text style={[globalStyles.bodyText, {marginLeft:10}]}>Open Spot</Text>
					</View>
				)
			})

		}
		return openSpots
	}

	const toggleModal = () => {
		setModalVisible(true)
		setJoined(true)
		setTabIndex(2)
	}

	return (
		<View style={[globalStyles.container, {flex:1}]}>
			<Text style={globalStyles.h2}>{event.title}</Text>
			<Text style={globalStyles.allCaps}>{event.startDate} {event.repeatSchedule !== "once" && " • " + event.repeatSchedule + " event"}</Text>
			<ScrollView
				showsVerticalScrollIndicator={false}
			>
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
						<Text style={[globalStyles.btnTextNeutral,{
							padding:0,
							marginVertical: 5,
							marginLeft: 5,
							paddingLeft:0,
						}]}
						numberOfLines={1}
						ellipsizeMode={"tail"} 
						>{(event.playerLimit-event.attendees.length) != 0 ?  (event.playerLimit-event.attendees.length) + " open" : "Full"}</Text>
						<Text style={[globalStyles.subtitle2, {
							padding:0, 
							marginVertical: 5,
							marginLeft:5 }]}
						>
							{event.location.general}
						</Text>
					</View>
				</View>
				<View style={[globalStyles.flexRow, {justifyContent:'flex-start', marginTop:10}]}>
					<Text style={globalStyles.bodyText}>Organised by: </Text>
					<View style={[globalStyles.flexRow, {justifyContent:'flex-start', marginLeft:10}]}>
						<Image 
							source={{uri:PLAYERS[event.hostId].image}}
							style={{
								width: 30,
								height: 30,
								backgroundColor:purple10,
								borderRadius: 15}}
							resizeMode="cover"
						/>
						<Text style={[globalStyles.h6, {marginLeft:5}]}>
							@{PLAYERS[event.hostId].username}
						</Text>
					</View>
				</View>

				{/* GAMES */}
				<View style={{marginVertical:10}}>
					<Text style={globalStyles.h4} >Games</Text>
					<ScrollView 
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						{ getGames() }
					</ScrollView>
				</View>
								
				<SegmentControl 
					tabs={tabs}
					currentIndex={tabIndex}
        			onChange={handleTabsChange}
					paddingVertical={6}
				/>

				{/* ATTENDEES OVERVIEW */}
				<View style={{display:tabIndex == 0 ? "flex" : "none" }}>
					{ getAttendees() }
					{ getOpenSpots() }
					<View style={{marginVertical: 35}}></View>
				</View>
				
				{/* CHAT OVERVIEW */}
				<Text style={{display:tabIndex == 1 ? "flex" : "none" }}>
					{JSON.stringify(event)}
				</Text>

				{/* LOCATION OVERVIEW */}
				<View style={{display:tabIndex == 2 ? "flex" : "none" }}>
					<DetailedMap />
				</View>
			</ScrollView>
			
			{/* SHOW OR HIDE THE JOIN BUTTON */}
			{
				// only show if not already joined
				!joined ? <>
				{/* we only display the join btn when there are spots available */}
				<View style={[globalStyles.floatingBtnContainer, {display: (event.playerLimit-event.attendees.length) != 0 ? "flex" : "none"}]}> 
						<Pressable 
							style={[
								globalStyles.btnPrimary, 
								globalStyles.floatingBtn
							]}
							onPress={toggleModal}
							>
							<Text style={globalStyles.btnTextWhite}>Take Spot</Text>
						</Pressable>
					</View> 
							</>
					: undefined
			}
			

			{/* MODAL FOR JOIN REQUEST SENT */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				presentationStyle={'overFullScreen'}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
							<View style={{ 
								paddingHorizontal: 35,
								paddingTop: 35,
								paddingBottom:20,
								}}> 
	  							<View style={[{
									  display:"flex",
									  alignSelf:'center',
									  padding: 5,
									  margin: 5,
									  backgroundColor: purple10,
									  width: 50,
									  height: 50,
									  borderRadius: 25	  
								},globalStyles.justifyAndAlignCenter]}>
									<FontAwesome name="paper-plane" size={24} color={purple50} />
								</View>
								<Text style={[globalStyles.h3,{textAlign:'center'}]}>Request Sent</Text>
								<Text style={[globalStyles.bodyText, {textAlign:'center'}]}>Your request has been sent to <Text style={globalStyles.h6}>@{PLAYERS[event.hostId].username}</Text></Text>
							</View>
							
							<Pressable
								style={[globalStyles.btnSecondary, {
									width: '100%',
									justifyContent:'flex-end', 
									margin:0,
									borderTopLeftRadius:0, 
									borderTopRightRadius:0}]}
								onPress={() => setModalVisible(!modalVisible)}
								>
								<Text style={globalStyles.btnTextNeutral}>OK</Text>
							</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	)
}



const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      alignItems: "center",
	  width: '75%',
      shadowColor: shadowColor,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },

  });