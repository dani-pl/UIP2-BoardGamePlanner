import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function CardEvent() {
  return (
    <View style={styles.CardEvent}>
      <View style={styles.Frame33661}>
        <View style={styles.Group33684}>
          <Text style={styles.Txt561}>1st May- Sat -2:00 PM</Text>
          <View style={styles.Group33660}>
            <Image style={styles.Txt677} source={require("../assets/person.png")} ></Image>
            <View style={styles.Group18131}>
              <Text style={styles.Txt757}>2 Open</Text>
            </View>
          </View>
          <View style={styles.Group33659}>
            <View style={styles.Group33683}>
              <Image style={styles.Txt5109} source={require("../assets/home.png")}></Image>
              <View style={styles.Group18130}>
                <Text style={styles.Txt1109}>Balkan 7-9, Sofia</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Frame33685}>
        <View style={styles.Pill}>
          <Text style={styles.Txt516}>HOST</Text>
        </View>
        <View style={styles.Group33662}>
          <View style={styles.Rectangle4234} />
          <View style={styles.Rectangle4235} />
          <View style={styles.Rectangle4236} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  CardEvent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 16,
    backgroundColor: "rgb(255, 255, 255)",
    shadowColor: "rgb(134,147,146)",
    elevation: 2,
    shadowOffset: { width: 0, height: 4 },
    width: 373.91,
    height: 98,
    position:"absolute", left: 5, width:350, bottom:10
  },
  Frame33661: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 24,
  },
  Group33684: {
    display: "flex",
    flexDirection: "column",
  },
  Txt561: {
    fontSize: 12.64,
    fontFamily: "Montserrat-Semibold",
    fontWeight: "500",
    lineHeight: 20,
    color: "rgb(74,63,221)",
    width: 162,
    height: 21,
    marginBottom: 5,
    textTransform: "uppercase",
  },
  Group33660: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 4,
  },
  Txt677: {
    fontSize: 16,
    fontFamily: "Montserrat-Semibold",
    fontWeight: "300",
    color: "rgb(47,60,59)",
    textAlign: "center",
    justifyContent: "center",
    width: 17,
    height: 17,
    marginRight: 7,
  },
  Group18131: {
    width: 68,
    height: 24,
  },
  Txt757: {
    fontSize: 16,
    fontFamily: "Montserrat-Semibold",
    fontWeight: "600",
    lineHeight: 24,
    color: "rgb(47,60,59)",
    width: 69,
  },

  Group33659: {
    width: 225.6,
    height: 20,
  },
  Group33683: {
    display: "flex",
    flexDirection: "row",
  },
  Txt5109: {
    fontSize: 16,
    fontFamily: "Montserrat-Semibold",
    fontWeight: "300",
    color: "rgba(90,104,103,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 17,
    height: 21,
    marginRight: 7,
  },
  Group18130: {
    width: 201.54,
    height: 20,
  },
  Txt1109: {
    fontSize: 14,
    fontFamily: "Montserrat-Semibold",
    fontWeight: "400",
    lineHeight: 20,
    color: "rgb(90,104,103)",
    width: 203,
  },

  Frame33685: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  Pill: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7,
    paddingRight: 7,
    marginBottom: 9,
    borderRadius: 4,
    backgroundColor: "rgb(232,231,248)",
    width: 56,
    height: 20,
  },
  Txt516: {
    fontSize: 12.64,
    fontFamily: "Montserrat-Semibold",
    fontWeight: "500",
    lineHeight: 20,
    color: "rgb(74,63,221)",
  },

  Group33662: {
    position: "relative",
    width: 92.31,
    height: 38,
  },
  Rectangle4234: {
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "58.5%",
    right: "0.22%",
    backgroundColor: "rgb(231,233,233)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(255,255,255)",
    width: 38.1,
    height: 38,
    borderRadius: 20,
  },
  Rectangle4235: {
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "29.25%",
    right: "29.47%",
    backgroundColor: "rgb(231,233,233)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(255,255,255)",
    width: 38.1,
    height: 38,
    borderRadius: 20,
  },
  Rectangle4236: {
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "58.72%",
    backgroundColor: "rgb(231,233,233)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(255,255,255)",
    width: 38.1,
    height: 38,
    borderRadius: 20,
  },
})