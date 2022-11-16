import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.loginView}>
      <View style={styles.frameView}>
        <Text style={styles.skipText}>Skip</Text>
      </View>
      <View style={styles.groupView}>
        <View style={styles.rectangleView} />
        <Text style={styles.logInText}>Log in</Text>
      </View>
      <Text style={styles.dontHaveAnAccountSignUp}>
        <Text style={styles.dontHaveAnAccount}>
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.signUpText1}>
          <Text style={styles.signUpText}>Sign up</Text>
        </Text>
      </Text>
      <Text style={styles.orText}>Or</Text>
      <Text style={styles.logInText1}>Log In</Text>
      <View style={styles.groupView1}>
        <View style={styles.rectangleView1} />
        <Text style={styles.text1}>000000000</Text>
        <View style={styles.frameView1}>
          <Image
            style={styles.openmojiflagIndiaIcon}
            resizeMode="cover"
            source={require("../assets/openmojiflagindia.png")}
          />
          <Text style={[styles.text2, styles.ml4]}>+91</Text>
          <Image
            style={[styles.bxsdownArrowIcon, styles.ml4]}
            resizeMode="cover"
            source={require("../assets/bxsdownarrow.png")}
          />
        </View>
        <View style={styles.lineView} />
      </View>
      <View style={styles.rectangleView2} />
      <Text style={styles.loginWithEMail}>Login with E-mail</Text>
      <Image
        style={styles.icroundArrowBackIosIcon}
        resizeMode="cover"
        source={require("../assets/icroundarrowbackios4.png")}
      />
      <Image
        style={styles.fluentmail20RegularIcon}
        resizeMode="cover"
        source={require("../assets/fluentmail20regular.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
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
  skipText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#171717",
    textAlign: "center",
  },
  frameView: {
    position: "absolute",
    top: 730,
    left: 287,
    borderRadius: 27,
    borderStyle: "solid",
    borderColor: "#575757",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 19,
    paddingVertical: 7,
    boxSizing: "border-box",
    alignItems: "flex-start",
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
  logInText: {
    position: "absolute",
    top: 16,
    left: 145,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    top: 359,
    left: 20,
    width: 335,
    height: 55,
  },
  dontHaveAn: {
    fontFamily: "Poppins",
  },
  text: {
    fontWeight: "500",
    fontFamily: "Poppins",
  },
  dontHaveAnAccount: {
    color: "#575757",
  },
  signUpText: {
    color: "#171717",
  },
  signUpText1: {
    fontWeight: "500",
    fontFamily: "Poppins",
  },
  dontHaveAnAccountSignUp: {
    position: "absolute",
    top: 540,
    left: 76,
    fontSize: 14,
    textAlign: "right",
  },
  orText: {
    position: "absolute",
    top: 434,
    left: 180,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#575757",
    textAlign: "right",
  },
  logInText1: {
    position: "absolute",
    top: 251,
    left: 20,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#4a4a4a",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    width: 335,
    height: 46,
  },
  text1: {
    position: "absolute",
    top: 13,
    left: 103,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "left",
  },
  openmojiflagIndiaIcon: {
    position: "relative",
    width: 28,
    height: 28,
    flexShrink: 0,
    overflow: "hidden",
  },
  text2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Open Sans",
    color: "#232e49",
    textAlign: "left",
  },
  bxsdownArrowIcon: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  frameView1: {
    position: "absolute",
    top: 9,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  lineView: {
    position: "absolute",
    top: 9.5,
    left: 92.5,
    borderStyle: "solid",
    borderColor: "#d8d8d8",
    borderRightWidth: 1,
    width: 1,
    height: 27,
  },
  groupView1: {
    position: "absolute",
    top: 293,
    left: 20,
    width: 335,
    height: 46,
  },
  rectangleView2: {
    position: "absolute",
    top: 470,
    left: 20,
    borderRadius: 8,
    backgroundColor: "#efefef",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 335,
    height: 46,
  },
  loginWithEMail: {
    position: "absolute",
    top: 482,
    left: 128,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "left",
  },
  icroundArrowBackIosIcon: {
    position: "absolute",
    top: 483,
    left: 325,
    width: 20,
    height: 20,
  },
  fluentmail20RegularIcon: {
    position: "absolute",
    top: 483,
    left: 30,
    width: 20,
    height: 20,
  },
  loginView: {
    position: "relative",
    borderRadius: 24,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Login;
