import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  Text, View, Dimensions} from 'react-native';
import {globalStyles} from "../styles";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import * as Location from 'expo-location';
import {EventDB} from "../database/events";
import {BarDB} from "../database/bars";
import CardEvent from "../components/EventCard"
import Animated from 'react-native-reanimated';

const markerEvent = require("../assets/event_img.png");
const selectedEventMarker = require("../assets/eventSelected_img.png")





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
  }

  componentDidMount(){
    this._getLocation();
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
      return <Marker coordinate ={{latitude: element.location.latitude,
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
    let result= BarDB.map((element)=>{
      return <Marker coordinate ={{latitude: element.location.latitude,
                            longitude: element.location.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01}}
                     image={require("../assets/bar_img.png")}>
      </Marker>
    }
    )
    return result
  }

  render(){
    const { width, height } = Dimensions.get("window");
    const CARD_HEIGHT = height / 4;
    const CARD_WIDTH = CARD_HEIGHT - 50;
    return (
      <View style={globalStyles.container}>
        <MapView style={globalStyles.map} initialRegion={this.state.location} region={this.state.location}>
          {this._eventsMarkers()}
          {this._barsMarkers()}
        </MapView>
        {this.state.currentCard}
      </View>
    )
    }
}



