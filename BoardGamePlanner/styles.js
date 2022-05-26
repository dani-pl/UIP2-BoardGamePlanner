import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export var green70 = '#077064';
export var green60 = '#118C7E';
export var green50 = '#1EA596';
export var green40 = '#25B4A4';
export var green30 = '#6ECEC3';
export var green20 = '#AFE4DE';
export var green10 = '#E8F7F6';
export const primary = green50;
export const unselected = green40;

export var purple70 = '#0E0770';
export var purple60 = '#2F25B4';
export var purple50 = '#4A3FDD';
export var purple40 = '#6359E8';
export var purple30 = '#7069D3';
export var purple20 = '#B0ACE7';
export var purple10 = '#E8E7F8';
export var secondary = purple50;

export var neutral70 = '#11201F';
export var neutral60 = '#2F3C3B';
export var neutral50 = '#5A6867';
export var neutral40 = '#869392';
export var neutral30 = '#C7CCCC';
export var neutral20 = '#E7E9E9';
export var neutral10 = '#F4F5F5';
export const selected=neutral10;

export const backgroundColor = '#FCFDFC';
export const firstPlayerColors = ['#25B4A4','#ffb100','#F194B4','#DC3030','#6359E8']

const { width, height } = Dimensions.get("window");
    const CARD_HEIGHT = height / 4;
    const CARD_WIDTH = CARD_HEIGHT - 50;

export const globalStyles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: backgroundColor,
      //  justifyContent: 'center',
       paddingTop:20,
       paddingLeft:20,
       paddingRight:20,
    },
    centered:{
    justifyContent:'center',
    alignItems: 'center',
    marginTop:40,
    alignItems: 'center',
    }
,
    h1: {
      fontSize: 32,
      lineHeight:40,
      margin: 4,
      fontFamily: "Montserrat-Semibold",
      color: neutral70
    },
    h2: {
        fontSize: 28,
        lineHeight:36,
        margin: 4,
        fontFamily: "Montserrat-Semibold",
        color: neutral70
      },
      h3: {
        fontSize: 24,
        lineHeight:32,
        margin: 4,
        fontFamily: "Montserrat-Semibold",
        color: neutral70
      },
      h4: {
        fontSize: 20,
        lineHeight:28,
        margin: 4,
        fontFamily: "Montserrat-Semibold",
        color: neutral70
      },
      h5: {
        fontSize: 18,
        lineHeight:24,
        margin: 4,
        fontFamily: "Montserrat-Semibold",
        color: neutral70
      },
      h6: {
        fontSize: 14,
        lineHeight:24,
        margin: 4,
        fontFamily: "Montserrat-Semibold",
        color: neutral70
      },
      subtitle1: {
        fontSize: 16,
        lineHeight:24,
        margin: 4,
        fontFamily: "Montserrat-Regular",
        color: neutral50
      },
      subtitle2: {
        fontSize: 14,
        lineHeight:20,
        margin: 4,
        fontFamily: "Montserrat-Regular",
        color: neutral50
      },
      subtitle3: {
        fontSize: 12,
        lineHeight:20,
        margin: 4,
        fontFamily: "Montserrat-Regular",
        color: neutral50
      },
      allCaps: {
        fontSize: 12,
        lineHeight:20,
        margin: 4,
        textTransform:"uppercase",
        fontFamily: "Montserrat-Regular",
        color: secondary
      },
    btnTextWhite: {
        fontSize: 16,
        textAlign: "center",
        padding: 10,
        fontFamily: "Montserrat-Semibold",
        color: '#fff',
    },
    btnTextNeutral: {
      fontSize: 16,
      textAlign: "center",
      padding: 10,
      fontFamily: "Montserrat-Semibold",
      color: neutral60,
  },
    btnPrimary: {
        backgroundColor: primary,
        borderRadius: 10,
        paddingRight:12,
        paddingLeft:12,
        paddingTop:2,
        paddingBottom:2,
        margin:8,
    },
    btnSecondary: {
      backgroundColor: neutral10,
      color: neutral60,
      borderRadius: 10,
      paddingRight:12,
      paddingLeft:12,
      paddingTop:2,
      paddingBottom:2,
      margin:8,
  },
  btnSecondarySelected: {
    backgroundColor: purple20,
    color: "white",
    borderRadius: 10,
    paddingRight:12,
    paddingLeft:12,
    paddingTop:2,
    paddingBottom:2,
    alignSelf:"flex-start",
    margin:8,
},
    btnIconPrimary:{
      fontSize:16,
      padding:16,
      textAlign: "center",
      color:"white",
      margin: 10,
      alignSelf:"flex-start",
      backgroundColor:primary,
      borderRadius:10,
      margin:8,
    },
    iconStylePrimary:{
      color:"white"
    },
    btnIconSecondary:{
      fontSize:16,
      padding:16,
      textAlign: "center",
      backgroundColor:neutral10,
      borderRadius:10,
      margin:8,
    },
    
    iconStyleSecondary:{
      color:neutral60
    },
    mainCardView: {
      height: 80,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 16,
      backgroundColor: '#ffffff',
      shadowColor: "#F4F5F5",
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 8,
      paddingTop: 8,
      paddingBottom: 8,
      paddingRight: 16,
      paddingLeft: 16,
      marginTop: 6,
      marginBottom: 6,
      // marginLeft: 16,
      // marginRight: 16,
  },
  subCardView: {
      display: "flex",
      flexDirection: "row",
      justifyContent:'flex-start',
      alignItems: "center",
      
  },
  flexRow:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexColumn:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight:4,
    paddingLeft:4,

  },
  flexRowEnd:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  avatar:{
    width:62,
    height:62,
    borderRadius:100,
  },
  textStyle: {
      marginLeft: 20,
      width:'57%',
      flexShrink: 1,
  },
  input: {
    height: 54,
    backgroundColor:neutral10,
    padding: 12,
    borderRadius:12,
    marginTop:4,
    marginBottom:4,
  },
  spacing:{
    height:24
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  alignCenter: {
    alignItems: 'center'
  },
  justifyAndAlignCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    color:"#2080B8", 
    textDecorationLine:"underline"
  },
  mapContainer: {

    paddingTop:0,
    paddingRight:0, 
    paddingLeft:0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  map: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  searchBox: {
    position: "absolute",
    width: 246,
    height: 42,
    left: 20,
    top: 54,
    backgroundColor: green40,
    borderRadius: 12,
  },
  shadowOffset:{
      shadowColor: "#F4F5F5",
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 8,
  }
});


