
import { globalStyles } from "../styles";
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import * as Linking from 'expo-linking'
// get the language 
import { withTranslation } from 'react-i18next';
import { Platform, Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
const eventMarker = require('../assets/event_img.png')
const barMarker = require('../assets/bar_img.png')

class DetailedMap extends Component {

    constructor(props){
        super(props)
        this.state =  {location: {
            latitude: 42.698334,
            longitude: 23.319941,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        
    }


    componentDidMount(){
        this._setLocation()
    }

    /**
     * Update state with correct location
     */
    _setLocation(){
        this.setState({
            location: {
                latitude: this.props.location.latitude,
                longitude: this.props.location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }
        })
    }

    /**
     * Handles the directions request and open Maps or Geo
     */    
    handleDirections(){
        // we need to check the platform user is checking and pass the appropriate app
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        // we set the coordinates for the directions
        const coordinates = `${this.state.location.latitude},${this.state.location.longitude}`;
        // we set the location label to the event or bar name
        const locationLabel = this.props.name;
        // we create url based on the platform
        const url = Platform.select({
            ios: `${scheme}${locationLabel}@${coordinates}`,
            android: `${scheme}${coordinates}(${locationLabel})`
        });
        // we open the the directions in another app
        Linking.openURL(url);
    }

    render() {

        // initialize the translation 
        const { t } = this.props;   
        const marker = this.props.type === "event" ? eventMarker : barMarker

        return (
            <View style={[globalStyles.justifyAndAlignCenter,{marginBottom:20}]}> 
                <MapView 
                    style={{width:'100%', height: 200, borderRadius:5}} 
                    initialRegion={this.state.location} 
                    region={this.state.location}
                    image={marker}
                >
                    <Marker coordinate={this.state.location} image={marker}/>
                </MapView>
                <Pressable 
                    onPress={()=> this.handleDirections()}
                    style={[globalStyles.btnSecondary,{width:'100%'}]}      
                >
                    <Text style={globalStyles.btnTextNeutral} >{t('common:directionsBtn')}</Text>
                </Pressable>
            </View>
        )
    }
}

export default withTranslation('common')(DetailedMap)