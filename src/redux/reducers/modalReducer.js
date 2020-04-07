import {
    SHOW_MODAL,
    HIDE_MODAL,
    SHOW_ICON_MODAL,
    HIDE_ICON_MODAL,
    SHOW_ACCOUNTS_ADD_MODAL,
    HIDE_ACCOUNTS_ADD_MODAL
} from '../actions/types/modal'

const initialState = {
    isModalVisible: false,
    isIconModalVisible: false,
    accountsAddModal: false
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { ...state, isModalVisible: true }
        case HIDE_MODAL:
            return { ...state, isModalVisible: false }
        case SHOW_ICON_MODAL:
            return { ...state, isIconModalVisible: true }
        case HIDE_ICON_MODAL:
            return { ...state, isIconModalVisible: false }
        case SHOW_ACCOUNTS_ADD_MODAL:
            return { ...state, accountsAddModal: true }
        case HIDE_ACCOUNTS_ADD_MODAL:
            return { ...state, accountsAddModal: false }
        default:
            return state
    }
}

export default modalReducer