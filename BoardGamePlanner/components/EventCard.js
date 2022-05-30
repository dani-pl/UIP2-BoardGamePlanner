import React from "react"
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

const { width, height } = Dimensions.get("window");
    const CARD_HEIGHT = height / 4;
    const CARD_WIDTH = CARD_HEIGHT - 50;

export default function CardEvent(props) {

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
		<View style={eventCardStyles.CardEvent}>
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
								>{props.numberAttendees.toString().concat(" open")}</Text>
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
					<View style={eventCardStyles.DetailsContainer}>
						<View style={eventCardStyles.Pill}>
							<Text style={[globalStyles.allCaps,{margin:0, display:props.isHost}]}>HOST</Text>
						</View>
						<View style={eventCardStyles.gamesPrevCon}>
								<Image 
									source={{uri:"https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__original/img/ZzyzlO15ggCfkLg9ckeM4PWNePI=/0x0/filters:format(jpeg)/pic3033330.jpg"}}
									resizeMode="cover"
									style={eventCardStyles.LastGameImgBubble}
								/>

								<Image 
									source={{uri:"https://cf.geekdo-images.com/NPWdxDD5uLOBLBDdVgdLvA__original/img/zlx0Qqcgt0TLu62F5sKUmYTDNvc=/0x0/filters:format(png)/pic6034093.png"}}
									resizeMode="cover"
									style={eventCardStyles.MiddleGameImgBubble}
								/>
								<Image 
									source={{uri:"https://cf.geekdo-images.com/VceWk5QVkgIp6rWDl5qHKQ__thumb/img/_4ZkvkgZey9R2OJOw_TqF426Qew=/fit-in/200x150/filters:strip_icc()/pic2611318.jpg"}}
									resizeMode="cover"
									style={eventCardStyles.FirstGameImgBubble}
								/>
						</View>
				</View>
			</View>
		</View>
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

