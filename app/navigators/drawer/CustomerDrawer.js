import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from '@rneui/base';
import MainScreen from '../../screens/customer/MainScreen';
import CustomerMainStack from '../stacks/customer/Main';

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

const CustomerDrawer = () => {
    
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator 
            drawerContent={(props) => <DrawerContent {...props} />}
            initialRouteName={"Home"} 
            screenOptions={{
                headerStatusBarHeight: 25,
            }}
        >
            <Drawer.Screen name="Home" component={CustomerMainStack} />
            <Drawer.Screen name="Home1" component={CustomerMainStack} />
        </Drawer.Navigator>
    )
}

export default CustomerDrawer