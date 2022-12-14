import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from '@rneui/base';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';
import * as  ImagePicker from 'expo-image-picker'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { REACT_APP_API_URI } from "@env"

const Signup = ({route, navigation}) => {

  const {role} = route.params
  const [submitting, setSubmitting] = React.useState(false)
  const [hasErr, setHasErr] = React.useState(false)
  const [err, setErr] = React.useState([])
  const [image, setImage] = React.useState(null)

  const [formData, setData] = React.useState({
    role: role,
    image: "",
    name: "",
    nickname: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    latitude: "",
    longitude: "",
  })

  const data = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1
    })

    if(!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }
  
  const send = async () => {
      setSubmitting(true)
      setHasErr(false)
      setErr([])
      try {
        const response = await axios.post("https://digitalplutform.com/server/public/api/user/register", formData)
        setSubmitting(false)
        navigation.navigate("OTPVerification", {email: formData.email})
      }
      catch(err) {
        console.log(err)
        setSubmitting(false)
        if(err.response.status == 400) {
          setHasErr(true)
          setErr(err.response.data.errors)
        }else {
          setHasErr(true)
          setErr(["Server error, try again later."])
        }
      }
  }

  // React.useEffect(() => {
  //   console.log(formData)
  // }, [formData])

  React.useEffect(() => console.log(image), [image])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>

          <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()}/>

          <View style={styles.topFrame}>
            <TouchableOpacity activeOpacity={0.5} style={styles.photoUpload} onPress={pickImage}>
              {
                image ? (
                  <Image
                    style={{height: 115, width: 115, borderRadius: 100}}
                    resizeMode="cover"
                    source={{uri: image}}
                  />
                ) : (
                  <Image
                    resizeMode="cover"
                    source={require("../assets/akariconsimage.png")}
                  />
                )
              }
  
            </TouchableOpacity>
          </View>

          <Text style={styles.signupText}>Sign Up</Text>
          
          {hasErr && (
            <View style={{backgroundColor: "#fb5151", padding: 8, margin: 12, borderRadius: 4}}>
              {err.map((err, index) => (
                <Text key={index} style={{color: "white", fontSize: 16}}>{err}</Text>
              ))}
            </View>
          )}
          
          <Input 
            placeholder="Full Name"
            containerStyle={{...styles.containerStyle, paddingTop: 30}}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            errorStyle={styles.errorStyle}
            onChangeText={(text) => setData(formData => ({...formData, name: text}))}
          />
          <Input 
            placeholder="Nick name"
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            errorStyle={styles.errorStyle}
            onChangeText={(text) => setData(formData => ({...formData, nickname: text}))}
          />
          <Input 
            placeholder="Email address"
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            errorStyle={styles.errorStyle}
            onChangeText={(text) => setData(formData => ({...formData, email: text}))}
          />
          <Input 
            placeholder="Phone number"
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            errorStyle={styles.errorStyle}
            onChangeText={(text) => setData(formData => ({...formData, phone: text}))}
          />
        </View>
      </ScrollView>

      <GooglePlacesAutocomplete 
        placeholder="Office address"
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

          {/* <Input 
            placeholder="Current Address"
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            errorStyle={styles.errorStyle}
            onChangeText={(text) => setData(formData => ({...formData, address: text}))}
          /> */}

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.dropdownContainer}>
            <Dropdown 
              data={data}
              value={formData.gender}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Gender"
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              onChange={item => setData(formData => ({...formData, gender: item.value}))}
            />
          </View>
          <Button buttonStyle={styles.buttonStyle} onPress={() => send()} loading={submitting} disabled={submitting}>Sign Up</Button>
          <View style={styles.loginFrame}>
              <Text style={styles.hasAccountText}>Already have an account? </Text>
              <Text style={styles.signinText} onPress={() => navigation.navigate("EmailLogin")}>Sign in</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 14
  },
  topFrame: {
    flexDirection: "row", 
    justifyContent: "center"
  },
  photoUpload: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: "#0088E0"
  },
  loginFrame: {
    flexDirection: "row", 
    justifyContent: "center", 
    paddingTop: 24
  },
  hasAccountText: {
    fontSize: 16, 
    color: "#6C6C6C"
  },
  signinText: {
    fontSize: 16, 
    fontWeight: "bold",  
    color: "#6C6C6C"
  },
  signupText: {
    fontSize: 20,
    paddingLeft: 10
  },
  containerStyle: {
    paddingTop: 10,
  },  
  inputContainerStyle: {
    borderRadius: 8,
    borderColor: "grey",
    borderBottomWidth: 0.5,
    borderWidth: 0.5,
  },
  inputStyle: {
    paddingLeft: 10
  },
  errorStyle: {
    margin: 2
  },
  buttonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#0088E0"
  },
  dropdownContainer: {
    flexDirection: "column", 
    width: "97%", 
    alignItems: "center", 
    paddingLeft: 10, 
    paddingBottom: 20
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "100%",
    height: 43
  },
  placeholderStyle: {
    fontSize: 16,
    color: "grey"
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  
})

const inputStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    flex: 0
  },
  textInputContainer: {
    paddingBottom: 0
  },
  textInput: {
      backgroundColor: "white",
      borderRadius: 8,
      borderColor: "grey",
      borderBottomWidth: 0.5,
      borderWidth: 0.5,
      fontSize: 18
  }
})

export default Signup;
