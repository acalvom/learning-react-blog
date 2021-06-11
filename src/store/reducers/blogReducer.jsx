import {v4 as uuidv4} from 'uuid';

const initState = {
    entries: []
}

const blogReducer = (state = initState, action) => {
    if (action.type === 'GET_BLOG') {
        return {
            ...state,
            entries: state.entries
        }
    } else if (action.type === 'ADD_ENTRY') {
        action.payload.id = uuidv4();
        return {
            ...state,
            entries: [...state.entries, action.payload]
        }
    } else if (action.type === 'DELETE_ENTRY') {
        let newEntries = state.entries.filter(entry => {
            return entry.id !== action.payload
        })
        return {
            ...state,
            entries: newEntries
        }
    }
    return state;
};

export default blogReducer;
