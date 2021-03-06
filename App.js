import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from "react-redux"
import Register from './src/screens/Register'
import AuthStack from './src/components/AuthStack'
import Home from './src/screens/Home'
import IconTabs from './src/components/IconNavigation'
import HelpersStack from './src/components/HelpersStack'

class App extends Component {

    renderScreen = () => {
        const { isLoggedIn, authError, stackNavigation } = this.props
        if (!isLoggedIn) {
            return <AuthStack />
        } else if (isLoggedIn) {
            if (stackNavigation) {
                return <HelpersStack />
            } else {
                return <Home />
            }
        }
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
        authError: state.authReducer.authError,
        isLoggedIn: state.authReducer.isLoggedIn,
        stackNavigation: state.categoryReducer.stackNavigation
    }
}

export default connect(mapStateToProps, null)(App)