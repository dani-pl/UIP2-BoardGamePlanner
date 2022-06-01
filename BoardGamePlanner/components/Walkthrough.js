import { View, Text, SafeAreaView, StyleSheet, Pressable , Dimensions} from 'react-native'
import React from 'react'
import { backgroundColor, globalStyles, green50, neutral60, purple10 } from '../styles'
import { Feather , FontAwesome5} from '@expo/vector-icons'; 

const { width, height } = Dimensions.get("window");
import { useNavigation } from '@react-navigation/native';

// import {WalkthroughCallout} from "react-native-interactive-walkthrough"

export const WalkthroughStart = ({next, stop}) => {
    // get navigation instance
    // const navigation = useNavigation()
    
    return (
        <SafeAreaView 
        style={[
            walkStyles.fullScreenContainer,
            globalStyles.justifyAndAlignCenter]}
            >
            <View style={walkStyles.fullScreenContents}>
                <Text style={[globalStyles.h2,{color:"white"}]}>
                     Welcome to BoardGamePlanner!
                </Text>
                <Text style={[globalStyles.h4,{color:"white"}]}>
                    Let's take a quick tour
                </Text>
                <Pressable
                    onPress={next}
                    // onPressIn={() => navigation.navigate("Profile_")}
                    style={[globalStyles.btnPrimary, {marginVertical:20}]}
                >
                    <Text style={globalStyles.btnTextWhite}>Start</Text>
                </Pressable>
                <Pressable
                    onPress={stop}
                >
                    <Text style={globalStyles.btnTextWhite}>Skip</Text>
                </Pressable>
            </View>
        </SafeAreaView>
  )
}


export const WalkProfile1 = ({next, previous, step: {mask}}) => {
    return (
        <SafeAreaView 
        style={[
            walkStyles.WalkProfileCon,
            globalStyles.justifyAndAlignCenter]}
            >
            <View styles={walkStyles.walkProfile1}>
                <View style={walkStyles.buttonsContainer}>
                    <Pressable 
                        style={walkStyles.btnNext}
                        onPress={next}    
                    >
                            <FontAwesome5 name="chevron-right" size={24} color={neutral60}/>
                    </Pressable >
                    <Pressable 
                        style={walkStyles.btnNext}
                        onPress={previous}
                    >
                        <FontAwesome5 name="chevron-left" size={24} color={neutral60}/>
                    </Pressable>
                </View>
                <Text style={[globalStyles.h2, {color:backgroundColor}]}>Add Games</Text>
                <Text style={[globalStyles.h5, {color:backgroundColor}]}> 
                    Use to add games to your library
                </Text>
                <Feather 
                    name="arrow-down" 
                    size={40} 
                    color={backgroundColor} 
                    style={{alignSelf:"center", marginTop: 20 }}
                />
            </View>
        </SafeAreaView>
)}

export const WalkLanguage = ({next, previous, step: {mask}}) => {
    return (
        <SafeAreaView 
        style={[
            walkStyles.WalkLanguageCon,
            globalStyles.justifyAndAlignCenter]}
            >
            <View styles={walkStyles.walkProfile1}>
                <Feather 
                    name="arrow-up" 
                    size={40} 
                    color={backgroundColor} 
                    style={{alignSelf:"center", marginTop: 20 }}
                />
                <Text style={[globalStyles.h2, {color:backgroundColor}]}>Change Language</Text>
                <View style={walkStyles.buttonsContainer}>
                    <Pressable 
                        style={walkStyles.btnNext}
                        onPress={next}    
                    >
                            <FontAwesome5 name="chevron-right" size={24} color={neutral60}/>
                    </Pressable >
                    <Pressable 
                        style={walkStyles.btnNext}
                        onPress={previous}
                    >
                        <FontAwesome5 name="chevron-left" size={24} color={neutral60}/>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
)}


export const WalkTools = ({next, previous, step: {mask}}) => {
    return (
        <SafeAreaView 
        style={[
            walkStyles.WalkLanguageCon,
            globalStyles.justifyAndAlignCenter, {width:"90%"}]}
            >
            <View styles={[walkStyles.walkProfile1]}>
                <Text style={[globalStyles.h5, {color:backgroundColor}]}>Try out one of the handy board game tools!</Text>
                <View style={walkStyles.buttonsContainer}>
                    <Pressable 
                        style={walkStyles.btnNext}
                        onPress={next}    
                    >
                            <FontAwesome5 name="chevron-right" size={24} color={neutral60}/>
                    </Pressable >
                    <Pressable 
                        style={walkStyles.btnNext}
                        onPress={previous}
                    >
                        <FontAwesome5 name="chevron-left" size={24} color={neutral60}/>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
export const WalkFinish = ({next, previous, stop, step: {mask}}) => {
    return (
        <SafeAreaView 
        style={[
            walkStyles.fullScreenContainer,
            globalStyles.justifyAndAlignCenter, {width:"90%"}]}
            >
            <View styles={[walkStyles.walkProfile1]}>
                    {/* <View style={walkStyles.buttonsContainer}>
                        <Pressable 
                            style={walkStyles.btnNext}
                            onPress={previous}
                        >
                            <FontAwesome5 name="chevron-left" size={24} color={neutral60}/>
                        </Pressable>
                    </View> */}
                <Text style={[globalStyles.h2, {color:backgroundColor}]}>You are all set!</Text>
                <Pressable 
                    onPress={stop}
                    style={[globalStyles.btnPrimary,{marginTop:30}]}
                    >
                    <Text style={globalStyles.btnTextWhite}>Start looking for events</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}



const walkStyles = StyleSheet.create({
    fullScreenContainer:{
        position:"absolute",
        alignSelf: "center", 
        bottom: height / 2.4,
        width: "100%"
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row-reverse",

    },
    btnNext: {
        backgroundColor: backgroundColor,
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    walkProfile1: {
        backgroundColor: green50,
        // marginVertical: 20,
        // marginHorizontal: 30
    },
    
    WalkProfileCon: {
        position:"absolute",
        alignSelf: "center", 
        bottom: height / 4,
        width: "100%"
    },
    WalkLanguageCon: {
        position:"absolute",
        alignSelf: "center", 
        bottom: height / 2,
        width: "100%"
    }


})