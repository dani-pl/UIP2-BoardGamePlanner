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
  ScrollView, 
  Dimensions,
  Animated, TouchableHighlight} from 'react-native';
import {globalStyles, eventCardStyles, neutral60, neutral40,purple10, purple50} from "../styles";
import { FontAwesome, Feather, Ionicons} from '@expo/vector-icons';
import { EventDetails } from '../components/EventCard';
import { EventDB } from '../database/events';
import { PLAYERS } from '../database/players';
import { GAMES } from '../database/games';
import { stopLocationUpdatesAsync } from 'expo-location';
import { getGameById } from '../database/Model/GameModel';
import SegmentControl from '../components/SegmentControl';
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import DetailedMap from '../components/DetailedMap'

import { useTranslation } from 'react-i18next';

let deviceHeight = Dimensions.get('window').height
var deviceWidth = Dimensions.get('window').width

export default function EventsResults({route}) {

	// initiate translation instance
    const { t } = useTranslation();

	// we initiate with random event as fallback while loading data
	const [event, setEvent] = useState(EventDB[1])
	const [tabIndex, setTabIndex] = useState(0);
	const [joined, setJoined] = useState(false); 
	const [modalVisible, setModalVisible] = useState(false);
	// set the tabs based on if the player has joined the event
	const tabs = joined ? [
		t('common:segmentControlPlayers'), 
		t('common:segmentControlChat'), 
		t('common:segmentControlLocation')
		] : [
			t('common:segmentControlPlayers'), 
			t('common:segmentControlChat')
		]

	/**
	 * update the tabs
	 * @param {number} index 
	 */
	const handleTabsChange = index => {
		setTabIndex(index);
	  };
	
	useEffect(()=>{
		// on component mount update the event with the data passed by the event card
		setEvent(route.params.event)
		// on unmount set joined back to false
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
			// get the attendee 
			var att = getPlayerByUsername(attendee);

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


	/**
	 * toggle join request modal
	 */
	const toggleModal = () => {
		setModalVisible(true)
		setJoined(true)
	}

	/**
	 * Retrieve the player object by username
	 * @param {string} username
	 * @returns 
	 */
	const getPlayerByUsername = (username) => {
		var att;
		PLAYERS.forEach((player)=>{
			if(player.username == username){
				att = player
			}
		})
		return att;
	}

	/**
	* Get the chat messages in the event
	 * @returns {JSX} chat messages views
	 */
	const getMessages = () => {
		var messages = event.comments.map((message, i)=>{
			console.log(message)
			// get the player object
			var player = getPlayerByUsername(message.playerId) || {name:"placeholder",image:"https://robohash.org/earumoccaecatimodi.png"}
			return (
				<View key={i} style={{flexDirection:"row", alignItems:'center'}}>
					<Image
						source={{uri: player.image}}
						style={{
							width: 30,
							height: 30,
							margin: 10,
							backgroundColor:purple10,
							borderRadius: 15}}
						resizeMode="cover"
					/>
					<View style={{margin:10, width:"90%"}}>
						<Text style={[globalStyles.h6,{lineHeight:0}]}>{player.name}</Text>
						<Text style={[globalStyles.bodyText, {marginVertical:0}]}>{message.text}</Text>
					</View>
				</View>
			)
		})
		return messages;
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
						>{(event.playerLimit-event.attendees.length) != 0 ?  `${(event.playerLimit-event.attendees.length)} ${t("common:spotsLbl")}` : t("common:spotsFull")}</Text>
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
					<Text style={globalStyles.bodyText}>{t('common:host')}</Text>
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
					<Text style={globalStyles.h4} >{t("common:gamesLbl")}</Text>
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
				<View style={{display:tabIndex == 1 ? "flex" : "none" }}>
					{/* {JSON.stringify(event)} */}
					{ getMessages() }
				</View>

				{/* LOCATION OVERVIEW */}
				<View style={{display:tabIndex == 2 ? "flex" : "none" }}>
					<DetailedMap location={event.location} type={'event'} name={event.title}/>
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
							<Text style={globalStyles.btnTextWhite}>{t('common:takeSpotBtn')}</Text>
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
								<Text style={[globalStyles.h3,{textAlign:'center'}]}>{t('common:takeSpotConfirmHead')}</Text>
								<Text style={[globalStyles.bodyText, {textAlign:'center'}]}>{t('common:takeSpotConfirmBody')}<Text style={globalStyles.h6}>@{PLAYERS[event.hostId].username}</Text></Text>
							</View>
							
							<Pressable
								style={[globalStyles.btnSecondary, {
									width: '100%',
									justifyContent:'flex-end', 
									margin:0,
									borderTopLeftRadius:0, 
									borderTopRightRadius:0}]}
								onPress={() => {
									setModalVisible(!modalVisible);
									setTabIndex(2)
								}}
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