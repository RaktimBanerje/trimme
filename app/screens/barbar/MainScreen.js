import { Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const MainScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Barbar</Text>
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