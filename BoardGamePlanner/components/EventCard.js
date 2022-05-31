import React, { useTransition } from "react"
import { 
	Stylesheet, 
	Image, 
	Text, 
	View, 
	ImageBackground,
	Pressable, 
	Dimensions, 
	StyleSheet} from "react-native"
import { FontAwesome, Feather, Ionicons} from '@expo/vector-icons';
import {  
	globalStyles, 
	eventCardStyles,
	neutral50,
	neutral60 } from "../styles";

import { getGameById } from "../database/Model/GameModel";

const { width, height } = Dimensions.get("window");
    const CARD_HEIGHT = height / 4;
    const CARD_WIDTH = CARD_HEIGHT - 50;

import { useTranslation } from "react-i18next";

export default function CardEvent(props) {

	// initiate translation instance
    const { t } = useTranslation();
	
	/**
	 * Cut text when it is too big and add ellipses
	 * @param {string} text 
	 * @returns text
	 */
	const _truncateText = (text) => {
		const maxLimit = 21;
		return (text).length > maxLimit ? (((text).substring(0,maxLimit-3)) + '...') : text
	}

	return (
		<Pressable 
			style={[globalStyles.justifyAndAlignCenter,{width:'98%'}]} 
			onPress={() => props.navigation.navigate('EventsResults', {event:props.event})}>
			<View style={eventCardStyles.CardEvent} >
				<View style={eventCardStyles.CardEventLeftCon}>
					<View style={eventCardStyles.CardEventGroup}>
						<Text style={globalStyles.allCaps}>{props.date}</Text>
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
									size={18} 
									color={neutral50}
									/>
							</View>
							<View style={eventCardStyles.EventOwnerLocation}>
								<Text style={[
									globalStyles.btnTextNeutral,{
										padding:0,
										marginTop:5, 
										marginBottom:5, 
										marginLeft:5,
										
									}]}
									numberOfLines={1}
									ellipsizeMode={"tail"} 
									>
										{(props.event.playerLimit-props.event.attendees.length) != 0 ?  `${(props.event.playerLimit-props.event.attendees.length)} ${t("common:spotsLbl")}` : t("common:spotsFull")}
										
										</Text>
								<Text style={[
									globalStyles.subtitle3,{
										padding:0, 
										marginTop:5, 
										marginBottom:5, 
										marginLeft:5}]}
										>{props.generalLocation}</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={eventCardStyles.DetailsContainer}>
					<View style={eventCardStyles.Pill}>
						<Text style={[globalStyles.allCaps,{margin:0, display:props.isHost}]}>HOST</Text>
					</View>
					<View style={eventCardStyles.gamesPrevCon}>
						{
							props.eventGame1 ? <Image 
								source={{uri:getGameById(props.eventGame1).thumbnail}}
								resizeMode="cover"
								style={eventCardStyles.LastGameImgBubble}
							/> : undefined
						}
						{
							props.eventGame2 ? <Image 
								source={{uri:getGameById(props.eventGame2).thumbnail}}
								resizeMode="cover"
								style={eventCardStyles.MiddleGameImgBubble}
							/> : undefined
						}
						{
							props.eventGame3 ? <Image 
								source={{uri:getGameById(props.eventGame3).thumbnail}}
								resizeMode="cover"
								style={eventCardStyles.FirstGameImgBubble}
							/>  : undefined
						}
					</View>
				</View>
			</View>
		</Pressable>
	)
}

export const EventDetails = () => {
	return (

		<View>
			<Text>
				New Transition
			</Text>
		</View>

	)
}

