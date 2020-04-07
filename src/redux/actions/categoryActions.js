import {
    SHOW_STACK_NAVIGATION,
    HIDE_STACK_NAVIGATION,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_ERROR,
    UPDATE_CATEGORY
} from '../actions/types/categories'

export const showStackNav = () => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_STACK_NAVIGATION })
    }
}

export const hideStackNav = () => {
    return (dispatch, getState) => {
        dispatch({ type: HIDE_STACK_NAVIGATION })
    }
}

export const addCategory = (category) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const firebase = getFirebase()
        const user = firebase.auth().currentUser

        firestore.collection('categories').add({
            ...category,
            username: 'deluxan',
            userId: user.uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: ADD_CATEGORY_SUCCESS, payload: category })
        }).catch((error) => {
            dispatch({ type: ADD_CATEGORY_ERROR, payload: error })
        })
    }
}

export const updateCategory = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: UPDATE_CATEGORY,
            payload: id
        })
    }
}