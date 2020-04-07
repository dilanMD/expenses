import { CHANGE_SELECTED_ICON } from "../actions/types/icon"

const initialState = {
    iconsLists: [
        { key: 'check', name: 'check' },
        { key: 'close', name: 'close' },
        { key: 'account', name: 'account' },
        { key: 'wallet', name: 'wallet' },
        { key: 'cart', name: 'cart' },
    ],
    selectedIcon: "cart"
}

const iconReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_ICON:
            return { ...state, selectedIcon: action.name }
        default:
            return state
    }
}

export default iconReducer