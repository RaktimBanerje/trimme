import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from "./navigators/stacks/Welcome"
import MainScreen from './screens/MainScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from './utils';
import EmailLogin from './screens/EmailLogin';

export const StoreContext = React.createContext(null)

export default function App() {

  const [isTouch, setTouch] = React.useState(false)
  const [isLoading, setLoading] = React.useState(true)

  const [state, setState] = React.useState({
    user: null,
    token: null,
    loggedIn: false,
    shops: [],
    customers: []
  })

  React.useEffect(() => {
    if(state.token) {
      AsyncStorage.setItem("user", JSON.stringify(state.user))
      AsyncStorage.setItem("token", state.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
    }
  }, [state.token])

  // React.useEffect(() => {
  //   (async () => {
  //     try{
  //       const isTouch = await AsyncStorage.getItem("isTouch")
  //       if(isTouch == "Y") {
  //         setTouch(true)
  //       }
  //       else {
  //         await AsyncStorage.setItem("isTouch", "Y")
  //       }
  //     }
  //     catch(err) {
  //       setTouch(false)
  //       setLoading(false)
  //     }
  //   })()
  // }, [])

  // React.useEffect(() => {
  //   if(isTouch) {
  //     (async () => {
  //       const token = await AsyncStorage.getItem("token")
  //       if(token) {
  //         try {
  //           const response = await axios.post("/user/verify", {token})
  //           if(response.status === 200) {
  //             await AsyncStorage.setItem("user", JSON.stringify(response.data.user))
  //             await AsyncStorage.setItem("token", response.status.token)
  //             navigation.navigate("MainScreen")
  //           }
  //           else {
  //             navigation.navigate("EmailLogin")
  //           }
  //         }
  //         catch(err) {
  //           navigation.navigate("EmailLogin")
  //         }
  //       }
  //       else {
  //         navigation.navigate("EmailLogin")
  //       }
  //     })()
  //   }
  //   else {
  //     if(!isLoading)
  //       navigation.push("Splash1")
  //   }
  // }, [isTouch, isLoading])

  return (
    <StoreContext.Provider value={{state, setState}}> 
      <SafeAreaProvider>
        <Welcome />
      </SafeAreaProvider>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
