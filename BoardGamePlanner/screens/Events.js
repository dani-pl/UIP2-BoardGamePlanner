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

    this.setState({
      location
    })
    const currentLocation = {
      latitude: this.state.location,
      longitude: this.state.location,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
  }
  render(){
    return (
      <View style={globalStyles.container}>
      {/* <MapView style={globalStyles.map} initialRegion={tokyoRegion}>
      <Marker coordinate={tokyoRegion} image={require("../assets/event_img.png")}/>
      </MapView> */}
        <Text>{JSON.stringify(this.state.location)}</Text>
      </View>
    )
    }
}



