import React from 'react'
import {Pressable, LogoTitle,SafeAreaView, Image, View, ColorPropType, Text} from 'react-native'
import { globalStyles, selected, unselected, primary } from '../styles';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import StyleFile from '../styles';
import { SearchBar } from 'react-native-elements';
export default MapSearchBar = () => {

    return (
        <SafeAreaView 
				style={{
					display:"flex", 
					flexWrap: "nowrap",
					backgroundColor: '#1EA596', 
					justifyContent:"center", 
					alignItems:"center", 
					width:"100%"
                    }}>
				<SearchBar 
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
              		<Text style= {[globalStyles.btnTextWhite,{fontFamily: "Montserrat-Regular",}]}>Search Location</Text>
              </SearchBar>
            </SafeAreaView>
    )
}