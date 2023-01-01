import { Button, Input, Text } from '@rneui/base';
import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as  ImagePicker from 'expo-image-picker'

const EditStorefront = () => {

    const [formData, setData] = React.useState({
        name: "",
        image: null,
        address: "",
        phone: "",
        latitude: "",
        longitude: ""
    })

    const [submitting, setSubmitting] = React.useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [3, 3],
          quality: 1
        })
    
        if(!result.canceled) {
          setData({...formData, image: result.assets[0].uri})
        }
      }
    
    const send = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topFrame}>
                <TouchableOpacity activeOpacity={0.5} style={styles.photoUpload} onPress={pickImage}>
                {
                    formData.image ? (
                    <Image
                        style={{height: 115, width: 115, borderRadius: 100}}
                        resizeMode="cover"
                        source={{uri: formData.image}}
                    />
                    ) : (
                    <Image
                        resizeMode="cover"
                        source={require("../../assets/akariconsimage.png")}
                    />
                    )
                }
    
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Edit Storefront</Text>
            
            <Input 
                placeholder="Store name"
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorStyle}
                onChangeText={(text) => setData(formData => ({...formData, name: text}))}
            />

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


            <Input 
                placeholder="Phone number"
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorStyle}
                onChangeText={(text) => setData(formData => ({...formData, phone: text}))}
            />
            <Button 
                buttonStyle={styles.buttonStyle} 
                onPress={(event) => send(event)} 
                loading={submitting} 
                disabled={submitting}>Save</Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 14
    },
    text: {
        fontSize: 20,
        paddingLeft: 10,
        marginVertical: 10,
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
});

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
});

export default EditStorefront