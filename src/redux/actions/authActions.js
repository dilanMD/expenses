import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from './types/auth'

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

export const register = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username
            })
        }).then(() => {
            dispatch({ type: REGISTER_SUCCESS })
        }).catch((error) => {
            dispatch({ type: REGISTER_ERROR, error })
        })
    }
}