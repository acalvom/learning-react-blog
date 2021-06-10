import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

const EntryDetail = () => {
    const {id} = useParams();
    const entry = useSelector((state) => {
        return state.blog.entries.find(entry => entry.id === id)
    });
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDeleteEntry = () => {
        dispatch({type: 'DELETE_ENTRY', payload: id});
        history.push('/');
    }

    return (
        <div className="entry-details">
            {entry && <div>
                <h2>{entry.title}</h2>
                <h4>By: {entry.author}</h4>
                <hr/>
                <p>{entry.content}</p>
                <button onClick={handleDeleteEntry} className="btn btn-outline-danger">Delete</button>
            </div>}
        </div>
    );
};

export default EntryDetail;