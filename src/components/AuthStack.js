import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Register from '../screens/Register'
import Login from '../screens/Login'
import Home from '../screens/Home'

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName='Register'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
