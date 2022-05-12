import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  Text, View} from 'react-native';
import {globalStyles} from "../styles";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';






export default class Events extends React.Component {

  state = {
    location:{},
    latitude:0,
    longitude:0,
    errorMessage:''
  }

  componentWillMount() {
    this._getLocation();
  }

  _getLocation = async() =>{
    const {status} = await Permissions.askAsync(Permissions.LOCATION);

    if(status !== 'granted'){
      console.log('PERMISSION NOT GRANTED!')

      this.setState({
        errorMessage: 'PERMISSION NOT GRANTED'
      })
    }
    const location = await Location.getCurrentPositionAsync();

    if(location.coords.latitude!=null){
      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    }

    this.setState({
      location
    })

    
    
  }
  render(){
    const currentLocation = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    return (
      <View style={globalStyles.container}>
      <MapView style={globalStyles.map} initialRegion={currentLocation}>
      <Marker coordinate={currentLocation} image={require("../assets/event_img.png")}/>
      </MapView>
        {/* <Text>{JSON.stringify(this.state.latitude)}</Text> */}
        
      </View>
    )
    }
}



