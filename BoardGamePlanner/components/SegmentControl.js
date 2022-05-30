/**
 * Component for switching between segments 
 * Adapted from Karthik B post on Medium:
 * https://medium.com/timeless/react-native-segmented-control-92508dcba97c
 */

import React, {useEffect, useState, useCallback} from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles, segmentStyles, green50, neutral60, green60, backgroundColor} from '../styles';


  
  // So that it stretches in landscape mode.
  const width = Dimensions.get('screen').width - 32;
  
  const SegmentControl = (props) => {
    // we translate depending on the number of tabs we define 
    const translateValue = width / props.tabs.length;
    // here we define the animated tab translate value
    const [tabTranslate, setTabTranslate] = useState(new Animated.Value(0));
  
    // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
    const memoizedTabPressCallback = useCallback(
      (index) => {
        props.onChange(index);
      },[]);

    // the use effect activates depending on the change of the current index
    useEffect(() => {
      // Animating the active index based current index
      // we use animated spring to get a more natural feeling: spring is based on physics and real world movements   
      Animated.spring(tabTranslate, {
        // to underline the selected tab we multiply the tab index with the translate value
        toValue: props.currentIndex * translateValue,
        // overshoot and speed 
        stiffness: 180,
        // energy loss 
        damping: 20,
        // momentum of animation, is like how heavy the object is, so the higher the slower the movement
        mass: 1.2,
        useNativeDriver: true
      }).start()
    }, [props.currentIndex])
  

    return (
      <Animated.View style={[
        segmentStyles.SegmentControlWrapper,
        {paddingVertical: props.paddingVertical}
      ]}>
        {/* position the animated line under text */}
        <Animated.View
          style={[{
            ...StyleSheet.absoluteFill,
            position: "absolute",
            width: (width - 4) / props.tabs?.length,
            margin:2,
            // we only want a line that moves between the tabs
            borderBottomColor: green50,
            borderBottomWidth: 2,
            transform: [
             // here we pass the animated value
              {translateX: tabTranslate}
        ]}]}>
        </Animated.View>
        {
          props.tabs.map((tab, index) => {
            // check if the tab is the selected tab
            const isCurrentIndex = props.currentIndex === index;
            return (
              <TouchableOpacity
                key={index}
                style={[segmentStyles.textWrapper]}
                onPress={() => memoizedTabPressCallback(index)}
                activeOpacity={1} >
                <Text 
                    // crop tab text that is too long
                    numberOfLines={1} 
                    style={[globalStyles.btnTextNeutral, { color: props.textColor }, isCurrentIndex && { color: props.activeTextColor }]}
                >
                        {tab}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </Animated.View >
    )
  }
  


//   Define the properties of the SegmentControl Component
  SegmentControl.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    currentIndex: PropTypes.number.isRequired,
    SegmentControlBackgroundColor: PropTypes.string,
    activeSegmentBackgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    paddingVertical: PropTypes.number
  }
  
//   here we define the default properties of the SegmentControl Component
  SegmentControl.defaultProps = {
    tabs: [],
    onChange: () => { },
    currentIndex: 0,
    SegmentControlBackgroundColor: backgroundColor, // We add our default background color
    activeSegmentBackgroundColor: backgroundColor, // we don't need other color
    textColor: neutral60, // we take our defined text color
    activeTextColor: green60, // we take our own primary color
    // paddingVertical: 12
  }
  
  export default SegmentControl;