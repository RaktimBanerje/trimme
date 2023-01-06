import { Avatar, Text } from '@rneui/base'
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Map from "../../components/Map/Map"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';


const MainScreen = ({navigation}) => {
  const [barbars, setBarbar] = React.useState([
    {
      id: "1",
      name: "Raktim Banerjee",
      nickname: "Raktim",
      image: "",
    }
  ])

  const [shops, setShops] = React.useState([
    {
        id: 1,
        user_id: 1,
        image: "",
        name: "Trim Me Shop",
        address: "29E/1 Rammohan Mukherjee Lane",
        latitude: "22.56",
        longitude: "22.89",
        created_at: "2023-01-01T18:35:57.000000Z",
        updated_at: "2023-01-01T18:35:57.000000Z"
    },
    {
        id: 3,
        user_id: 2,
        image: "",
        name: "Serenity Salon",
        address: "29E/1 Rammohan Mukherjee Lane",
        latitude: "28.56",
        longitude: "30.89",
        created_at: "2023-01-02T20:49:26.000000Z",
        updated_at: "2023-01-02T20:49:26.000000Z"
    }
])

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <GooglePlacesAutocomplete 
              placeholder="Search location"
              nearbyPlacesAPI='GooglePlacesSearch'
              fetchDetails={true}
              returnKeyType="search"
              enablePoweredByContainer={false}
              isRowScrollable={true}
              query={{
                  key: "AIzaSyCQ2-Usbwfyygs-yYQoOGiKBzBD4P7wnZI",
                  language: 'en',
              }}
              debounce={400}
              styles={inputStyles}
              onPress={(data, details = null) => {
                setData({...formData, 
                  address: data.description, 
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng
                })
              }}
            />
        </View>
        <View style={styles.mapContainer}>
          <Map />
        </View>
        <View style={styles.shopsContainer}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
              <TouchableOpacity 
                style={styles.itemContainer}
                activeOpacity={1}
                onPress={() => navigation.navigate("ShopScreen", {id: 1})}
              >
                  <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
                    <Avatar 
                      size={70}
                      rounded
                      source={require("../../assets/logo.png")}
                    />
                    <View>
                      <Text style={{fontSize: 20, marginLeft: 10}}>Serenity Salon</Text>
                      <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                        <AntDesign name="star" size={18} color="#F9B53F" />
                        <Text>4.1 (123 reviews)</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={{fontSize: 20}}>$79</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.itemContainer}
                activeOpacity={1}
                onPress={() => navigation.navigate("ShopScreen", {id: 1})}
              >
                  <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
                    <Avatar 
                      size={70}
                      rounded
                      source={require("../../assets/logo.png")}
                    />
                    <View>
                      <Text style={{fontSize: 20, marginLeft: 10}}>Serenity Salon</Text>
                      <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                        <AntDesign name="star" size={18} color="#F9B53F" />
                        <Text>4.1 (123 reviews)</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={{fontSize: 20}}>$79</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.itemContainer}
                activeOpacity={1}
                onPress={() => navigation.navigate("ShopScreen", {id: 1})}
              >
                  <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
                    <Avatar 
                      size={70}
                      rounded
                      source={require("../../assets/logo.png")}
                    />
                    <View>
                      <Text style={{fontSize: 20, marginLeft: 10}}>Serenity Salon</Text>
                      <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                        <AntDesign name="star" size={18} color="#F9B53F" />
                        <Text>4.1 (123 reviews)</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={{fontSize: 20}}>$79</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.itemContainer}
                activeOpacity={1}
                onPress={() => navigation.navigate("ShopScreen", {id: 1})}
              >
                  <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
                    <Avatar 
                      size={70}
                      rounded
                      source={require("../../assets/logo.png")}
                    />
                    <View>
                      <Text style={{fontSize: 20, marginLeft: 10}}>Serenity Salon</Text>
                      <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                        <AntDesign name="star" size={18} color="#F9B53F" />
                        <Text>4.1 (123 reviews)</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={{fontSize: 20}}>$79</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.itemContainer}
                activeOpacity={1}
                onPress={() => navigation.navigate("ShopScreen", {id: 1})}
              >
                  <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
                    <Avatar 
                      size={70}
                      rounded
                      source={require("../../assets/logo.png")}
                    />
                    <View>
                      <Text style={{fontSize: 20, marginLeft: 10}}>Serenity Salon</Text>
                      <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                        <AntDesign name="star" size={18} color="#F9B53F" />
                        <Text>4.1 (123 reviews)</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={{fontSize: 20}}>$79</Text>
              </TouchableOpacity>
          </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchContainer: {
      flex: 0.1
    },  
    mapContainer: {
      flex: 0.5
    },
    shopsContainer: {
      flex: 0.5
    },  
    itemContainer: {
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "grey",
      borderRadius: 4,
      backgroundShadow: "red"
    }
});

const inputStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 18,
    flex: 1,
    zIndex: 5000
  },
  textInputContainer: {
    paddingBottom: 0
  },
  textInput: {
      backgroundColor: "white",
      borderRadius: 50,
      borderColor: "black",
      borderBottomWidth: 0.5,
      borderWidth: 0.5,
      fontSize: 18
  }
})

export default MainScreen