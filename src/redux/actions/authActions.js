import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from './types/auth'

export const login = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: LOGIN_SUCCESS })
        }).catch((error) => {
            dispatch({ type: LOGIN_ERROR, error })
        })
    }
}

export const logout = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signOut().then(() => {
            dispatch({ type: LOGOUT_SUCCESS })
        })
    }
}