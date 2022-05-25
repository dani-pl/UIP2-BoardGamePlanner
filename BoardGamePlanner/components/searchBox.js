import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function SearchBox() {
  return (
    <View style={styles.Group33673}>
      <Text style={styles.Txt337}>search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Group33673: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 207,
    borderRadius: 12,
    backgroundColor: "rgba(37,180,164,1)",
    width: 246,
    height: 42,
  },
  Txt337: {
    fontSize: 16,
    fontFamily: "Font Awesome 5 Pro, sans-serif",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 27,
    height: 36,
  },
})