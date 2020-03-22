import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import accountReducer from './src/redux/reducers/accountsReducer'

const store = createStore(accountReducer)

const root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => root);
