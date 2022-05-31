
import { globalStyles } from "../styles";
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import * as Location from 'expo-location';


import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class DetailedMap extends Component {

    constructor(props){
        super(props)
        this.state =  {location: {
            latitude: 42.698334,
            longitude: 23.319941,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
    }



    render() {
        return (
        <View>
            <Text style={globalStyles.bodyText}>this is the location of the event</Text>
            <MapView 
                style={{width:'100%', height: 200, borderRadius:5}} 
                initialRegion={this.state.location} 
                region={this.state.location}
            >
                <Marker coordinate={this.state.location}></Marker>
            </MapView>
        </View>
        )
    }
}