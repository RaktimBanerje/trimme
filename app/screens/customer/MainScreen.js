import { Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const MainScreen = () => {
  const [barbars, setBarbar] = React.useState([
    {
      id: "1",
      name: "Raktim Banerjee",
      nickname: "Raktim",
      image: "",
    }
  ])

  return (
    <View style={styles.container}>
        <Text>CUSTOMER</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MainScreen