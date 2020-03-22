import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyTabs from '../components/Navigation'

export default class Home extends Component {
    render() {
        return (
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        )
    }
}
