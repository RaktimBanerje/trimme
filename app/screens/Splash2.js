import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Splash2 = ({navigation}) => {
  return (
    <View style={styles.splashView}>
      <View style={styles.frameView}>
        <Text style={styles.weWillTakeCareOfYourHair}>
          <Text style={styles.weWillTake}>{`We will take care of your `}</Text>
          <Text style={styles.hairText}>hair</Text>
        </Text>
        <Text
          style={[styles.loremIpsumDolorSitAmetCo, styles.mt12]}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sociis amet `}</Text>
      </View>
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group-36091.png")}
      />
      <TouchableOpacity activeOpacity={0.8} style={styles.frameView1} onPress={() => navigation.push("SignupChoice")}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
      <Image
        style={styles.barberbroIcon}
        resizeMode="cover"
        source={require("../assets/barberbro.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
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
  weWillTake: {
    color: "#4a4a4a",
  },
  hairText: {
    textDecoration: "underline",
    color: "#0088E0",
  },
  weWillTakeCareOfYourHair: {
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
    left: 252,
    borderRadius: 9,
    backgroundColor: "#0088E0",
    flexDirection: "row",
    paddingHorizontal: 34,
    paddingVertical: 7,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  barberbroIcon: {
    position: "absolute",
    height: "33.09%",
    width: "70.88%",
    top: "21.12%",
    right: "14.7%",
    bottom: "45.79%",
    left: "14.42%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  splashView: {
    position: "relative",
    borderRadius: 24,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Splash2;
