import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Code1 = () => {
  return (
    <View style={styles.codeView}>
      <View style={styles.statusBarView}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-6.png")}
        />
        <View style={styles.timeStyleView}>
          <Text style={styles.timeText}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.icroundArrowBackIosIcon}
        resizeMode="cover"
        source={require("../assets/icroundarrowbackios.png")}
      />
      <View style={styles.groupView1}>
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-15.png")}
        />
        <View style={styles.frameView2}>
          <View style={styles.frameView1}>
            <View style={styles.frameView}>
              <Text style={styles.allowYourLocation}>Allow your location</Text>
              <Text style={[styles.trimMeUsesYourLocationTo, styles.mt8]}>
                <Text style={styles.trimMeUses}>{`Trim me uses your location to
provide `}</Text>
                <Text style={styles.betterUserExperience}>
                  better user experience
                </Text>
              </Text>
            </View>
            <View style={[styles.groupView, styles.mt28]}>
              <View style={styles.rectangleView} />
              <Text style={styles.enableLocationText}>Enable location</Text>
            </View>
          </View>
          <Text style={[styles.notNowText, styles.mt16]}>Not Now</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  mt28: {
    marginTop: 28,
  },
  mt16: {
    marginTop: 16,
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
  icroundArrowBackIosIcon: {
    position: "absolute",
    top: 52,
    left: 20,
    width: 24,
    height: 24,
  },
  groupIcon1: {
    position: "absolute",
    height: "47.75%",
    width: "68.35%",
    top: "0%",
    right: "15.82%",
    bottom: "52.25%",
    left: "15.82%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  allowYourLocation: {
    position: "relative",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "center",
  },
  trimMeUses: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  betterUserExperience: {
    margin: 0,
  },
  trimMeUsesYourLocationTo: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "center",
    width: 311,
  },
  frameView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#f18836",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 335,
    height: 55,
  },
  enableLocationText: {
    position: "absolute",
    top: 16,
    left: 106,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  groupView: {
    position: "relative",
    width: 335,
    height: 55,
    flexShrink: 0,
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  notNowText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "center",
  },
  frameView2: {
    position: "absolute",
    top: 261.2,
    left: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView1: {
    position: "absolute",
    height: "56.8%",
    width: "89.33%",
    top: "21.55%",
    right: "5.33%",
    bottom: "21.65%",
    left: "5.33%",
  },
  codeView: {
    position: "relative",
    borderRadius: 24,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Code1;
