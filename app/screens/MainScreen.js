import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const MainScreen = () => {
  return (
    <View style={styles.mainPageView}>
      <View style={styles.rectangleView} />
      <View style={styles.frameView5}>
        <View style={styles.frameView}>
          <Image
            style={styles.akarIconshome}
            resizeMode="cover"
            source={require("../assets/akariconshome.png")}
          />
          <Text style={[styles.homeText, styles.mt1]}>Home</Text>
        </View>
        <View style={[styles.frameView1, styles.ml30]}>
          <Image
            style={styles.nounDeadline52722211Icon}
            resizeMode="cover"
            source={require("../assets/noundeadline5272221-1.png")}
          />
          <Text style={[styles.bookingText, styles.mt1]}>Booking</Text>
        </View>
        <View style={[styles.frameView2, styles.ml30]}>
          <Image
            style={styles.claritynotificationOutlineBIcon}
            resizeMode="cover"
            source={require("../assets/claritynotificationoutlinebadged.png")}
          />
          <Text style={[styles.notificationText, styles.mt1]}>
            Notification
          </Text>
        </View>
        <View style={[styles.frameView3, styles.ml30]}>
          <Image
            style={styles.fluentmail20RegularIcon}
            resizeMode="cover"
            source={require("../assets/fluentmail20regular1.png")}
          />
          <Text style={[styles.messageText, styles.mt1]}>Message</Text>
        </View>
        <View style={[styles.frameView4, styles.ml30]}>
          <Image
            style={styles.heroiconsuserCircle}
            resizeMode="cover"
            source={require("../assets/heroiconsusercircle.png")}
          />
          <Text style={[styles.profileText, styles.mt1]}>Profile</Text>
        </View>
      </View>
      <Image
        style={styles.icroundArrowBackIosIcon}
        resizeMode="cover"
        source={require("../assets/icroundarrowbackios5.png")}
      />
      <Text style={styles.messageText1}>Message</Text>
      <View style={styles.rectangleView1} />
      <View style={styles.groupView}>
        <Text style={styles.aminulIslamText}>Aminul Islam</Text>
        <Text style={styles.helloHowAreYou}>Hello! How are you?</Text>
      </View>
      <Text style={styles.minText}>26 min</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/1.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={styles.rectangleView2} />
      <View style={styles.groupView1}>
        <Text style={styles.tahmidHasanText}>Tahmid hasan</Text>
        <Text style={styles.helloHowAreYou1}>Hello! How are you?</Text>
      </View>
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={styles.ellipseIcon3}
        resizeMode="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <View style={styles.groupView2}>
        <View style={styles.rectangleView3} />
        <Text style={styles.searchHereText}>Search here</Text>
        <Image
          style={styles.akarIconssearch}
          resizeMode="cover"
          source={require("../assets/akariconssearch.png")}
        />
      </View>
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={styles.ellipseIcon5}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: 1,
  },
  ml30: {
    marginLeft: 30,
  },
  rectangleView: {
    position: "absolute",
    top: 739,
    left: 0,
    borderRadius: 24,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    width: 375,
    height: 73,
  },
  akarIconshome: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  homeText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#4a4a4a",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  nounDeadline52722211Icon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  bookingText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#4a4a4a",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  claritynotificationOutlineBIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  notificationText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#4a4a4a",
    textAlign: "left",
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluentmail20RegularIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  messageText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#0088e0",
    textAlign: "left",
  },
  frameView3: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  heroiconsuserCircle: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  profileText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#4a4a4a",
    textAlign: "left",
  },
  frameView4: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView5: {
    position: "absolute",
    top: 757,
    left: 26,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  icroundArrowBackIosIcon: {
    position: "absolute",
    top: 52,
    left: 20,
    width: 24,
    height: 24,
  },
  messageText1: {
    position: "absolute",
    top: 52,
    left: 151,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#575757",
    textAlign: "center",
  },
  rectangleView1: {
    position: "absolute",
    top: 168,
    left: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 335,
    height: 68,
  },
  aminulIslamText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#4a4a4a",
    textAlign: "left",
  },
  helloHowAreYou: {
    position: "absolute",
    top: 21,
    left: 0,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#6c6c6c",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 182,
    left: 89,
    width: 117,
    height: 39,
  },
  minText: {
    position: "absolute",
    top: 207,
    left: 307,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#6b6983",
    textAlign: "right",
  },
  ellipseIcon: {
    position: "absolute",
    top: 185,
    left: 315,
    width: 18,
    height: 18,
  },
  icon: {
    position: "absolute",
    top: 190,
    left: 323,
    width: 2.57,
    height: 7.14,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 294.73,
    left: 62.94,
    width: 8.27,
    height: 8.27,
  },
  rectangleView2: {
    position: "absolute",
    top: 252,
    left: 20,
    borderRadius: 8,
    backgroundColor: "#f3f3f3",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 335,
    height: 68,
  },
  tahmidHasanText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#4a4a4a",
    textAlign: "left",
  },
  helloHowAreYou1: {
    position: "absolute",
    top: 21,
    left: 0,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#6c6c6c",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 266,
    left: 89,
    width: 117,
    height: 39,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 264,
    left: 34,
    width: 43,
    height: 43,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 180,
    left: 34,
    width: 43,
    height: 43,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(90, 90, 90, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 335,
    height: 48,
  },
  searchHereText: {
    position: "absolute",
    top: 13,
    left: 20,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#6c6c6c",
    textAlign: "left",
  },
  akarIconssearch: {
    position: "absolute",
    top: 12,
    left: 297,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupView2: {
    position: "absolute",
    top: 100,
    left: 20,
    width: 335,
    height: 48,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 215,
    left: 63,
    width: 7.5,
    height: 7.5,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 296,
    left: 67,
    width: 7.5,
    height: 7.5,
  },
  mainPageView: {
    position: "relative",
    borderRadius: 24,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MainScreen;
