import { Image, Text } from '@rneui/base';
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const ProfileScreen = ({navigation}) => {

  const [user, setUser] = React.useState({
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
  })

  return (
   <SafeAreaView style={styles.container}>
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Avatar 
          size={100}
          rounded
          source={{ uri: user.image }}
        />
      </View>
      <View>
          <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
            <View style={styles.itemContainerFirstElement}>
              <AntDesign name="edit" size={24} color="black" />
              <Text style={{fontSize: 18, paddingHorizontal: 20}}>Edit Profile</Text>
            </View>
 
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer} activeOpacity={1} onPress={() => navigation.navigate("EditStorefrontScreen")}>
            <View style={styles.itemContainerFirstElement}>
              <MaterialCommunityIcons name="archive-marker-outline" size={24} color="black" />
              <Text style={{fontSize: 18, paddingHorizontal: 20}}>Edit Storefront</Text>
            </View>
 
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer} activeOpacity={1} onPress={() => navigation.navigate("AddServiceScreen")}>
            <View style={styles.itemContainerFirstElement}>
              <Ionicons name="cut" size={24} color="black" />
              <Text style={{fontSize: 18, paddingHorizontal: 20}}>Add Service</Text>
            </View>
 
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
            <View style={styles.itemContainerFirstElement}>
              <Ionicons name="notifications-outline" size={24} color="black" />
              <Text style={{fontSize: 18, paddingHorizontal: 20}}>Notification</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
            <View style={styles.itemContainerFirstElement}>
              <AntDesign name="exclamation" size={24} color="black" />
              <Text style={{fontSize: 18, paddingHorizontal: 20}}>Privacy Policies</Text>
            </View>
 
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
            <View style={styles.itemContainerFirstElement}>
              <Ionicons name="help" size={24} color="black" />
              <Text style={{fontSize: 18, paddingHorizontal: 20}}>Help Center</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
            <View style={styles.itemContainerFirstElement}>
              <AntDesign name="logout" size={24} color="black" />
              <Text style={{fontSize: 18, paddingHorizontal: 20}}>Log out</Text>
            </View>
          </TouchableOpacity>
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  avatar: {
    height: 40,
    width: 40
  },
  itemContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'grey',
    borderRadius: 100,
    borderWidth: 0.5
  },
  itemContainerFirstElement: {
    flexDirection: 'row',
    alignItems: "center"
  }
})

export default ProfileScreen