import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Splash = ({navigation}) => {

  const [isTouch, setTouch] = React.useState(false)

  // React.useEffect(() => {
  //   (async () => {
  //     try{
  //       const isTouch = await AsyncStorage.getItem("isTouch")
  //       if(isTouch) {
  //         setTouch(true)
  //       }
  //       else {
  //         await AsyncStorage.setItem("isTouch", true)
  //       }
  //     }
  //     catch(err) {}
  //   })()
  // }, [])

  // React.useEffect(() => {
  //   if(isTouch) {
  //     // Check is Logged in
  //   }
  //   else {
  //     // Splash 1 Screen
  //   }
  // }, [isTouch])

  React.useEffect(() => {
    setTimeout(() => {
      navigation.push("Splash1")
    }, 4000)
  }, [])

  return (
    <View style={styles.splashView}>
      <Image
        style={styles.barberShavingContouringMaleIcon}
        resizeMode="cover"
        source={require("../assets/barbershavingcontouringmalecustomersbeard-1.png")}
      />

      <Image
        style={styles.logo41}
        resizeMode="cover"
        source={require("../assets/logo-4-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barberShavingContouringMaleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 539.61,
    height: 812,
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
  logo41: {
    position: "absolute",
    top: 331,
    left: 89,
    width: 196,
    height: 150,
    overflow: "hidden",
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

export default Splash;
