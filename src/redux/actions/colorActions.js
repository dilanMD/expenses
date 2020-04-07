import { CHANGE_SELECTED_COLOR } from './types/color'

export const changeSelectedColor = (code) => {
    return (dispatch, getState) => {
        dispatch({
            type: CHANGE_SELECTED_COLOR,
            code
        })
    }
}