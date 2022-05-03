import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const PlayerSelector = ({size, color, top, left, fill}) => {

    const RingSize = size + 30;

    const position = {
        top: top - RingSize / 2,
        left: left  - RingSize / 2
    };

    const ball = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        padding: 5
    };

    return (
        <AnimatedCircularProgress
            size={RingSize}
            width={size}
            fill={fill}
            tintColor={color}
            duration={100}
            style={[{position:'absolute'},position]}        
        >
            {() => (<View style={ball}/>)}
        </AnimatedCircularProgress>
    )



}

export default PlayerSelector;
