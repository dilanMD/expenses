import { LOGIN_ERROR, LOGIN_SUCCESS } from "../actions/types/auth"

const initialState = {
    authError: null
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            console.log('Login failed')
            return { ...state, authError: 'Login failed' }
        case LOGIN_SUCCESS:
            console.log('Login success')
            return { ...state, authError: null }
        default:
            return state
    }
}

export default registerReducer