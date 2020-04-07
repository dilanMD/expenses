import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryAdd from '../screens/Categories/CategoryAdd';

const Stack = createStackNavigator();

export default function HelpersStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="CategoryAdd" component={CategoryAdd} />
        </Stack.Navigator>
    );
}
