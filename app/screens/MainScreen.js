import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Text } from '@rneui/base'
import BarbarDrawer from '../navigators/drawer/BarbarDrawer'
import CustomerDrawer from '../navigators/drawer/CustomerDrawer'
import { View } from 'react-native'

const MainScreen = () => {

  const [user, setUser] = React.useState({role: "BARBAR"})

  // React.useEffect(() => {
  //   (async function () {
  //     let user = await AsyncStorage.getItem("user")
  //     setUser(JSON.parse(user))
  //   })()
  // }, [])

  return (
    <>
      {user!=null && user.role == "BARBAR" && <BarbarDrawer />}
      {user!=null && user.role == "CUSTOMER" && <CustomerDrawer />}
    </>
  )
}

export default MainScreen