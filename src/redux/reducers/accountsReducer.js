import {
    ADD_ACCOUNT,
    ADD_ACCOUNT_ERROR,
    SHOW_UPDATE_COLOR,
    HIDE_UPDATE_COLOR,
} from "../actions/types/accounts.js"

const initialState = {
    accounts: [],
    accountColor: '',
    updateColorModal: false
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT:
            console.log('Created account', action.payload)
            return state
        case ADD_ACCOUNT_ERROR:
            console.log('Error in account creation', action.payload)
            return state
        case SHOW_UPDATE_COLOR:
            return { ...state, updateColorModal: true }
        case HIDE_UPDATE_COLOR:
            return { ...state, updateColorModal: false }
        default:
            return state
    }
}

export default accountReducer