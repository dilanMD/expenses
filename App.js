import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Register from './src/screens/Register'
import AuthStack from './src/components/AuthStack'

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>

        )
    }
}