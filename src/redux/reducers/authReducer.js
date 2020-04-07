import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "../actions/types/auth"

const initialState = {
    isLoggedIn: false,
    authError: null,
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            console.log('Login failed')
            return { ...state, isLoggedIn: false, authError: 'Login failed' }
        case LOGIN_SUCCESS:
            console.log('Login success')
            return { ...state, isLoggedIn: true, authError: null }
        case LOGOUT_SUCCESS:
            console.log('Logged out')
            return { ...state, isLoggedIn: false }
        case REGISTER_SUCCESS:
            console.log('Successfully registered')
            return { ...state, isLoggedIn: true, authError: null }
        case REGISTER_ERROR:
            console.log(action.error.message)
            return { ...state, isLoggedIn: false, authError: action.error.message }
        default:
            return state
    }
}

export default registerReducer