import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from '@rneui/base';
import MainScreen from '../../screens/barbar/MainScreen';
import BarbarProfile from '../stacks/barbar/Profile';

const DrawerContent = (props) => {

    return (
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: "#FFF", flex: 1}}>
                <DrawerItemList {...props} />  
                <View style={{padding: 10, borderTopWidth: 1, borderTopColor: "#CCC"}}>
                    <Button
                        title="Log Out"
                        color="black" 
                        onPress={() => dispatch({type: "LOGOUT"})}
                    />
                </View>  
            </DrawerContentScrollView>
    )
}

const BarbarDrawer = () => {
    
    const Drawer = createDrawerNavigator()
    
    return (
        <Drawer.Navigator 
            drawerContent={(props) => <DrawerContent {...props} />}
            initialRouteName={"Home"} 
            screenOptions={{
                headerStatusBarHeight: 25,
            }}
        >

            <Drawer.Screen name="Home" component={MainScreen} />
            <Drawer.Screen name="Profile" component={BarbarProfile} />

        </Drawer.Navigator>
    )
}

export default BarbarDrawer