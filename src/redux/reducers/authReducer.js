import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types/auth"

const initialState = {
    isLoggedIn: false,
    authError: null
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
        default:
            return state
    }
}

export default registerReducer