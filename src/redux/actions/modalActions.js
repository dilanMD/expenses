import {
    SHOW_MODAL,
    HIDE_MODAL,
    SHOW_ICON_MODAL,
    HIDE_ICON_MODAL,
    SHOW_ACCOUNTS_ADD_MODAL,
    HIDE_ACCOUNTS_ADD_MODAL
} from '../actions/types/modal'

export const showModal = () => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_MODAL })
    }
}

export const hideModal = () => {
    return (dispatch, getState) => {
        dispatch({ type: HIDE_MODAL })
    }
}

export const showIconModal = () => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_ICON_MODAL })
    }
}

export const hideIconModal = () => {
    return (dispatch, getState) => {
        dispatch({ type: HIDE_ICON_MODAL })
    }
}

export const showAccountsAddModal = () => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_ACCOUNTS_ADD_MODAL })
    }
}

export const hideAccountsAddModal = () => {
    return (dispatch, getState) => {
        dispatch({ type: HIDE_ACCOUNTS_ADD_MODAL })
    }
}