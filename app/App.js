import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from "./navigators/stacks/Welcome"
import AsyncStorage from "@react-native-async-storage/async-storage"
import BarbarDrawer from "./navigators/drawer/BarbarDrawer"
import CustomerDrawer from "./navigators/drawer/CustomerDrawer"
import MainScreen from './screens/MainScreen';

export default function App() {

  const [user, setUser] = React.useState(user)

  React.useEffect(() => {
    (async function () {
      let user = await AsyncStorage.getItem("user")
      setUser(JSON.parse(user))
    })()
  }, [])
  
  return (
    <SafeAreaProvider>
      <Welcome />
    </SafeAreaProvider>
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
