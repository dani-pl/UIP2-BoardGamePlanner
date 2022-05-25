import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import Svg, {Polygon, Rect, Path} from 'react-native-svg'
import { green50, purple30, globalStyles, backgroundColor } from '../../styles';

// 4 DICE
/**
 * @param {string} color dice color
 * @returns shape 4-sided-dice
 */
export const Dice4Shape = ({color}) => {
    return (
        <Svg width="120" height="120" viewBox="-15 -15 140 140" fill="none">
            <Polygon 
                fill={color}
                stroke={color}
                strokeWidth='10'
                strokeLinejoin='round' 
                points="55,0 0,110 110,110"
            />
        </Svg>
    )
}

/**
 * Returns the 4-sided-dice with number
 * @param {int} number the side of the dice
 * @param {string} color dice color
 */
export const Dice4 = ({number, color}) => {
    
    // make sure that we have max 4 and min 1
    const side = number <= 4 ? number < 1 ? 1 : number : 4;

    return (
        <View style={{
            marginTop: 20, 
            marginBottom: 20, 
            marginLeft:10, 
            marginRight:10,
            alignSelf: 'center'
        }}>
            <View style={globalStyles.justifyAndAlignCenter}>
                <Dice4Shape color={color}/>
                <Text style={[globalStyles.h1, {position:'absolute', color:backgroundColor}]}>
                    {side}
                </Text>
            </View>
        </View>
    )
}


// 6 DICE
/**
 * @param {string} color dice color
 * @returns shape 6-sided-dice
 */
export const Dice6Shape = ({color}) => {
    return (
        <Svg width="120" height="120" viewBox="-15 -15 140 140" fill="none">
            <Rect 
                x='0'
                y='0'
                fill={color}
                stroke={color}
                strokeWidth='10'
                width="110"
                height="110"
                strokeLinejoin='round'
            />
        </Svg>
    )
}

/**
 * Returns the 6-sided-dice with number
 * @param {int} number the side of the dice
 * @param {string} color dice color
 */
 export const Dice6 = ({number, color}) => {
    
    // make sure that we have max 6 and min 1
    const side = number <= 6 ? number < 1 ? 1 : number : 6;

    return (
        <View style={{
            marginTop: 20, 
            marginBottom: 20, 
            marginLeft:10, 
            marginRight:10,
            alignSelf: 'center'
        }}>
            <View style={globalStyles.justifyAndAlignCenter}>
                <Dice6Shape color={color}/>
                <Text style={[globalStyles.h1, {position:'absolute', color:backgroundColor}]}>
                    {side}
                </Text>
            </View>
        </View>
    )
}

// 8 DICE
/**
 * @param {string} color dice color
 * @returns shape 8-sided-dice
 */
export const Dice8Shape = ({color}) => {
    return (
        <Svg width="120" height="120" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1.45535 71.9954C-0.462785 70.057 -0.473999 66.9392 1.43014 64.9871L63.255 1.60552C65.1931 -0.381466 68.3789 -0.409417 70.3516 1.54326L134.384 64.9244C136.371 66.891 136.359 70.1045 134.358 72.0567L70.3255 134.533C68.3589 136.452 65.2124 136.424 63.2797 134.471L1.45535 71.9954Z" fill={color}/>
        </Svg>
    )
}

/**
 * Returns the 8-sided-dice with number
 * @param {int} number the side of the dice
 * @param {string} color dice color
 */
 export const Dice8 = ({number, color}) => {
    
    // make sure that we have max 8 and min 1
    const side = number <= 8 ? number < 1 ? 1 : number : 8;

    return (
        <View style={{
            marginTop: 20, 
            marginBottom: 20, 
            marginLeft:10, 
            marginRight:10,
            alignSelf: 'center'
        }}>
            <View style={globalStyles.justifyAndAlignCenter}>
                <Dice8Shape color={color} />
                <Text style={[globalStyles.h1, {position:'absolute', color:backgroundColor}]}>
                    {side}
                </Text>
            </View>
        </View>
    )
}

// 10 DICE
/**
 * @param {string} color dice color
 * @returns shape 10-sided-dice
 */
export const Dice10Shape = ({color}) => {
    return (
        <Svg width="120" height="120" viewBox="0 0 140 138"  fill="none">
            <Path d="M0 56.1073C0 54.5833 0.694999 53.1426 1.88772 52.194L65.7137 1.43228C67.5107 0.00309764 70.0501 -0.0185177 71.8712 1.37987L138.045 52.1943C139.278 53.1406 140 54.6061 140 56.16V86.7797C140 88.3776 139.236 89.8792 137.945 90.8204L74.711 136.909C72.9929 138.161 70.6708 138.19 68.9222 136.981L2.15625 90.8136C0.805919 89.8799 0 88.3428 0 86.701V56.1073Z" fill={color}/>
        </Svg>
    )
}