export const eventCardStyles = StyleSheet.create({
  CardEvent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 16,
    backgroundColor: backgroundColor,
    shadowColor: neutral40,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 2,
    marginBottom:30,
    width: '90%',
    position:"relative", 
  },
  CardEventLeftCon: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  CardEventGroup: {
    display: "flex",
    flexDirection: "column",
  },
  LeftDetails: { 
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: 'stretch',
  },
  EventOwnerLocation: {
    flexDirection: "column",
	justifyContent: "space-evenly",
	alignItems:"flex-start",
  },
  EventOwnerLocationIcon: {
	flexDirection: "column",
	justifyContent: "space-evenly",
	alignItems: "center",
  },
  DetailsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
	alignSelf:"stretch",
  },
  Pill: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 9,
    borderRadius: 4,
    backgroundColor: purple10,
  },
  gamesPrevCon: {
    position: "relative",
    width: 92.31,
    height: 38,
  },
  LastGameImgBubble: {
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "58.5%",
    right: "0.22%",
    backgroundColor: neutral20,
    borderWidth: 1,
    borderColor: "white",
    width: 38.1,
    height: 38,
    borderRadius: 20,
  },
  MiddleGameImgBubble: {
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "29.25%",
    right: "29.47%",
    backgroundColor: "rgb(231,233,233)",
    borderWidth: 1,
    borderColor: "rgb(255,255,255)",
    width: 38.1,
    height: 38,
    borderRadius: 20,
  },
  FirstGameImgBubble: {
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "58.72%",
    backgroundColor: "rgb(231,233,233)",
    borderWidth: 1,
    borderColor: "rgb(255,255,255)",
    width: 38.1,
    height: 38,
    borderRadius: 20,
  },
})
