import { ADD_ACCOUNT, ADD_ACCOUNT_ERROR } from './types/accounts.js'

export const createAccount = (account) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('accounts').add({
            ...account,
            username: 'deluxan',
            userId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: ADD_ACCOUNT, payload: account })
        }).catch((error) => {
            dispatch({ type: ADD_ACCOUNT_ERROR, payload: error })
        })
    }
}