/**
 * Returns the 10-sided-dice with number
 * @param {int} number the side of the dice
 * @param {string} color dice color
 */
 export const Dice10 = ({number, color}) => {
    
    // make sure that we have max 10 and min 1
    const side = number <= 10 ? number < 1 ? 1 : number : 10;

    return (
        <View style={{
            marginTop: 20, 
            marginBottom: 20, 
            marginLeft:10, 
            marginRight:10,
            alignSelf: 'center'
        }}>
            <View style={globalStyles.justifyAndAlignCenter}>
                <Dice10Shape color={color} />
                <Text style={[globalStyles.h1, {position:'absolute', color:backgroundColor}]}>
                    {side}
                </Text>
            </View>
        </View>
    )
}


// 12 DICE
/**
 * @param {string} color dice color
 * @returns shape 12-sided-dice
 */
export const Dice12Shape = ({color}) => {
    return (
        <Svg width="120" height="120" viewBox="0 0 140 140" fill="none">
            <Path d="M19.2472 23.8067C19.7312 22.6452 20.6354 21.7088 21.7793 21.1845L65.9974 0.917871C67.2733 0.333079 68.7362 0.311483 70.0288 0.858358L118.119 21.204C119.324 21.7142 120.282 22.6771 120.786 23.8858L139.23 68.1513C139.724 69.3379 139.743 70.6694 139.281 71.8693L120.827 119.849C120.302 121.214 119.206 122.281 117.827 122.768L72.1501 138.917C71.0818 139.294 69.9169 139.298 68.8463 138.927L22.1955 122.761C20.8033 122.278 19.6948 121.206 19.1659 119.831L0.71895 71.8693C0.257472 70.6694 0.275859 69.3379 0.770293 68.1513L19.2472 23.8067Z" fill={color} strokeLinejoin='round'/>
        </Svg>


    )
}

/**
 * Returns the 12-sided-dice with number
 * @param {int} number the side of the dice
 * @param {string} color dice color
 */
 export const Dice12 = ({number, color}) => {
    
    // make sure that we have max 10 and min 1
    const side = number <= 12 ? number < 1 ? 1 : number : 12;

    return (
        <View style={{
            marginTop: 20, 
            marginBottom: 20, 
            marginLeft:10, 
            marginRight:10,
            alignSelf: 'center'
        }}>
            <View style={globalStyles.justifyAndAlignCenter}>
                <Dice12Shape color={color}/>
                <Text style={[globalStyles.h1, {position:'absolute', color:backgroundColor}]}>
                    {side}
                </Text>
            </View>
        </View>
    )
}




// 20 DICE
/**
 * @param {string} color dice color
 * @returns shape 20-sided-dice
 */
export const Dice20Shape = ({color}) => {
    return (
        <Svg width="120" height="120" viewBox="0 0 140 139" fill="none">
            <Path d="M0 41.4311C0 39.6211 0.97821 37.9524 2.55758 37.0682L66.3718 1.34365C67.8663 0.507006 69.685 0.493531 71.1917 1.30794L137.378 37.0825C138.993 37.9558 140 39.6445 140 41.4811V98.4818C140 100.338 138.972 102.041 137.329 102.906L71.1427 137.752C69.6618 138.532 67.889 138.519 66.4197 137.717L2.60633 102.921C0.999695 102.045 0 100.361 0 98.5314V41.4311Z" fill={color} />
        </Svg>
    )
}

/**
 * Returns the 20-sided-dice with number
 * @param {int} number the side of the dice
 * @param {string} color dice color
 */
 export const Dice20 = ({number, color}) => {
    
    // make sure that we have max 10 and min 1
    const side = number <= 20 ? number < 1 ? 1 : number : 20;

    return (
        <View style={{
            marginTop: 20, 
            marginBottom: 20, 
            marginLeft:10, 
            marginRight:10,
            alignSelf: 'center'
        }}>
            <View style={globalStyles.justifyAndAlignCenter}>
                <Dice20Shape color={color} />
                <Text style={[globalStyles.h1, {position:'absolute', color:backgroundColor}]}>
                    {side}
                </Text>
            </View>
        </View>
    )
}


