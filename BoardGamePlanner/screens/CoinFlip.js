
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
      fadeAnim: new Animated.Value(0),
      selected: require('../assets/head.png'),
      selectedText: 'Toss the coin',
      side:[
        require('../assets/head.png'),
        require('../assets/tails.png'),
      ]
    }
    };


handleClick = () => {
   
      this.setState({
        'pressCount':this.state.pressCount + 1,
        'clicked': true, 
        'selected': this.state.side[Math.floor(Math.random() * 
    this.state.side.length)],
      })

      console.log(this.state.selected);


if(this.state.selected == 40){
  this.state.selectedText = 'Heads'
}else{
  this.state.selectedText ='Tails'
}

this.setState({
  'selectedText': this.state.selectedText,
})

    }

flipCard(){
      if(this.value>90){
        Animated.spring(this.animatedValue,
          {
            toValue:0,
           friction:5,
           tension:10,
           easing: Easing.linear,
            useNativeDriver:true
          }).start(() => this.handleClick());
      } else{
        Animated.spring(this.animatedValue,
          {
            toValue:360,
            friction:5,
            tension:10,
            easing: Easing.linear,
            useNativeDriver:true
          }).start(() => this.handleClick());
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
      <TouchableHighlight onPress={() => this.flipCard()}>
        
      <View style={globalStyles.btnPrimary}>
          <Text style={globalStyles.btnTextWhite}>Toss</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

}