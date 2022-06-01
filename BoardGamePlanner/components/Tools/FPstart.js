import React from 'react';
import { View , Text} from 'react-native';
import { globalStyles, green20, green50 } from '../../styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTranslation } from 'react-i18next';

/**
 * Returns the first player start view to be used when nobody is playing
 * @returns {JSX} component
 */
const FirstPlayerStartView = () => {

     // get the translation instance
     const { t } = useTranslation();

    return (
        <View style={[globalStyles.container, globalStyles.justifyAndAlignCenter]}>
            <Text style={[globalStyles.h4,{width:300, textAlign:'center'}]}>{t('tools:FPinstruction')}</Text>
            <Text>{t('tools:playerMax')}</Text>
            <View style={{
                display: "flex",
                backgroundColor: green20,
                width: 100,
                height: 100,
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
