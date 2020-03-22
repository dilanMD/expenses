const initialState = {
    accounts: [
        { key: "1", label: 'Wallet', amount: "505" },
        { key: "2", label: 'Commercial Bank', amount: "32,990.39" },
        { key: "3", label: 'Peoples Bank', amount: "1116.75" },
    ]
}

const accountReducer = (state = initialState, action) => {
    return state
}

export default accountReducer