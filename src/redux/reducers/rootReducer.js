import { combineReducers } from 'redux'

import accountsReducer from './accountsReducer'
import categoryReducer from './categoryReducer'
import authReducer from './authReducer'
import modalReducer from './modalReducer'
import colorReducer from './colorReducer'
import iconReducer from './iconReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    accountsReducer,
    authReducer,
    categoryReducer,
    modalReducer,
    iconReducer,
    colorReducer,
    firestoreReducer,
    firebaseReducer
})

export default rootReducer