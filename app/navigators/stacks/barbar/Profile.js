import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditStorefront from '../../../screens/barbar/EditStorefront';
import ProfileScreen from '../../../screens/barbar/ProfileScreen';
import AddService from '../../../screens/barbar/AddService';

export default function BarbarProfile() {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator 
        initialRouteName={"ProfileScreen"} 
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="EditStorefrontScreen" component={EditStorefront} />
            <Stack.Screen name="AddServiceScreen" component={AddService} />
        </Stack.Navigator>
    );
}