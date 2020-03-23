import { combineReducers } from 'redux'

import accountsReducer from './accountsReducer'
import authReducer from './authReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    accountsReducer,
    authReducer,
    firestoreReducer,
    firebaseReducer
})

export default rootReducer