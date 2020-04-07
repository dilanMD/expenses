import { CHANGE_SELECTED_ICON } from './types/icon'

export const changeSelectedIcon = (name) => {
    return (dispatch, getState) => {
        dispatch({
            type: CHANGE_SELECTED_ICON,
            name
        })
    }
}