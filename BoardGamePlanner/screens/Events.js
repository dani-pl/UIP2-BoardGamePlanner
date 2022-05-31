import React from 'react'
import { 
  SafeAreaView,
  Image,
  Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { EventDB } from "../database/events";
import { BarDB } from "../database/bars";
import CardEvent from "../components/EventCard"
import { SearchBar } from 'react-native-elements';
import { globalStyles, unselected, backgroundColor, purple10, purple60 } from '../styles';
// get the language 
import { withTranslation } from 'react-i18next';

import getEnvVars, {ENV} from '../environment';

const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place'


const markerEvent = require("../assets/event_img.png");
const selectedEventMarker = require("../assets/eventSelected_img.png")

const { width, height } = Dimensions.get("window");
    const CARD_HEIGHT = height / 4;
    const CARD_WIDTH = CARD_HEIGHT - 50;



class Events extends React.Component {

  
  searchLocation;
  

  constructor(props){
    super(props);

    this.state =  {location: {
      latitude: 42.698334,
      longitude: 23.319941,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
    this.state= {currentCard: <View></View>}
    this.state= {search: ""}
    this.state= {showError: false}
  }

  componentDidMount(){
    this._getLocation();
  }

  displaySearchedLocation = async() =>{
    this.setState({
      location: {
        latitude: 42.681940,
        longitude: 23.298590,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    })
  }

  /**
   * Retrieve the current location of the user 
   */
  _getLocation = async() =>{
    // await the user's answer to the permission request
    let { status } = await Location.requestForegroundPermissionsAsync();
    // when the user denies
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    // get the current location and update map
    await Location.getCurrentPositionAsync({}).then((result) =>{
      {
        this.setState({
          location: {
            latitude: result.coords.latitude,
            longitude: result.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }
        })
    }
    });    
  }

  onPressMarker(e,index){
    this.setState({selectedMarkerEventIndex: index});
    this.setState({location: e.Location})
    let something = EventDB[index].date;
    this.state.currentCard = <CardEvent 
                                 date={EventDB[index].startDate}
                                 generalLocation={EventDB[index].location.general}
                                 numberAttendees={EventDB[index].attendees.length}
                                 numberOfSpots={EventDB[index].playerLimit}
                                 isHost={EventDB[index].hostId==7 ? "flex":"none"}
                                 navigation={this.props.navigation}
                                 event={EventDB[index]}>
                              </CardEvent>
  }

  _eventsMarkers = () => {
    let result= EventDB.map((element,i)=>{
      return <Marker 
	  			coordinate ={{
					latitude: element.location.latitude,
					longitude: element.location.longitude,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01}}
				key = {i}
				onPress={(e)=>{this.onPressMarker(e,i)}}
				image={this.state.selectedMarkerEventIndex === i ? selectedEventMarker : markerEvent}
        >
      </Marker> 
    }
    )
    return result
  }


  _barsMarkers = () => {
    let result= BarDB.map((element, i)=>{
      return <Marker 
	  			coordinate = {{
					latitude: element.location.latitude,
					longitude: element.location.longitude,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01}}
				key={i}
				image={require("../assets/bar_img.png")}>
      </Marker>
    }
    )
    return result
  }

  /**
   * search the location provided by the user and update the map view to new location
   * @param {string} userString 
   */
  _searchSubmit = async (userString) => {
    // await the the result of the API
    await this._getLocationCoordinates(userString)
    // get the location
    var location = this.searchLocation
    // when the location is either undefined or and empty array of object
    if(location == undefined || location == [] || location == {}) {
        // we set the error to true to show a message to the user
        this.setState({showError: true})
    } else {
        // we update the coordinates and the map view
        this.setState({
          location: {
            latitude: location.lat,
            longitude: location.lon,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }
        })
      }
	}


  /**
   * Get the lat and lng coordinates for the given location
   * @param {string} location 
   */
  _getLocationCoordinates = async (location) => {
      // split location in case use enters country code
      var location = location.split(",")
      // retrieve API key
      const API = ENV.dev.apikey
    
    try {
        // try to fetch the location from API
        let response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${location[0]},${location[1]}&limit=${1}&appid=${API}`
          );
        // await the response
        let json = await response.json()
        // we only want the first result in case of more
        this.searchLocation = json[0]    
      } catch (error) {
        console.error(error) 
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.searchedLocation !== prevProps.searchedLocation) {
      this._searchSubmit(this.props.searchedLocation)
    }
  }  

  render(){
    const { width, height } = Dimensions.get("window");
    const CARD_HEIGHT = height / 4;
    const CARD_WIDTH = CARD_HEIGHT - 50;

    // initialize the translation 
    const { t } = this.props;

    return (
      <View style={[globalStyles.container, globalStyles.mapContainer]}>
        <MapView 
            style={globalStyles.map} 
            initialRegion={this.state.location} 
            region={this.state.location}
			      showsUserLocation={true}
        >
			{this._eventsMarkers()}
			{this._barsMarkers()}
        </MapView>
        <SafeAreaView 
            style={{
                display:"flex", 
                flexWrap: "nowrap",
                backgroundColor: 'transparent', 
                justifyContent:"center", 
                alignItems:"center", 
                width:"100%",
                position:"absolute",
                top:40,
                }}>
            <SearchBar
                onSubmitEditing={()=>{this._searchSubmit(this.state.search)}}
                value={this.state.search}
                onChangeText = {(txt)=> {this.setState({search:txt})}}
                // clear text and any errors on refocus 
                onTouchStart= {()=>this.setState({showError: false})}
                clearTextOnFocus={true}
                onClear={()=>this.setState({showError: false})}
                // styles
                placeholder={t('common:searchBarPlaceholde')}
                placeholderTextColor={backgroundColor}
                inputContainerStyle={{backgroundColor:unselected,borderRadius:12,}} 
                style={{
                  alignSelf:"center", 
                  flexBasis: 150, 
                  borderColor:"transparent", 
                  shadowColor:"transparent",}} 
                searchIcon={{
                  color:"white",
                  size: 24}}
                clearIcon= {{
                  iconStyle: {
                    color: backgroundColor
                  }
                }}
                inputStyle={{
                  backgroundColor:unselected, 
                  color:backgroundColor,  
                  textAlign:'left',
                  fontFamily: "Montserrat-Regular",}} 
                containerStyle={{
                  backgroundColor:"transparent",
                  borderBottomColor:"transparent", 
                  borderTopColor:"transparent",
                  width:"95%",
                }}>
            </SearchBar>
            {/* ERROR MESSAGE IN CASE NO LOCATION IS FOUND */}
            <View style={{
                backgroundColor: purple10,
                width: '90%',
                borderRadius: 5,
                display: this.state.showError ? "flex" : "none"
            }}>
                <Text style={[globalStyles.h6,{padding:10, paddingBottom:0, margin:0,color:purple60, textAlign:'left'}]}>{t('common:searchErrorHead')}</Text>
                <Text style={[globalStyles.bodyText,{padding:10, paddingTop:0, color:purple60, margin:0,textAlign:'left'}]}>{t('common:searchErrorBody')}</Text>
            </View>

        </SafeAreaView>
        {this.state.currentCard}
      </View>
    )
    }
}

export default withTranslation('common') (Events)