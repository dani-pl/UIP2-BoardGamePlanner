
import { StyleSheet, Text, View, Image, TouchableHighlight, Easing } from 'react-native';
import {useState} from 'react'
import React, { Component } from 'react';
import {globalStyles} from "../styles"
import { Animated} from 'react-native';


export default class CoinFlip extends Component {

  constructor (props) {
    super(props);

    this.value=0;
    this.animatedValue = new Animated.Value(180);
    this.animatedValue.addListener(({value})=>{
      this.value = value;
    })
    
    this.state= {
      pressCount: 0,
      clicked: false,
      selected: require('../assets/head.png'),
      selectedText: 'Toss the coin',
      side:[
        require('../assets/head.png'),
        require('../assets/tails.png'),
      ]
    }
    };


handleClick = () => {
   
  const image = this.state.side[Math.floor(Math.random() * 
    this.state.side.length)]

if(image == this.state.side[0]){
  this.setState({
    'pressCount':this.state.pressCount + 1,
    'clicked': true, 
    'selected': image,
    'selectedText': "Heads",
  })
  this.flipCard()
}
else{
  this.setState({
    'pressCount':this.state.pressCount + 1,
    'clicked': true, 
    'selected': image,
    'selectedText': "Tails",
  })
  this.flipCard()
}
    }

    flipCard(){
      if(this.value>90){
        Animated.spring(this.animatedValue,
          {
            toValue:0,
           friction:4,
           tension:10,
           easing: Easing.easing,
            useNativeDriver:true
          }).start();
      } else{
        Animated.spring(this.animatedValue,
          {
            toValue:360,
            friction:4,
            tension:10,
            easing: Easing.easing,
            useNativeDriver:true
          }).start();
        }; 
}

      
    render(){

      this.frontInterpolate = this.animatedValue.interpolate({
        inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
      })

      this.backInterpolate = this.animatedValue.interpolate({
        inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
      })

      const frontAnimatedStyle = {
        transform:[
          {rotateX: this.frontInterpolate}
        ]
      }
  
      const backAnimatedStyle = {
        transform:[
          {rotateX: this.backInterpolate}
        ]
      }
      

  return (
    <View style={globalStyles.centered}>

<>

<Animated.Image  style={[globalStyles.flipCard, frontAnimatedStyle]}
       source={this.state.selected}></Animated.Image>

<Animated.Image  style={[globalStyles.flipCard,globalStyles.flipCardBack, backAnimatedStyle]}
            source={this.state.selected}></Animated.Image>

</>
<Text style={globalStyles.text}>{this.state.selectedText}</Text>
      <TouchableHighlight onPress={() => this.handleClick()}>
        
      <View style={globalStyles.btnPrimary}>
          <Text style={globalStyles.btnTextWhite}>Toss</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

}