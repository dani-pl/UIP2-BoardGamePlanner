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
import * as Location from 'expo-location';






export default class Events extends React.Component {
  constructor(props){
    super(props);
    this.state =  {location: {
      latitude: 42.698334,
      longitude: 23.319941,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  }

/*   state = {
    location:{},
    latitude:0,
    longitude:0,
    errorMessage:''
  } */

/*   componentDidMount() {
    this._getLocation();
  } */

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


    /* this.setState({
      location
    }) */

    
    
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
      <MapView style={globalStyles.map} initialRegion={this.state.location} region={this.state.location}>
      <Marker coordinate={this.state.location} image={require("../assets/event_img.png")}/>
      </MapView>
        {/* <Text>{JSON.stringify(this.state.latitude)}</Text> */}
        
      </View>
    )
    }
}



