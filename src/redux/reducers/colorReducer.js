import { CHANGE_SELECTED_COLOR } from '../actions/types/color'
import { ACCENT } from '../../components/Colors'

const initialState = {
    primary: [
        { key: 'red', code: '#B71C1C' },
        { key: 'pink', code: '#880E4F' },
        { key: 'purple', code: '#4A148C' },
        { key: 'deeppurple', code: '#311B92' },
        { key: 'indigo', code: '#1A237E' },
        { key: 'blue', code: '#0D47A1' },
        { key: 'lightblue', code: '#01579B' },
        { key: 'cyan', code: '#006064' },
        { key: 'teal', code: '#004D40' },
        { key: 'green', code: '#1B5E20' },
        { key: 'lightgreen', code: '#33691E' },
        { key: 'lime', code: '#827717' },
        { key: 'yellow', code: '#F57F17' },
        { key: 'amber', code: '#FF6F00' },
        { key: 'orange', code: '#E65100' },
        { key: 'deeporange', code: '#BF360C' },
        { key: 'brown', code: '#3E2723' },
        { key: 'gray', code: '#212121' },
        { key: 'bluegray', code: '#263238' },
        { key: 'black', code: '#000000' },
        { key: 'white', code: '#FFFFFF' },
    ],
    selectedColor: ACCENT
}

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_COLOR:
            return { ...state, selectedColor: action.code }
        default:
            return state
    }
}

export default colorReducer