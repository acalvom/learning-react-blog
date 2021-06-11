import axios from "axios";

export const getBlog = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:8000/blog')
        dispatch({
            type: 'GET_BLOG',
            payload: res.data
        })
    } catch (error) {
        console.log(error)
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