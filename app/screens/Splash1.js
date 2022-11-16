import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Splash1 = ({navigation}) => {

  return (
    <View style={styles.splashView}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.frameView}>
        <Text style={styles.findOutAndBookYourNearest}>
          <Text style={styles.findOutAndBook}>
            <Text style={styles.findOutAnd}>{`Find out and book `}</Text>
          </Text>
          <Text style={styles.yourNearestBarber}>
            <Text style={styles.yourNearestText}>your nearest</Text>
            <Text style={styles.text}>{` `}</Text>
            <Text style={styles.barberText}>barber</Text>
          </Text>
        </Text>
        <Text
          style={[styles.loremIpsumDolorSitAmetCo, styles.mt12]}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sociis amet `}</Text>
      </View>
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group-3609.png")}
      />
      <TouchableOpacity activeOpacity={0.8} style={styles.frameView1} onPress={() => navigation.push("Splash2")}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/769251001-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  vectorIcon: {
    position: "absolute",
    height: "30.12%",
    width: "69.99%",
    top: "21.71%",
    right: "14.28%",
    bottom: "48.17%",
    left: "15.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon: {
    position: "absolute",
    top: 17,
    right: 27.91,
    width: 75.09,
    height: 11.34,
  },
  timeText: {
    position: "absolute",
    marginTop: -3.5,
    top: "50%",
    left: 0,
    fontSize: 15,
    letterSpacing: -0.3,
    fontFamily: "Roboto",
    color: "#2e2e3e",
    textAlign: "center",
    width: 54,
  },
  timeStyleView: {
    position: "absolute",
    top: 7,
    left: 13,
    width: 54,
    height: 21,
  },
  statusBarView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 44,
  },
  findOutAnd: {
    color: "#4a4a4a",
  },
  findOutAndBook: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  yourNearestText: {
    color: "#4a4a4a",
  },
  text: {
    color: "#393939",
  },
  barberText: {
    textDecoration: "underline",
    color: "#f18836",
  },
  yourNearestBarber: {
    margin: 0,
  },
  findOutAndBookYourNearest: {
    position: "relative",
    fontSize: 28,
    lineHeight: 37,
    fontWeight: "600",
    fontFamily: "Poppins",
    textAlign: "center",
    width: 335,
  },
  loremIpsumDolorSitAmetCo: {
    position: "relative",
    fontSize: 14,
    lineHeight: 25,
    fontFamily: "Poppins",
    color: "#6c6c6c",
    textAlign: "center",
    width: 335,
  },
  frameView: {
    position: "absolute",
    top: 499,
    left: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupIcon1: {
    position: "absolute",
    top: 649.5,
    left: 170.5,
    width: 33,
    height: 3,
  },
  skipText: {
    position: "absolute",
    top: 685,
    left: 20,
    fontSize: 16,
    lineHeight: 25,
    fontFamily: "Poppins",
    color: "#6c6c6c",
    textAlign: "center",
  },
  nextText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 25,
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "right",
  },
  frameView1: {
    position: "absolute",
    top: 680,
    left: 255,
    borderRadius: 9,
    backgroundColor: "#f18836",
    flexDirection: "row",
    paddingHorizontal: 34,
    paddingVertical: 7,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  icon: {
    position: "absolute",
    top: 164,
    left: 37,
    width: 300,
    height: 276,
  },
  splashView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Splash1;
