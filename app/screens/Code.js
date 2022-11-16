import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Code = () => {
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
      <Text style={styles.enterVerificationCode}>Enter verification code</Text>
      <Text style={styles.weHaveSendYouA4DigitVer}>
        We have send you a 4 digit verification code on +91 000000000
      </Text>
      <View style={styles.groupView1}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <View style={styles.rectangleView3} />
          <Text style={styles.text}>2</Text>
          <Text style={styles.text1}>6</Text>
          <Text style={styles.text2}>8</Text>
          <Text style={styles.text3}>3</Text>
        </View>
      </View>
      <View style={styles.groupView2}>
        <View style={styles.rectangleView4} />
        <Text style={styles.logInText}>Log in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  enterVerificationCode: {
    position: "absolute",
    top: 88,
    left: 74,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "left",
  },
  weHaveSendYouA4DigitVer: {
    position: "absolute",
    top: 126,
    left: 50,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "center",
    width: 275,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    width: 53,
    height: 53,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 65,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    width: 53,
    height: 53,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 130,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    width: 53,
    height: 53,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 195,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    width: 53,
    height: 53,
  },
  text: {
    position: "absolute",
    top: 12,
    left: 21,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 11,
    left: 85,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 11,
    left: 150,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: 11,
    left: 216,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 248,
    height: 53,
  },
  groupView1: {
    position: "absolute",
    top: 188,
    left: 64,
    width: 248,
    height: 53,
  },
  rectangleView4: {
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
  logInText: {
    position: "absolute",
    top: 15,
    left: 145,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  groupView2: {
    position: "absolute",
    top: 270,
    left: 20,
    width: 335,
    height: 55,
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

export default Code;
