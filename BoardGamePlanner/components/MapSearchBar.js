import React from 'react'
import {Pressable, LogoTitle,SafeAreaView, Image, View, ColorPropType, Text} from 'react-native'
import { globalStyles, selected, unselected, primary } from '../styles';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import StyleFile from '../styles';
import { SearchBar } from 'react-native-elements';
import Events from '../screens/Events'
import { NavigationContainer } from '@react-navigation/native';

export default class MapSearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {search:"Search Location"};
	}

	searchSubmit = () =>{
	}


    render() {
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
						onSubmitEditing={()=>{}}
						value={this.state.search}
						onChangeText = {(txt)=>this.setState({search: txt})}
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
		)
	}
}