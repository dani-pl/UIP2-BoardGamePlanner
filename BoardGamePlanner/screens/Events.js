import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  Text, View, Dimensions,ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { EventDB } from "../database/events";
import { BarDB } from "../database/bars";
import CardEvent from "../components/EventCard"
import Animated from 'react-native-reanimated';
import { SearchBar } from 'react-native-elements';
import { globalStyles, selected, unselected, primary } from '../styles';
import MapSearchBar from '../components/MapSearchBar';
import axios from 'axios'


const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place'




const markerEvent = require("../assets/event_img.png");
const selectedEventMarker = require("../assets/eventSelected_img.png")

const { width, height } = Dimensions.get("window");
    const CARD_HEIGHT = height / 4;
    const CARD_WIDTH = CARD_HEIGHT - 50;



export default class Events extends React.Component {
  constructor(props){
    super(props);
    this.state =  {location: {
      latitude: 42.698334,
      longitude: 23.319941,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
    this.state= {currentCard: <View></View>}
    this.state={search:"Search Location"}
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

  _getLocation = async() =>{

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({}).then((result) =>{
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
    this.state.currentCard =  <CardEvent></CardEvent>
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
				image={this.state.selectedMarkerEventIndex === i ? selectedEventMarker : markerEvent}>
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

  _searchSubmit = (userString) =>{
		this.setState({
      location: {
            latitude: 42.681940,
            longitude: 23.298590,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
      }
    })
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
    return (
      <View style={[globalStyles.container, globalStyles.mapContainer]}>
        <MapView 
            style={globalStyles.map} 
            initialRegion={this.state.location} 
            region={this.state.location}
			      showsUserLocation={true}
            provider={MapView.PROVIDER_GOOGLE}
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
              onChangeText = {(txt)=> this.setState({search:txt})}
              placeholder='something else'
              inputContainerStyle={{backgroundColor:unselected,borderRadius:12,}} 
              style={{
                alignSelf:"center", 
                flexBasis: 150, 
                borderColor:"transparent", 
                shadowColor:"transparent",}} 
              searchIcon={{
                color:"white",
                size: 24}}
              inputStyle={{
                backgroundColor:unselected, 
                color:selected,  
                textAlign:'left',
                fontFamily: "Montserrat-Regular",}} 
              containerStyle={{
                backgroundColor:"transparent",
                borderBottomColor:"transparent", 
                borderTopColor:"transparent",
                width:"95%",
              }}>
          </SearchBar>
          </SafeAreaView>
        {this.state.currentCard}
      </View>
    )
    }
}



