import { Avatar, Text } from '@rneui/base'
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Map from "../../components/Map/Map"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { AntDesign } from '@expo/vector-icons';
import axios from '../../utils'
import { FlatList } from 'react-native-gesture-handler'


const MainScreen = ({navigation}) => {
  const [barbars, setBarbar] = React.useState([
    {
      id: "1",
      name: "Raktim Banerjee",
      nickname: "Raktim",
      image: "",
    }
  ])

  const [loadig, setLoading] = React.useState(false)
  const [shops, setShops] = React.useState([])

  React.useEffect(() => {
    setLoading(true)
    axios.get("/shop")
    .then(response => {
      if(response.status  == 200) {
        setShops(response.data.shops)
      }
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status)
      }
    })
    .finally(() => setLoading(false))
  }, [])

  const Shop = ({item}) => {
    return (
      <TouchableOpacity 
        style={styles.itemContainer}
        activeOpacity={1}
        onPress={() => navigation.navigate("ShopScreen", {id: item.id})}
      >
          <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
            <Avatar 
              size={70}
              rounded
              source={require("../../assets/logo.png")}
            />

            <View>
              <Text style={{fontSize: 20, marginLeft: 10}}>{item.name}</Text>
              <View style={{flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
                <AntDesign name="star" size={18} color="#F9B53F" />
                <Text>{item.star} ({item.reviews} reviews)</Text>
              </View>
            </View>
          </View>
          <Text style={{fontSize: 20}}>$79</Text>
      </TouchableOpacity>
    )
  }

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
          <FlatList 
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={shops}
            renderItem={Shop}
            keyExtractor={item => item.id}
          />
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