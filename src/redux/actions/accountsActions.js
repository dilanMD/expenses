import {
    ADD_ACCOUNT,
    ADD_ACCOUNT_ERROR,
    SHOW_UPDATE_COLOR,
    HIDE_UPDATE_COLOR,
} from './types/accounts.js'

export const createAccount = (account) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const firebase = getFirebase()
        const user = firebase.auth().currentUser

        firestore.collection('accounts').add({
            name: account.name,
            type: account.type,
            color: account.color,
            balance: account.balance,
            userId: user.uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: ADD_ACCOUNT, payload: account })
        }).catch((error) => {
            dispatch({ type: ADD_ACCOUNT_ERROR, payload: error })
        })
    }
}

export const showUpdateColorModal = () => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_UPDATE_COLOR })
    }
}

export const hideUpdateColorModal = () => {
    return (dispatch, getState) => {
        dispatch({ type: HIDE_UPDATE_COLOR })
    }
}