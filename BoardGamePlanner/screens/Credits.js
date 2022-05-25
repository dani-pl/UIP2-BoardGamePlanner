import React from 'react'
import { Text, View} from 'react-native';
import {globalStyles } from "../styles";
import { useTranslation } from 'react-i18next';
import * as Linking from 'expo-linking'

const Credits = ({navigation}) => {
	// get the translation instance
    const { t } = useTranslation();

    /**
     * Handle user click on external link
     * @param {string} url 
     */
    const handleLinkPress = (url) => {
        // open link in web browser app
        Linking.openURL(url)
    }

    return (  
		<View style={globalStyles.container}>
            {/* ANIMATIONS */}
            <Text style={globalStyles.h5}>{t('common:animationLable')}</Text>
            <Text style={globalStyles.h6}>Rolling Dice Sprite Sheet</Text>
            <Text> Adapted from <Text 
                    style={globalStyles.link}
                    onPress={()=>handleLinkPress("http://riniblog.egloos.com/1078975")}
                >
                     "dice"
                </Text> by Rini 

            </Text>

            <View style={globalStyles.spacing} />

            {/* SOUNDS */}
			<Text style={globalStyles.h5}>{t('common:soundLabel')}</Text>
            <Text style={globalStyles.h6}>Rolling Dice</Text>
            <Text> 
                <Text 
                    style={globalStyles.link}
                    onPress={()=>handleLinkPress("https://freesound.org/people/dermotte/sounds/220744/")}
                >
                    "dice_06"
                </Text> by Dermotte licensed under <Text 
                    style={globalStyles.link}
                    onPress={()=>handleLinkPress("https://creativecommons.org/licenses/by/3.0/")}
                >
                    CC BY 3.0
                </Text>
            </Text>

            <View style={globalStyles.spacing} />
            
            <Text style={globalStyles.h6}>Win</Text>
            <Text> 
                <Text 
                    style={globalStyles.link}
                    onPress={()=>handleLinkPress("https://freesound.org/people/rhodesmas/sounds/322897/")}
                >
                    "Connected 01"
                </Text> by Rhodesmas licensed under <Text 
                    style={globalStyles.link}
                    onPress={()=>handleLinkPress("https://creativecommons.org/licenses/by/3.0/")}
                >
                    CC BY 3.0
                </Text>
            </Text>
            
            <View style={globalStyles.spacing} />
            
            <Text style={globalStyles.h6}>Woosh</Text>
            <Text> 
                <Text 
                    style={globalStyles.link}
                    onPress={()=>handleLinkPress("https://freesound.org/people/deleted_user_6479820/sounds/393813/")}
                >
                    "Swish Single 2"
                </Text> by Pinball_Wiz licensed under <Text 
                    style={globalStyles.link}
                    onPress={()=>handleLinkPress("https://creativecommons.org/publicdomain/zero/1.0/")}
                >
                    CC0 1.0 
                </Text>
            </Text>
            
            <View style={globalStyles.spacing} />
            
            <Text style={globalStyles.h6}>New Player</Text>
            <Text> 
                <Text 
                    style={globalStyles.link}
                    onPress={()=>handleLinkPress("https://soundbible.com/2067-Blop.html")}
                >
                    "Blop"
                </Text> by Mark DiAngelo licensed under <Text 
                    style={globalStyles.link}
                    onPress={()=>handleLinkPress("https://creativecommons.org/licenses/by/3.0/")}
                >
                    CC BY 3.0
                </Text>
            </Text>

        </View>

    )
}

export default Credits;
