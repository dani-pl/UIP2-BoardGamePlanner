
import { StyleSheet, Text, View, Image, TouchableHighlight, Easing } from 'react-native';
import { useState } from 'react'
import React, { Component } from 'react';
import { globalStyles } from "../styles"
import { Animated } from 'react-native';
import Images from '../assets/Images';


export default class CoinFlip extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pressCount: 0,
      clicked: false,
      selected: require('../assets/head.png'),
      selectedText: 'Toss the coin',
      side: [
        require('../assets/head.png'),
        require('../assets/tails.png'),
      ]
    }
  };



  componentWillMount() {

    this.value = 0;
    this.animatedValue = new Animated.Value(0);

    // the current value of our animation
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })

    this.interpolate = this.animatedValue.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    })

  }


  decideSide = () => {

// pick between the two Images(heads or tails image) and save its value to the image variable
    const image = this.state.side[Math.floor(Math.random() *
      this.state.side.length)]

//if the image is heads then set the selected text to Heads, otherwise set text to Tails
    if (image == this.state.side[0]) {
      this.setState({
        'selected': image,
        'selectedText': "Heads",
      })
      this.flipCard()
    }
    else {
      this.setState({
        'selected': image,
        'selectedText': "Tails",
      })
      this.flipCard()
    }
  }

//this is the function that is animating the coin, 
//if the coin has already flipped 360 degrees, we flip it back to 0 and if it is at 0 we flip if 360 degrees.

  flipCard() {
    if (this.value > 90) {
      Animated.spring(this.animatedValue,
        {
          toValue: 0,
          friction: 4,
          tension: 6,
          delay: 100,
          easing: Easing.bounce,
          useNativeDriver: true
        }).start();
    } else {
      Animated.spring(this.animatedValue,
        {
          toValue: 360,
          friction: 4,
          tension: 6,
          delay: 100,
          easing: Easing.bounce,
          useNativeDriver: true
        }).start();
    };
  }

  render() {

    const animatedStyle = {
      transform: [
        { rotateX:  this.interpolate }
      ]
    }

    return (
      <View style={globalStyles.centered}>

        <>
          <Animated.Image style={[globalStyles.flipCard, globalStyles.flipCard, animatedStyle]}
            source={this.state.selected}></Animated.Image>

        </>
        <Text style={globalStyles.text}>{this.state.selectedText}</Text>
        <TouchableHighlight onPress={() => this.decideSide()}>

          <View style={globalStyles.btnPrimary}>
            <Text style={globalStyles.btnTextWhite}>Toss</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

}