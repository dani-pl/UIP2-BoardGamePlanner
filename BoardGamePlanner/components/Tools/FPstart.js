import React from 'react';
import { View , Text} from 'react-native';
import { globalStyles, green20, green50 } from '../../styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FirstPlayerStartView = () => {

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.h4,{width:300, textAlign:'center'}]}>All players place and hold 1 finger on the screen</Text>
            <Text>(2 to 5 players)</Text>
            <View style={{
                display: "flex",
                backgroundColor: green20,
                borderRadius: 100 / 2,
                margin: 10
            }}>
                <MaterialCommunityIcons name="gesture-tap-hold" size={60} color={green50} style={{padding: 20, alignItems: 'center',
                justifyContent: 'center',}}/>
            </View>
        </View> 
    )
}

export default FirstPlayerStartView;
