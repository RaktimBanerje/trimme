import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, Touchable, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from '@rneui/base';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons'; 

const Signup = ({route, navigation}) => {

  const {role} = route.params
  const [submitting, setSubmitting] = React.useState(false)

  const [formData, setData] = React.useState({
    role: "",
    image: "",
    fullname: "",
    nickname: "",
    email: "",
    phone: "",
    address: "",
    gender: ""
  })

  const data = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]
  
  const send = () => {
      setSubmitting(true)
      console.log(formData)
  }

  React.useEffect(() => {
    setSubmitting(formData => ({...formData, role}))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>

          <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()}/>

          <View style={styles.topFrame}>
            <TouchableOpacity activeOpacity={0.5} style={styles.photoUpload}>
              <Image
                resizeMode="cover"
                source={require("../assets/akariconsimage.png")}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.signupText}>Sign Up</Text>
          
          <Input 
            placeholder="Full Name"
            containerStyle={{...styles.containerStyle, paddingTop: 30}}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            errorStyle={styles.errorStyle}
            onChangeText={(text) => setData(formData => ({...formData, fullname: text}))}
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
          <Input 
            placeholder="Current Address"
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            errorStyle={styles.errorStyle}
            onChangeText={(text) => setData(formData => ({...formData, address: text}))}
          />
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
          <Button buttonStyle={styles.buttonStyle} onPress={() => send()} loading={submitting}>Sign Up</Button>
          <View style={styles.loginFrame}>
              <Text style={styles.hasAccountText}>Already have an account? </Text>
              <Text style={styles.signinText}>Sign in</Text>
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
    backgroundColor: "#F18836"
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
    backgroundColor: "#F18836"
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

export default Signup;
