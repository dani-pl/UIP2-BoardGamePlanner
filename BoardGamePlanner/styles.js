import React from 'react'
import { StyleSheet } from 'react-native';


var green70 = '#077064';
var green60 = '#118C7E';
var green50 = '#1EA596';
var green40 = '#25B4A4';
var green30 = '#6ECEC3';
var green20 = '#AFE4DE';
var green10 = '#E8F7F6';
var primary = green50;

var purple70 = '#0E0770';
var purple60 = '#2F25B4';
var purple50 = '#4A3FDD';
var purple40 = '#6359E8';
var purple30 = '#7069D3';
var purple20 = '#B0ACE7';
var purple10 = '#E8E7F8';
var secondary = purple50;

var neutral70 = '#11201F';
var neutral60 = '#2F3C3B';
var neutral50 = '#5A6867';
var neutral40 = '#869392';
var neutral30 = '#C7CCCC';
var neutral20 = '#E7E9E9';
var neutral10 = '#F4F5F5';

var backgroundColor = '#FCFDFC';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: backgroundColor,
       alignItems: 'center',
       justifyContent: 'center',
    },
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
        fontSize: 16,
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
        backgroundColor: neutral30,
        borderRadius: 10,
        paddingRight:8,
        paddingLeft:8,     
    },
    btnSecondary: {
      backgroundColor: neutral10,
      color: neutral60,
      borderRadius: 10,
      paddingRight:8,
      paddingLeft:8,
  },
    btnIconPrimary:{
      fontSize:16,
      padding:16,
      textAlign: "center",
      color:"white",
      margin: 10,
      backgroundColor:primary,
      borderRadius:10
    },
    iconStylePrimary:{
      color:"white"
    },
    btnIconSecondary:{
      fontSize:16,
      padding:16,
      textAlign: "center",
      margin: 10,
      backgroundColor:neutral10,
      borderRadius:10,
      color:purple10
    },
    iconStyleSecondary:{
      color:neutral60
    },
  });