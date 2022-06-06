/**
 * In this file we have defined several components that show up during the walkthrough
 * Parameters used:
 * - next => the next walkthrough page is started
 * - stop => walkthrough is stopped
 * - previous => go back to the previous walkthrough page
 */


import { View, Text, SafeAreaView, StyleSheet, Pressable , Dimensions} from 'react-native'
import React, { useTransition } from 'react'
import { backgroundColor, globalStyles, green50, neutral60, purple10 } from '../styles'
import { Feather , FontAwesome5} from '@expo/vector-icons'; 
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get("window");



export const WalkthroughStart = ({next, stop}) => {
    
    const {t} = useTranslation()

    return (
        <SafeAreaView 
        style={[
            walkStyles.fullScreenContainer,
            globalStyles.justifyAndAlignCenter]}
            >
            <View style={walkStyles.fullScreenContents}>
                <Text style={[globalStyles.h2,{color:"white"}]}>
                    {t('common:wtStartHead')}
                </Text>
                <Text style={[globalStyles.h4,{color:"white"}]}>
                    {t('common:wtStartBody')}
                </Text>
                <Pressable
                    onPress={next}
                    style={[globalStyles.btnPrimary, {marginVertical:20}]}
                >
                    <Text style={globalStyles.btnTextWhite}>{t('common:wtStartStartBtn')}</Text>
                </Pressable>
                <Pressable onPress={stop} >
                    <Text style={globalStyles.btnTextWhite}>{t('common:wtStartSkipBtn')}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
  )
}


export const WalkProfile1 = ({next, previous, step: {mask}}) => {
   
    const {t} = useTranslation()
    
    return (
        <SafeAreaView 
        style={[
            walkStyles.WalkProfileCon,
            globalStyles.justifyAndAlignCenter,
            ,{width:'95%'}]}
            >
            <View styles={[walkStyles.walkProfile1]}>
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
                <Text style={[globalStyles.h2, {color:backgroundColor}]}>{t('common:wtProfileAdd')}</Text>
                <Text style={[globalStyles.h5, {color:backgroundColor}]}> 
                    {t('common:wtProfileBody')}
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
    
    const {t} = useTranslation()

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
                <Text style={[globalStyles.h2, {color:backgroundColor}]}>{t('common:wtLanguage')}</Text>
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

    const {t} = useTranslation()

    return (
        <SafeAreaView 
        style={[
            walkStyles.walkTools,
            globalStyles.justifyAndAlignCenter, {width:"90%"}]}
            >
            <View styles={[walkStyles.walkProfile1]}>
                <Feather 
                    name="arrow-up" 
                    size={40} 
                    color={backgroundColor} 
                    style={{alignSelf:"center", marginTop: 20 }}
                />
                <Text style={[globalStyles.h5, {color:backgroundColor}]}>{t('common:wtTools')}</Text>
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
    
    const {t} = useTranslation()

    return (
        <SafeAreaView 
        style={[
            walkStyles.fullScreenContainer,
            globalStyles.justifyAndAlignCenter, {width:"90%"}]}
            >
            <View styles={[walkStyles.walkProfile1]}>
                <Text style={[globalStyles.h2, {color:backgroundColor}]}>{t('common:wtFinishHead')}</Text>
                <Pressable 
                    onPress={stop}
                    style={[globalStyles.btnPrimary,{marginTop:30}]}
                    >
                    <Text style={globalStyles.btnTextWhite}>{t('common:wtFinishBtn')}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}


// custom styles for the walkthrough
const walkStyles = StyleSheet.create({
    fullScreenContainer:{
        position:"absolute",
        alignSelf: "center", 
        bottom: height / 3,
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
    },
    walkTools:{
        position:"absolute",
        alignSelf: "center", 
        bottom: height / 4.5,
        width: "100%"
    }



})