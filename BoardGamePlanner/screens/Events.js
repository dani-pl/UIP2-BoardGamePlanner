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





export default function Events() {
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={globalStyles.container}>
     <MapView style={globalStyles.map} initialRegion={tokyoRegion}>
     <Marker coordinate={tokyoRegion} image={require("../assets/event_img.png")}/>
     </MapView>
{/*  <Text style={globalStyles.h1}>Heading 1</Text>
      <Text style={globalStyles.h2}>Heading 2</Text>
      <Text style={globalStyles.h3}>Heading 3</Text>
      <Text style={globalStyles.h4}>Heading 4</Text>
      <Text style={globalStyles.h5}>Heading 5</Text>
      <Text style={globalStyles.h6}>Heading 6</Text>
      <Text style={globalStyles.subtitle1}>Subtitle1</Text>
      <Text style={globalStyles.subtitle2}>Subtitle2</Text>
      <Text style={globalStyles.subtitle3}>Subtitle3</Text>
      <Text style={globalStyles.allCaps}>All Caps Small</Text>
      <StatusBar style="auto" />
      <Pressable style={globalStyles.btnPrimary}>
        <Text style={globalStyles.btnTextWhite}>Click me</Text>
      </Pressable>
      <Pressable style={globalStyles.btnIconPrimary}>
      <FontAwesome name={'map'} color='#fff'/>
      </Pressable>
      <Pressable style={globalStyles.btnIconSecondary}>
      <FontAwesome name={'map'} color='#2F3C3B'/>
      </Pressable> */}
    </View>
  )
}



