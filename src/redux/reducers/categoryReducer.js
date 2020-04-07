import {
    SHOW_STACK_NAVIGATION,
    HIDE_STACK_NAVIGATION,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_ERROR,
    UPDATE_CATEGORY
} from '../actions/types/categories'

const initialState = {
    stackNavigation: false,
    categories: [],
    updateId: ''
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_STACK_NAVIGATION:
            return { ...state, stackNavigation: true }
        case HIDE_STACK_NAVIGATION:
            return { ...state, stackNavigation: false }
        case ADD_CATEGORY_SUCCESS:
            return state
        case ADD_CATEGORY_ERROR:
            return state
        case UPDATE_CATEGORY:
            return { ...state, updateId: action.payload }
        default:
            return state
    }
}

export default categoryReducer