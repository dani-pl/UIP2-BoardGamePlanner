import React from 'react'
import { StyleSheet } from 'react-native';


export var green70 = '#077064';
export var green60 = '#118C7E';
export var green50 = '#1EA596';
export var green40 = '#25B4A4';
export var green30 = '#6ECEC3';
export var green20 = '#AFE4DE';
export var green10 = '#E8F7F6';
export var primary = green50;

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

export const backgroundColor = '#FCFDFC';
export const firstPlayerColors = ['#25B4A4','#ffb100','#F194B4','#DC3030','#6359E8']

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
    btnText: {
        fontSize: 16,
        textAlign: "center",
        margin: 10,
        fontFamily: "Montserrat-Regular",
        color: '#fff'
    },
    btnPrimary: {
        backgroundColor: primary,
        borderRadius: 10,
        paddingRight:8,
        paddingLeft:8,
    },
    btnIconPrimary:{
      fontSize:16,
      padding:16,
      textAlign: "center",
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