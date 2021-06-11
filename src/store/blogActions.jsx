export const getBlog = () => {
    return {
        type: 'GET_BLOG',
    }
}

export const deleteEntry = (id) => {
    return {
        type: 'DELETE_ENTRY',
        payload: id
    }
}

export const addEntry = (entry) => {
    return {
        type: 'ADD_ENTRY',
        payload: entry
    }
}