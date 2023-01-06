import { Avatar, Button, Text } from '@rneui/base'
import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ScheduleModal from "../../components/Modal/ScheduleModal"


const ShopScreen = ({route, navigation}) => {

  const [activeTab, setActiveTab] = React.useState("service")
  const [display, setDisplay] = React.useState(false)
  const [schedule, setSchedule] = React.useState(new Date())

  React.useEffect(() => {
    console.log(schedule)
  }, [schedule])

  const [shop, setShop] = React.useState({
    name: "Serenity Salon",
    logo: require("../../assets/logo.png"),
    rating: 4.1,
    reviews: 123,
    services: [
      {
        id: "1",
        name: "Service A",
        logo: require("../../assets/logo.png"),
        rating: 4.0,
        reviews: 120,
        price: 120
      },
      {
        id: "2",
        name: "Service B",
        logo: require("../../assets/logo.png"),
        rating: 4,
        reviews: 20,
        price: 79
      },
      {
        id: "3",
        name: "Service C",
        logo: require("../../assets/logo.png"),
        rating: 2,
        reviews: 80,
        price: 30
      },
      {
        id: "4",
        name: "Service D",
        logo: require("../../assets/logo.png"),
        rating: 4.1,
        reviews: 65,
        price: 200
      },
      {
        id: "5",
        name: "Service E",
        logo: require("../../assets/logo.png"),
        rating: 3,
        reviews: 14,
        price: 80
      },
      {
        id: "6",
        name: "Service F",
        logo: require("../../assets/logo.png"),
        rating: 2,
        reviews: 10,
        price: 35
      }
    ],
    customerReviews: [
      {
        id: "1",
        name: "Naim",
        logo: require("../../assets/logo.png"),
        rating: 4.0,
        review: "Brilliant haircut. I asked for a chic pixie cut and thats exactly what I got. Tahmid is a very talented hairdresser and a lovely person. This is one of the See more",
        date: new Date()
      },
      {
        id: "2",
        name: "Purnendu",
        logo: require("../../assets/logo.png"),
        rating: 4.0,
        review: "Brilliant haircut. I asked for a chic pixie cut and thats exactly what I got. Tahmid is a very talented hairdresser and a lovely person. This is one of the See more",
        date: new Date()
      },
      {
        id: "3",
        name: "Raktim Banerjee",
        logo: require("../../assets/logo.png"),
        rating: 4.0,
        review: "Brilliant haircut. I asked for a chic pixie cut and thats exactly what I got. Tahmid is a very talented hairdresser and a lovely person. This is one of the See more",
        date: new Date()
      },
      {
        id: "4",
        name: "Partha Koley",
        logo: require("../../assets/logo.png"),
        rating: 4.0,
        review: "Brilliant haircut. I asked for a chic pixie cut and thats exactly what I got. Tahmid is a very talented hairdresser and a lovely person. This is one of the See more",
        date: new Date()
      },
      {
        id: "5",
        name: "Susmita Sahoo",
        logo: require("../../assets/logo.png"),
        rating: 4.0,
        review: "Brilliant haircut. I asked for a chic pixie cut and thats exactly what I got. Tahmid is a very talented hairdresser and a lovely person. This is one of the See more",
        date: new Date()
      },
    ],
    portfolios: [
      {
        id: "1",
        image: require("../../assets/portfolio/1.png"),

      },
      {
        id: "2",
        image: require("../../assets/portfolio/2.png"),

      },
      {
        id: "3",
        image: require("../../assets/portfolio/3.png"),

      },
      {
        id: "4",
        image: require("../../assets/portfolio/4.png"),

      },
      {
        id: "5",
        image: require("../../assets/portfolio/1.png"),

      },
      {
        id: "6",
        image: require("../../assets/portfolio/2.png"),

      },
      {
        id: "7",
        image: require("../../assets/portfolio/3.png"),

      },
      {
        id: "8",
        image: require("../../assets/portfolio/4.png"),

      },
    ]
  })

  const [cart, setCart] = React.useState([])

  const Service = ({item}) => {
    return (
      <TouchableOpacity 
        style={styles.itemContainer}
        activeOpacity={1}
    >
        <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
          <Avatar 
            size={50}
            rounded
            source={item.logo}
          />
          
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 20}}>{item.name}</Text>
            <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
              <AntDesign name="star" size={18} color="#F9B53F" />
              <Text>{item.rating} ({item.reviews} reviews)</Text>
            </View>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>$ {item.price}</Text>
          </View>
        </View>
        
        {cart.includes(item.id) ? (
          <Button buttonStyle={styles.removeButtonStyle} onPress={() => setCart(cart => {
            cart.splice(cart.indexOf(item.id), 1)
            return [...cart]
          })}>
            <Feather name="trash-2" size={20} color="white" />  Remove
          </Button>
        ) : (
          <Button buttonStyle={styles.buttonStyle} onPress={() => setCart(cart => [...cart, item.id])}>
            <Entypo name="plus" size={24} color="white" />  Add
          </Button>
        )}
      </TouchableOpacity>
    )
  }

  const Review = ({item}) => {
    return (
      <View style={styles.reviewContainer}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>

          <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Avatar 
                size={50}
                rounded
                source={item.logo}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 18}}>{item.name}</Text>
                <View style={{flexDirection: "row"}}>
                  <AntDesign name="star" size={18} color="#F9B53F" />
                  <AntDesign name="star" size={18} color="#F9B53F" />
                  <AntDesign name="star" size={18} color="#F9B53F" />
                  <AntDesign name="star" size={18} color="#F9B53F" />
                  <AntDesign name="star" size={18} color="#F9B53F" />
                </View>
              </View>
          </View>

          <Text>{new Date(item.date).toLocaleDateString()}</Text>

        </View>

        <Text style={{fontSize: 16,lineHeight: 26}}>{item.review}</Text>
      </View>
    )
  }

  const Portfolio = ({item}) => {
    return (
        <Image
          style={{width: "50%", margin: 4}} 
          source={item.image}
        />
    )
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topFrame}>
          <Avatar 
            size={120}
            rounded
            source={shop.logo}
            containerStyle={styles.avarter}  
          
          />
          <Text style={{fontSize: 30, marginLeft: 10, marginTop: 12}}>{shop.name}</Text>
          <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
            <AntDesign name="star" size={20} color="#F9B53F" />
            <AntDesign name="star" size={20} color="#F9B53F" />
            <AntDesign name="star" size={20} color="#F9B53F" />
            <AntDesign name="star" size={20} color="#F9B53F" />
            <AntDesign name="star" size={20} color="#F9B53F" />
            <Text>{shop.rating} ({shop.reviews} reviews)</Text>
          </View>
        </View>
        
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, activeTab == 'service' && styles.activeTab]} activeOpacity={1} onPress={() => setActiveTab("service")}>
            <Text style={styles.tabTitle}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, activeTab == 'review' && styles.activeTab]} activeOpacity={1} onPress={() => setActiveTab("review")}>
            <Text style={styles.tabTitle}>Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, activeTab == 'previous' && styles.activeTab]} activeOpacity={1} onPress={() => setActiveTab("previous")}>
            <Text style={styles.tabTitle}>Previous Cuts</Text>
          </TouchableOpacity>
        </View> 

        <View style={styles.tabContent}>
          
          {activeTab == 'service' && (
            <View>
              <Text style={styles.salonServiceText}>Services</Text>
              <FlatList 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={shop.services}
                renderItem={Service}
                keyExtractor={item => item.id}
              />
          </View>
          )}

          {activeTab == 'review' && (
            <View>
              <Text style={styles.salonServiceText}>All  Reviews</Text>
              <FlatList 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={shop.customerReviews}
                renderItem={Review}
                keyExtractor={item => item.id}
              />
          </View>
          )}

          {activeTab == 'previous' && (
            <View>
              <Text style={styles.salonServiceText}>All  Images</Text>
              <FlatList 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={shop.portfolios}
                horizontal={false}
                numColumns={2}
                renderItem={Portfolio}
                keyExtractor={item => item.id}
              />
          </View>
          )}

        </View>
        
        {cart.length > 0 && (
          <View style={styles.buttonContainer}>
            <Button buttonStyle={styles.buttonStyle} size={'lg'} onPress={() => setDisplay(!display)}>Appointment</Button>
          </View>
        )}

        <ScheduleModal 
          display={display} 
          setDisplay={setDisplay} 
          schedule={schedule} 
          setSchedule={setSchedule} 
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 14
    },
    topFrame: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
    },
    avarter: {
      padding: 10,
      borderWidth: 1,
      borderColor: "grey",
    },
    tabContainer: {
      flex: 0.1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: 'center',
    },
    tab: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 10,
      width: 100,
      borderBottomWidth: 2,
      borderBottomColor: "#CBCBCB",
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: "#0088E0",
    },
    tabTitle: {
      fontSize: 18,
    },
    tabContent: {
      flex: 0.6,
    },
    itemContainer: {
      marginTop: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "grey",
      borderRadius: 4,
    },
    salonServiceText: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 10,
    },
    reviewContainer: {
      marginTop: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 0.5,
      borderColor: "grey",
      borderRadius: 4,
    },
    buttonContainer: {
      flex: 0.1,
      justifyContent: "flex-end",
    },
    buttonStyle: {
      backgroundColor: "#3863CB", 
      borderRadius: 50, 
      paddingHorizontal: 15
    },
    removeButtonStyle: {
      backgroundColor: "#dc3545", 
      borderRadius: 50, 
      paddingHorizontal: 15
    }
})

export default ShopScreen