import { decode, encode } from 'base-64'
import React from 'react'
import { AppRegistry, YellowBox } from 'react-native'
import App from './App'
import Home from './src/screens/Home'
import { name as appName } from './app.json'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from './src/firebase/config'
import rootReducer from './src/redux/reducers/rootReducer'

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

YellowBox.ignoreWarnings(['Setting a timer'])

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase)
    )
)

const config = {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true
};

const rrfProps = {
    firebase,
    config,
    dispatch: store.dispatch,
    createFirestoreInstance
}

const root = () => {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => root);
