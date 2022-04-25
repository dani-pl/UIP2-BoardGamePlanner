import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable} from 'react-native'
import React from 'react'
import { globalStyles } from '../styles'
import { FontAwesome } from '@expo/vector-icons';

export default function GameListItem(game) {
  return (
    <SafeAreaView style={globalStyles.container}>
        <View style={cardStyles.mainCardView}>
            <View style={cardStyles.subCardView}>
                <Image 
                    source={{uri:"https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__original/img/ZzyzlO15ggCfkLg9ckeM4PWNePI=/0x0/filters:format(jpeg)/pic3033330.jpg"}}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius:10}}
                    resizeMode="cover"
                />
                <Text 
                    style={[globalStyles.h6, cardStyles.textStyle]} 
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >Deception: Murder in Hong Kong</Text>
            </View>
            <Pressable style={globalStyles.btnIconSecondary} onPress={()=>console.log("pressed remove")}>
                <FontAwesome name="remove" />
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

const cardStyles = StyleSheet.create({
    mainCardView: {
        height: 85,
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: '#ffffff',
        shadowColor: "#F4F5F5",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        display: "flex",
        flexDirection: "row",
        justifyContent:'flex-start',
        alignItems: "center",
        
    },
    textStyle: {
        marginLeft: 20,
        width:'57%',
        flexShrink: 1,
    }

})
