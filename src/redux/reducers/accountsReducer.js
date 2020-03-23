import { ADD_ACCOUNT, ADD_ACCOUNT_ERROR } from "../actions/types/accounts.js"

const initialState = {
    accounts: [
        { key: "1", label: 'Wallet', amount: "505" },
        { key: "2", label: 'Commercial Bank', amount: "32,990.39" },
        { key: "3", label: 'Peoples Bank', amount: "1116.75" },
    ]
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT:
            console.log('Created account', action.payload)
            return state
        case ADD_ACCOUNT_ERROR:
            console.log('Error in account creation', action.payload)
            return state
        default:
            return state
    }
}

export default accountReducer