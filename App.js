import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from "react-redux"
import Register from './src/screens/Register'
import AuthStack from './src/components/AuthStack'
import Home from './src/screens/Home'

class App extends Component {

    renderScreen = () => {
        const { authError } = this.props
        return authError == null ? <Home /> : <AuthStack />
    }

    render() {
        return (
            <NavigationContainer>
                {this.renderScreen()}
            </NavigationContainer>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authReducer.authError
    }
}

export default connect(mapStateToProps, null)(App)